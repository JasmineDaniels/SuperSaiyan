console.log(`Program Started`)
const inquirer = require('inquirer')
const fs = require('fs')
const Manager = require('./classes/buildManager');
const Engineer  = require('./classes/buildEngineer');
const Intern = require('./classes/buildIntern');


//const prompts = new Rx.Subject();
//Make funtion to ask if engineer or if intern 
//Loop thru arrays and append to HTML template
//add managers, engineers, inters to HTML
// allManagers.forEach(newManager => {
        
// })
let allEmployees = []
//let allEngineers = [];
//let allInterns = [];
let allManagers = [];





// let html5 = `<!DOCTYPE html>
//                 <html lang="en">
//                     <head>
//                         <meta charset="UTF-8">
//                         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//                         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//                         <title>Profile Automator</title>
//                         <!-- Link Bootstrap -->
//                         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" 
//                         integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
//                         crossorigin="anonymous">
//                         <!-- Font Awesome -->
//                         <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" rel="stylesheet">
//                         <!-- Link CSS -->
//                         <link rel="stylesheet" href="./style.css">
//                         <!-- Link Favicon -->
//                     </head>
//                     <body>
//                         <main>

                                    


//                         </main>
                    
//                         <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
//                         <!-- Link JS Script -->
//                         <script src="./index.js"></script>
//                     </body>
//                 </html>`   



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
        },// test 
    ])
    .then((answers) => {
        
        const newManager  = new Manager(answers.HTML1, answers.HTML2, answers.HTML3, answers.HTML4)
        // allManagers.push(newManager)
        //console.log(newManager.getName()) 
        //console.log(newManager.getCard())
        let managerCard = newManager.getCard()
        allEmployees.push(managerCard)
        //generateManagerHTML(newManager)
        generateHTMLFile()
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
        },// test 
    ])
    .then((answers) =>{

      const newEngineer  = new Engineer(answers.HTML1, answers.HTML2, answers.HTML3, answers.HTML4) 
      //console.log(newEngineer)
      let engineerCard = newEngineer.getCard()
      allEmployees.push(engineerCard)

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
      allEmployees.push(internCard)
      chooseEmployee3()
    
    })
    .catch((err) => {
        console.log(err)
    })
}

function rewriteHTML(){

    // fs.readFile('index.html', 'utf-8', (err, data) => {
    //     err ? console.info(err) : console.log(`Success! ${data}`)

    //     // let htmlTemplate = data
    // })

    // const {managerCard, engineerCard, internCard } = allEmployees;

    if (allEmployees.length !== 0) {

        const [ managerCard, engineerCard, internCard ] = allEmployees;

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

                            ${managerCard}
                            ${engineerCard}
                            ${internCard}
                            
                            



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

//Read HTML data
// function rewriteHTML(){

//     // fs.readFile('index.html', 'utf-8', (err, data) => {
//     //     err ? console.info(err) : console.log(`Success! ${data}`)

//     //     // let htmlTemplate = data
//     // })

//     // const {managerCard, engineerCard, internCard } = allEmployees;

//     if (allEmployees.length !== 0) {

//         const [ managerCard, engineerCard, internCard ] = allEmployees;

//         for (let i = 0; i < allEmployees.length; i++) {
//             const employeeCards = allEmployees[i];
            
//             const [ managerCard, engineerCard, internCard ] = employeeCards

//             let html5 = `<!DOCTYPE html>
//                 <html lang="en">
//                     <head>
//                         <meta charset="UTF-8">
//                         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//                         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//                         <title>Profile Automator</title>
//                         <!-- Link Bootstrap -->
//                         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" 
//                         integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
//                         crossorigin="anonymous">
//                         <!-- Font Awesome -->
//                         <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" rel="stylesheet">
//                         <!-- Link CSS -->
//                         <link rel="stylesheet" href="./style.css">
//                         <!-- Link Favicon -->
//                     </head>
//                     <body>
//                         <main class="text-center">

//                             ${managerCard}
//                             ${engineerCard}
//                             ${internCard}
                            
                            



//                         </main>
                    
//                         <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
//                         <!-- Link JS Script -->
//                         <script src="./script.js"></script>
//                     </body>
//                 </html>`   

//             fs.writeFile('index.html', html5, (err) => {
//                 err ? console.error(`Oops! Try Again`) : console.log('Success!')
//             });
//         }   
//     }
// }


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
            //generateInternHTML()
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
            //generateEnginnerHTML()
            generateManagerHTML()
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
            //generateHTMLFile()
            //rewriteHTML()
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
//chooseEmployee()



//Write HTML
function generateHTMLFile(){
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








function generateInternHTML(){

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
                <main>
                    ${managerHTML}
                    ${engineerHTML}
                    ${internHTML}

                </main>
        
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
                <!-- Link JS Script -->
                <script src="./index.js"></script>
        </body>
        </html>`   

    fs.writeFile('index.html', html5, (err) => {
        err ? console.error(`Oops! Try Again`) : console.log('Success!')
    });
        
}


function generateEnginnerHTML(){
    for (let i = 0; i < allEngineers.length; i++) {
        const newEngineerCards = allEngineers[i];
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
                <main>
                    
                    ${newEngineerCards}

                </main>
        
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
                <!-- Link JS Script -->
                <script src="./index.js"></script>
        </body>
        </html>`   

    fs.appendFile('index.html', html5, (err) => {
        err ? console.error(`Oops! Try Again`) : console.log('Success!')
    });
    }
    
}

// function generateManagerHTML(){
//     let managerHTML = `
//     <div class="card" style="height:380px; width:300px">
//         <div class="card-header text-center">
//             <p><span style="font-weight: bold; font-size: large;">${managerName}</span></p>
//         </div>
//         <div class="card-body row">
//             <div class="col text-center mb-3">
//                 <img src="https://dummyimage.com/200X200/a1a1a1/fff" alt="${managerName} image">
//             </div>
//             <div class="col border-top">
//                 <p>I.D: <span style="font-weight: bold;">${managerID}</span><br>
//                 Office No.: <span style="font-weight: bold;">${managerOfficeNo}<br>
//                 <a href="mailto:${managerEmail}">${managerName} Email</a>
//                 </p>
//             </div>
//         </div>
//     </div>`
// }








// async function buildStaff() {
//     //const managerPrompts = new Rx.Subject(Manager.Manager.profileInfo());
//     //inquirer.prompt(prompts);
//     const newManager = new Manager.Manager.profileInfo()
//     //const newEngineer = new Engineer.Engineer.profileInfo()
//     //const newIntern = new Intern.Intern.profileInfo()
//     prompts.next(newManager)


//     //prompts.next(newEngineer)



//     //prompts.next(newIntern)



//     prompts.complete();

// }
// buildStaff()

//Build Staff 
// function buildStaff() {
//     //Make funtion to ask if engineer or if intern 
//     //Loop thru arrays and append to HTML template
//     //add managers, engineers, inters to HTML

//     try{

//         //Works
//         const managerData =  managerPromise() //await has no effect on this type of expression
//         if (managerData) {
//             console.log(`Manager Info Generated`)
//         };

//         //Doesn't work     
//         // const engineerData = await buildEngineerPromise()
//         // if (engineerData) {
//         //     console.log(`Engineer Info Created`)
//         // };
        

//     } catch (err){
//         console.log(err)
//     }
    
// }
//buildStaff()
