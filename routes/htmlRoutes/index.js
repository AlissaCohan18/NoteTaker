const path = require('path');
const router = require('express').Router();


router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/notes.html'));
});


//Note: * wildcard route should ALWAYS come last to avoid taking
  // precedence over named routes, and you won't see what you expect
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});



module.exports = router;