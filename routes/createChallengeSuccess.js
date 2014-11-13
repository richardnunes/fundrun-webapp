var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res) {
  res.render('createChallengeSuccess', { title: 'createChallengeSuccess' });
    console.log("body");
    console.log(req.body.simplifyToken);
    globalToken = req.body.simplifyToken;
    globalAmount = req.body.amount;
});

module.exports = router;
