const express = require('express');
const router = express.Router();

// Middleware pour parser les données du formulaire
router.use(express.urlencoded({ extended: true }));

// Page d'accueil
router.get('/', (req, res) => {
  res.render('home');
});

// Page d'inscription
router.get('/register', (req, res) => {
  res.render('register');
});

// Page de connexion
router.get('/login', (req, res) => {
  res.render('login', { message: null }); // message par défaut
});

// Traitement de la connexion
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  console.log('Tentative de login avec:', email);

  // Ici tu peux faire la vérification avec une base de données
  const message = '✅ Bien reçu !'; // Message de succès

  res.render('login', { message });
});

module.exports = router;

router.get('/buy', (req, res) => {
  res.render('buy');
});

router.get('/nabda', (req, res) => {
  res.render('nabda');
});
