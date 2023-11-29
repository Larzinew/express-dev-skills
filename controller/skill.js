const Skill = require('../models/skill')

module.exports = {
    index,
    
};

// function show(req, res){
//     res.render('skill/show', {
//         skill: Skill.getOne(req.params.id)
//     });
// }

function index(req, res) {
    console.log('hitting')
    res.render('skill/index', {
      skill: Skill.getAll()
    });
  }