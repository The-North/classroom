const firebase = require('firebase')
// Add config

const config = {
	apiKey: '',
	authDomain: '',
	databaseURL: ''
}

firebase.initializeApp(config);
const fb = firebase.database();

/*

JSON Tree
db: {
  classes: {
    1: {
      id: 1
      name: English 101
      teacher: Joe
      subject: English
      students: {
        Ara: {}
      }
    }
  }
}
*/

const startClass = function(classObj) {
  const classId = classObj.id
  const classList = fb.ref('/classes/' + classId) 

  return classList.push(classObj)
  .then(()=> console.log('Launched claass ' + classObj.name))
  .catch((err)=> console.log('Issue starting class' + err))
}

const endClass = function(classId) {
 
}

// Database helpers

module.exports = {
  fb,
  startClass,
}