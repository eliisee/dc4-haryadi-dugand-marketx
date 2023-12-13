const uuid = require('uuid/v1');
const Campaigns = require('../models/campaigns');

exports.getAllCampaigns = (req, res, next) => {
  Campaigns.find().then(
    (campaigns) => {
      const mappedCampaigns = campaigns.map((campaigns) => {
        /*product.imageUrl = req.protocol + '://' + req.get('host') + '/images/' + product.imageUrl;*/
        return campaigns;
      });
      res.status(200).json(mappedCampaigns);
    }
  ).catch(
    () => {
      res.status(500).send(new Error('Database error!'));
    }
  );
};

exports.getOneCampaigns = (req, res, next) => {
  Campaigns.findById(req.params.id).then(
    (campaigns) => {
      if (!campaigns) {
        return res.status(404).send(new Error('Product not found!'));
      }
      /* product.imageUrl = req.protocol + '://' + req.get('host') + '/images/' + product.imageUrl;*/ 
      res.status(200).json(campaigns);
    }
  ).catch(
    () => {
      res.status(500).send(new Error('Database error!'));
    }
  )
};

/**
 *
 * Expects request to contain:
 * contact: {
 *   firstName: string,
 *   lastName: string,
 *   address: string,
 *   city: string,
 *   email: string
 * }
 * products: [string] <-- array of product _id
 *
 */
exports.orderCampaigns = (req, res, next) => {
  if (!req.body.contact ||
      !req.body.contact.firstName ||
      !req.body.contact.lastName ||
      !req.body.contact.address ||
      !req.body.contact.city ||
      !req.body.contact.email ||
      !req.body.campaigns) {
    return res.status(400).send(new Error('Bad request!'));
  }
  let queries = [];
  for (let campaignsId of req.body.campaigns) {
    const queryPromise = new Promise((resolve, reject) => {
      Campaigns.findById(CampaignsId).then(
        (campaigns) => {
          if (!campaigns) {
            reject('Product not found: ' + campaignsId);
          }
          /* product.imageUrl = req.protocol + '://' + req.get('host') + '/images/' + product.imageUrl;*/
          resolve(campaigns);
        }
      ).catch(
        () => {
          reject('Database error!');
        }
      )
    });
    queries.push(queryPromise);
  }
  Promise.all(queries).then(
    (campaigns) => {
      const orderId = uuid();
      return res.status(201).json({
        contact: req.body.contact,
        campaigns: campaigns,
        orderId: orderId
      })
    }
  ).catch(
    (error) => {
      return res.status(500).json(new Error(error));
    }
  );
};