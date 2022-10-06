//imports
const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

//This middleware function executes every time the app receives a request
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;