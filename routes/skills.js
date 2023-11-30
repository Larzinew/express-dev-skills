var express = require('express');
var router = express.Router();

var skillsCtrl = require('../controllers/skills')

// GET /skill
router.get('/', skillsCtrl.index);

// GET skill/new
router.get('/new', skillsCtrl.new);

// GET /skill/:id
router.get('/:id', skillsCtrl.show);

// POST /skills
router.post('/', skillsCtrl.create); 

// new route below
router.delete('/:id', skillsCtrl.delete);

module.exports = router;