const express = require('express');
const router = express.Router();

const campaignsCtrl = require('../controllers/campaigns');

router.get('api/campaigns', campaignsCtrl.);
router.get('/:id', campaignsCtrl.getOneCampaigns);
router.post('/order', campaignsCtrl.orderCampaigns);

module.exports = router;