const express = require('express');
const app = express();
const port = 3002; // Assurez-vous que ce port est libre ou modifiez-le selon vos besoins

// Middleware pour parser le corps des requêtes en JSON
app.use(express.json());

// Données des campagnes stockées en mémoire (exemple de base)
let campaigns = [
    { id: 1, name: 'Campagne A', description: 'Description A', startDate: '2024-01-01', endDate: '2024-12-31', budget: 10000 },
    // D'autres campagnes peuvent être ajoutées ici
];

// Route pour récupérer toutes les campagnes
app.get('/api/campaigns', (req, res) => {
    res.json(campaigns);
});

// Route pour créer une nouvelle campagne
app.post('/api/campaigns', (req, res) => {
    const { name, description, startDate, endDate, budget } = req.body;
    // Créez une nouvelle campagne avec un id unique. Ici, nous utilisons simplement la longueur du tableau + 1 pour simplifier.
    const newCampaign = {
        id: campaigns.length + 1,
        name,
        description,
        startDate,
        endDate,
        budget,
    };
    campaigns.push(newCampaign);
    res.status(201).send(newCampaign); // Envoie la nouvelle campagne avec le statut 201 (Créé)
});

// Démarrage du serveur
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});



