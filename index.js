console.log(`Program Started`)

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
        managerAnswers(answers)
    })
    .catch 
}

let managerAnswers = () => {
    class Manager {
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
        engineerAnswers(answers)
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
        internAnswers(answers)
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
