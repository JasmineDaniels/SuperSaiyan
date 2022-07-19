const inquirer = require('inquirer')
const fs = require('fs')
const Manager = require('./classes/buildManager');
const Engineer  = require('./classes/buildEngineer');
const Intern = require('./classes/buildIntern');
//const profileAutomator = require('./helpers/profileAutomator')
//const chooseEmployee = require('./helpers/chooseEmployee')

let allEngineers = [];
let allInterns = [];
let managerCard;

function managerPromise(){ 
    inquirer.prompt([ 
        {
            type: 'input',
            message: 'Manager Name:',
            name: 'HTML1', 
        },
        {
            type: 'input',
            message: 'Manager I.D#:',
            name: 'HTML2', 
        },
        {
            type: 'input',
            message: 'Manager Email:',
            name: 'HTML3', 
        },
        {
            type: 'input',
            message: 'Manager Office No:',
            name: 'HTML4',
        }, 
    ])
    .then((answers) => {
        
        const newManager  = new Manager(answers.HTML1, answers.HTML2, answers.HTML3, answers.HTML4)
        //console.log(newManager.getCard())
        managerCard = newManager.getCard()
        chooseEmployee()
    })
    .catch((err) => {
        console.log(err)
    });
}
managerPromise()

function engineerPromise() {
    inquirer.prompt([ 
        {
            type: 'input',
            message: 'Engineer Name:',
            name: 'HTML1', 
        },
        {
            type: 'input',
            message: 'Engineer I.D#:',
            name: 'HTML2', 
        },
        {
            type: 'input',
            message: 'Engineer Email:',
            name: 'HTML3',
        },
        {
            type: 'input',
            message: 'Github Username:',
            name: 'HTML4',
        },
    ])
    .then((answers) =>{

      const newEngineer  = new Engineer(answers.HTML1, answers.HTML2, answers.HTML3, answers.HTML4) 
      let engineerCard = newEngineer.getCard()
      allEngineers.push(engineerCard)
      chooseEmployee2()
    
    })
    .catch((err) => {
        console.log(err)
    })
}

function internPromise() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Intern Name:',
            name: 'HTML1',
        },
        {
            type: 'input',
            message: 'Intern I.D:',
            name: 'HTML2',
        },
        {
            type: 'input',
            message: 'Intern Email:',
            name: 'HTML3',
        },
        {
            type: 'input',
            message: 'Intern School?',
            name: 'HTML4'
        }
    ])
    .then((answers) => {
      const newIntern = new Intern(answers.HTML1, answers.HTML2, answers.HTML3, answers.HTML4)
      let internCard = newIntern.getCard()
      allInterns.push(internCard)
      chooseEmployee3()
    
    })
    .catch((err) => {
        console.log(err)
    })
}

function rewriteHTML(){   
    if (allEngineers.length != 0 && allInterns.length != 0){
        const allEmployees = [managerCard, ...allEngineers, ...allInterns]
        generateHTMLFile(allEmployees)
    } 
    if (allEngineers.length == 0){
        const allEmployees = [managerCard, ...allInterns]
        generateHTMLFile(allEmployees)
    }
    if (allInterns.length == 0){
        const allEmployees = [managerCard, ...allEngineers]
        generateHTMLFile(allEmployees)
    }
    if (allEngineers.length == 0 && allInterns == 0){
        const allEmployees = [managerCard]
        generateHTMLFile(allEmployees)
    }   
}



function chooseEmployee3 (){
    inquirer.prompt([
        {
            type: 'input',
            message: 'Would you like to continue? (Y/N)',
            name: 'Option1',
            validate(value){
                if (value == "Y" || value == "N"){
                    return true
                }
                return "Please type Y or N"
            }
        },
    ])
    .then((answers) => {
        if(answers.Option1 == "N"){
            rewriteHTML()
        }
        if (answers.Option1 == "Y"){
            inquirer.prompt([
                {
                    type: 'input',
                    message: 'Main Menu? (Y/N)', 
                    name: 'Option2',
                    validate(value){
                        if (value == "Y" || value == "N"){
                            return true
                        }
                        return "Please type Y or N"
                    }
                },
            ])
            .then((answers) => {
                if (answers.Option2 == "Y"){
                    chooseEmployee()
                }
                if (answers.Option2 == "N"){
                    return
                }
            })
        }
    })
}


function chooseEmployee2(){
    inquirer.prompt([
        {
            type: 'input',
            message: 'Would you like to continue? (Y/N)',
            name: 'Option1',
            validate(value){
                if (value == "Y" || value == "N"){
                    return true
                }
                return "Please type Y or N"
            }
        },
    ])
    .then((answers) => {
        if(answers.Option1 == "N"){
            rewriteHTML()
        }
        if (answers.Option1 == "Y"){
            inquirer.prompt([
                {
                    type: 'input',
                    message: 'Build Intern? (Y/N)', 
                    name: 'Option2',
                    validate(value){
                        if (value == "Y" || value == "N"){
                            return true
                        }
                        return "Please type Y or N"
                    }
                },
            ])
            .then((answers) => {
                if (answers.Option2 == "Y"){
                    internPromise()
                }
                if (answers.Option2 == "N"){
                    return
                }
            })
        }
    })
}


function chooseEmployee(){
    inquirer.prompt([
        {
            type: 'input',
            message: 'Would you like to continue? (Y/N)',
            name: 'Option1',
            validate(value){
                if (value == "Y" || value == "N"){
                    return true
                }
                return "Please type Y or N"
            }
        },
        
    ])
    .then((answers) => {
        if(answers.Option1 == "N"){
            rewriteHTML()
        }
        if (answers.Option1 == "Y"){
            inquirer.prompt([
                {
                    type: 'input',
                    message: 'Build Engineer? (Y/N)', 
                    name: 'Option2',
                    validate(value){
                        if (value == "Y" || value == "N"){
                            return true
                        }
                        return "Please type Y or N"
                    }
                },
            ])
            .then((answers) => {
                if(answers.Option2 == "Y"){
                    engineerPromise()
                }
                if (answers.Option2 == "N"){
                    inquirer.prompt([
                        {
                            type: 'input',
                            message: 'Build Intern? (Y/N)', 
                            name: 'Option3',
                            validate(value){
                                if (value == "Y" || value == "N"){
                                    return true
                                }
                                return "Please type Y or N"
                            }
                        },
                    ])
                    .then((answers) => {
                        if (answers.Option3 == "Y"){
                            internPromise()
                        }
                        if (answers.Option3 == "N"){
                            return
                        }
                    })
                }
            })
        }  


        
    })

}

function generateHTMLFile(allEmployees){ 
    if (allEmployees.length !== 0) {
          let html5 = `<!DOCTYPE html>
                <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Profile Automator</title>
                        <!-- Link Bootstrap -->
                        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" 
                        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
                        crossorigin="anonymous">
                        <!-- Font Awesome -->
                        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" rel="stylesheet">
                        <!-- Link CSS -->
                        <link rel="stylesheet" href="./style.css">
                        <!-- Link Favicon -->
                    </head>
                    <body>
                        <main class="text-center">

                         ${allEmployees}


                        </main>
                    
                        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
                        <!-- Link JS Script -->
                        <script src="./script.js"></script>
                    </body>
                </html>`   

            fs.writeFile('index.html', html5, (err) => {
                err ? console.error(`Oops! Try Again`) : console.log('Success!')
            });
    }

}