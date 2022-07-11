const inquirer = require('inquirer')
const fs = require('fs')
const Manager = require('./buildManager')

class Intern extends Manager {
    constructor (name, id, email, school) { //name, id, email, school
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }

    profileInfo(){
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
                message: 'School:',
                name: 'HTML4',
            },// test 
        ])
        .then((answers) =>{
          let internName = `${answers.HTML1}` //this.name = `${answers.HTML1}`
          let internID = `${answers.HTML2}` //this.id = `${answers.HTML2}`
          let internEmail = `${answers.HTML3}`//this.email = `${answers.HTML3}`
          let internSchool = `${answers.HTML4}`//this.misc = `${answers.HTML1}`
    
          let internHTML5 = `
          <div class="card" style="height:380px; width:300px">
                <div class="card-header text-center">
                    <p><span style="font-weight: bold; font-size: large;">${internName}</span></p>
                </div>
                <div class="card-body row">
                    <div class="col text-center mb-3">
                        <img src="https://dummyimage.com/200X200/a1a1a1/fff" alt="${internName} image">
                    </div>
                    <div class="col border-top">
                        <p>I.D: <span style="font-weight: bold;">${internID}</span><br>
                        <p>School: <span style="font-weight: bold;">${internSchool}</span><br></p><br>
                        <a href="mailto:${internEmail}">${internName} Email</a>
                        </p>
                    </div>
                </div>
            </div>`
    
            //Write to disk
            fs.appendFile('index.html', internHTML5, (err) => {
                err ? console.error(`Oops! Try Again`) : console.log('Success!')
            });
        })
        .catch((err) => {
            console.log(err)
        })
    }
}


//Intern.profileInfo()

// function buildInternPromise() {
//     inquirer.prompt([ 
//         {
//             type: 'input',
//             message: 'Name:',
//             name: 'HTML1', 
//         },
//         {
//             type: 'input',
//             message: 'I.D#:',
//             name: 'HTML2', 
//         },
//         {
//             type: 'input',
//             message: 'Email:',
//             name: 'HTML3',
//         },
//         {
//             type: 'input',
//             message: 'School:',
//             name: 'HTML4',
//         },// test 
//     ])
//     .then((answers) =>{
//       let internName = `${answers.HTML1}` //this.name = `${answers.HTML1}`
//       let internID = `${answers.HTML2}` //this.id = `${answers.HTML2}`
//       let internEmail = `${answers.HTML3}`//this.email = `${answers.HTML3}`
//       let internSchool = `${answers.HTML4}`//this.misc = `${answers.HTML1}`

//       let internHTML5 = `
//       <div class="card" style="height:380px; width:300px">
//             <div class="card-header text-center">
//                 <p><span style="font-weight: bold; font-size: large;">${internName}</span></p>
//             </div>
//             <div class="card-body row">
//                 <div class="col text-center mb-3">
//                     <img src="https://dummyimage.com/200X200/a1a1a1/fff" alt="${internName} image">
//                 </div>
//                 <div class="col border-top">
//                     <p>I.D: <span style="font-weight: bold;">${internID}</span><br>
//                     <p>School: <span style="font-weight: bold;">${internSchool}</span><br></p><br>
//                     <a href="mailto:${internEmail}">${internName} Email</a>
//                     </p>
//                 </div>
//             </div>
//         </div>`

//         //Write to disk
//         fs.appendFile('index.html', internHTML5, (err) => {
//             err ? console.error(`Oops! Try Again`) : console.log('Success!')
//         });
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// }

module.exports = {
    Intern,
}