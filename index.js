// Version simplifiée sans DB
require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

// Configuration
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Dossier views/
app.use(express.static(path.join(__dirname, 'public'))); // Dossier public/
app.use(express.urlencoded({ extended: true })); // Pour traiter les formulaires

// Routes
const mainRoutes = require('./routes/index');
app.use('/', mainRoutes);

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
