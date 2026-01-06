const express = require('express');
const helmet = require('helmet'); // Sécurité
const rateLimit = require('express-rate-limit');

const app = express();

// Configuration de la sécurité (OWASP Standards)
app.use(helmet());
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // Limite chaque IP à 100 requêtes
});
app.use(limiter);

app.get('/', (req, res) => {
  res.send('API Secure-Stack opérationnelle. Statut: 200 OK');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));