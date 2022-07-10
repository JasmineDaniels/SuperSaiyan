console.log(`Program Started`)
const inquirer = require('inquirer')
const fs = require('fs')

function managerPromise(){
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
        let managerName = `${answers.HTML1}`
        let managerID = `${answers.HTML2}`
        let managerEmail = `${answers.HTML3}`
        let managerOfficeNo = `${answers.HTML4}`

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
                    <div class="card" style="height:380px; width:300px">
                        <div class="card-header text-center">
                            <p><span style="font-weight: bold; font-size: large;">${managerName}</span></p>
                        </div>
                        <div class="card-body row">
                            <div class="col text-center mb-3">
                                <img src="https://dummyimage.com/200X200/a1a1a1/fff" alt="${managerName} image">
                            </div>
                            <div class="col border-top">
                                <p>I.D: <span style="font-weight: bold;">${managerID}</span><br>
                                Office No.: <span style="font-weight: bold;">${managerOfficeNo}<br>
                                <a href="mailto:${managerEmail}">${managerName} Email</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
        
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
                <!-- Link JS Script -->
                <script src="./index.js"></script>
        </body>
        </html>`

        //Write to disk
        fs.writeFile('index.html', html5, (err) => {
            err ? console.error(`Oops! Try Again`) : console.log('Success!')
        });
    })
    .catch((err) => {
        console.log(err)
    })
      
    
}

async function buildManager() {
    try{
        const managerData = await managerPromise()


        if (managerData) {
            console.log(`Manager Info Generated`)
            //const engineerData = await buildEngineerPromise()
            // engineerData
        } 
        

    } catch (err){
        console.log(err)
    }
    
}
buildManager()


function buildEngineerPromise() {
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
            message: 'Github Username:',
            name: 'HTML4',
        },// test 
    ])
    .then((answers) =>{
      let engineerName = `${answers.HTML1}`
      let engineerID = `${answers.HTML2}`
      let engineerEmail = `${answers.HTML3}`
      let engineerGithub = `${answers.HTML4}`

      let engineerHTML5 = `
      <div class="card" style="height:380px; width:300px">
            <div class="card-header text-center">
                <p><span style="font-weight: bold; font-size: large;">${engineerName}</span></p>
            </div>
            <div class="card-body row">
                <div class="col text-center mb-3">
                    <img src="https://dummyimage.com/200X200/a1a1a1/fff" alt="${engineerName} image">
                </div>
                <div class="col border-top">
                    <p>I.D: <span style="font-weight: bold;">${engineerID}</span><br>
                    Github: <a href="https://github.com/${engineerGithub}">${engineerName} Email</a><br>
                    <a href="mailto:${engineerEmail}">${engineerName} Email</a>
                    </p>
                </div>
            </div>
        </div>`

        //Write to disk
        fs.appendFile('index.html', engineerHTML5, (err) => {
            err ? console.error(`Oops! Try Again`) : console.log('Success!')
        });
    })
    .catch((err) => {
        console.log(err)
    })
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
// class Manager { // do I create a new Manager 
    //     constructor (name, id, email, officeNum) {
    //         this.name = name;
    //         this.id = id;
    //         this.email = email;
    //         this.officeNum = officeNum;
    //     }

    // }
