const skills = [
    {id: 346, language: 'JavaScript'},
    {id: 246, language: 'HTML'},
    {id: 546, language: 'css'}
    
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
  };
	
  function getAll() {
    return skills;
  }
  
  function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    // The Array.prototype.find iterator method is
    // ideal for finding objects within an array
    return skill.find(skill => skill.id === id);
  }
  function create(skill) {
    skill.id = Date.now() % 1000000;
    skills.push(skill)

  }
  function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    todos.splice(idx, 1);
  }


