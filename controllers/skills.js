const Skill = require('../models/skill')

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill

    
};

function newSkill(req, res){
   res.render('skills/new', { title: 'New Skill' });
  }

function index(req, res) {
    console.log('hitting')
    res.render('skills/index', {
      skills: Skill.getAll()
    });
  }
  function show(req, res) {
    res.render('skills/show', {
      skill: skill.getOne(req.params.id),
    });
  }
  function create(re,res) {
    console.log(req.body);
    // This model creates data 
    //skills.create(req.body);
    //Do a redirect anytime data is changed
    res.redirect('/skills');
  }
  function deleteSkill(req, res) {
    skill.deleteOne(req.params.id);
    res.redirect('/skills');
  }