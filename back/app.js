const express = require('express');
const app = express();
const port = 3000;

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

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
