const express = require('express');
const app = express();
const port = 3001;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


// Données des campagnes stockées en mémoire
const campaigns = [
    { id: 1, name: 'Campagne A', description: 'Description A', startDate: '2024-01-01', endDate: '2024-12-31', budget: 10000 },
    // Ajoutez d'autres campagnes selon le besoin
];

// Route pour récupérer toutes les campagnes
app.get('/api/campaigns', (req, res) => {
    res.json(campaigns);
});

// Route pour récupérer une campagne spécifique par son ID
app.get('/api/campaigns/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const campaign = campaigns.find(c => c.id === id);
    if (campaign) {
        res.json(campaign);
    } else {
        res.status(404).send('Campaign not found');
    }
});

app.get('/api/campaigns', (req, res) => {
  res.json([
    {
      id: 1,
      name: "Campagne A",
      description: "Description A",
      startDate: "2024-01-01",
      endDate: "2024-12-31",
      budget: 10000
    },
    {
      id: 2,
      name: "Campagne B",
      description: "Description B",
      startDate: "2024-02-01",
      endDate: "2024-08-31",
      budget: 5000
    },
    {
      id: 3,
      name: "Campagne C",
      description: "Description C",
      startDate: "2024-03-15",
      endDate: "2024-06-15",
      budget: 7500
    }
  ]);
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
