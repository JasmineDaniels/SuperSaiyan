console.log(`Program Started`)
const inquirer = require('inquirer')
const fs = require('fs')

function init() {
    inquirer.prompt([ 
        {
            type: 'input',
            message: 'Name:',
            name: 'HTML1',
        },
        {
            type: 'input',
            message: 'I.D#:',
            name: 'HTML2',
        },
        {
            type: 'input',
            message: 'Email:',
            name: 'HTML3',
        },
        {
            type: 'input',
            message: 'Office Number:',
            name: 'HTML4',
        },// test 
    ])
    .then((answers) => {
      //managerAnswers(answers)
      //console.log(answers)

      let question1 = `<h1>Name:</h1>`
      let managerName = `<h1>${answers.HTML1}</h1>\n\n`
      let pairs1 = `${question1} ${managerName}`

      //Write to disk
      fs.writeFile('index.html', pairs1, (err) => {
        err ? console.error(`Oops! Try Again`) : console.log('Success!')
      });
  
    })
    .catch((err) => {
        console.log(err)
    })
}
  
init()















function buildManager() {
    inquirer.prompt = ([
        {
            type: 'input',
            message: 'Name:',
            name: 'HTML1',
        },
        {
            type: 'input',
            message: 'I.D#:',
            name: 'HTML1',
        },
        {
            type: 'input',
            message: 'Email:',
            name: 'HTML1',
        },
        {
            type: 'input',
            message: 'Office Number:',
            name: 'HTML1',
        },
    ])
    .then((answers) =>{
        console.log(answers)
        //managerAnswers(answers)
        //let question1 = `<h1>Name:</h1>`
        //let managerName = answers.HTML1
        //let pairs1 = `${question1} ${managerName}`

        //Write to disk
        // fs.writeFile('index.html', pairs1, (err) => {
        //     err ? console.error(`Oops! Try Again`) : console.log('Success!')
        // });
    })
    .catch((err) => {
        console.log(err)
    }) 
}
//buildManager()

let managerAnswers = () => {
    class Manager { // do I create a new Manager 
        constructor (name, id, email, officeNum) {
            this.name = name;
            this.id = id;
            this.email = email;
            this.officeNum = officeNum;
        }

    }

}

function buildEngineer() {
    inquirer.prompt = ([
        {
    
        }
    ])
    .then((answers) =>{
        //engineerAnswers(answers)
    })
    .catch 
}

let engineerAnswers = () => {
    class Engineer extends Manager {
        constructor (name, id, email, username) {
            //const name 

            super(name, id, email);
            this.username = username;
        }
    }

}



function buildIntern() {
    inquirer.prompt = ([
        {
    
        }
    ])
    .then((answers) =>{
        //internAnswers(answers)
    })
    .catch 
}

let internAnswers = (answers) => {
    class Intern extends Manager {
        constructor (name, id, email, username) {
            this.name = name;
            this.id = id;
            this.email = email;
            this.username = username;
        }
    }
}
