var express = require('express');
var router = express.Router();

var skillsCtrl = require('../controllers/skill')

router.get('/', skillsCtrl.index);

module.exports = router;