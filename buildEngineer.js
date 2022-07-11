const inquirer = require('inquirer')
const fs = require('fs')
const Manager = require('./buildManager')


class Engineer extends Manager {
    constructor (name, id, email, username) {
            

        super(name, id, email);
        this.username = username;
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
                message: 'Github Username:',
                name: 'HTML4',
            },// test 
        ])
        .then((answers) =>{
        let engineerName = `${answers.HTML1}` //this.name = `${answers.HTML1}`
        let engineerID = `${answers.HTML2}` //this.id = `${answers.HTML2}`
        let engineerEmail = `${answers.HTML3}`//this.email = `${answers.HTML3}`
        let engineerGithub = `${answers.HTML4}`//this.misc = `${answers.HTML1}`

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
}



// function buildEngineerPromise() {
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
//             message: 'Github Username:',
//             name: 'HTML4',
//         },// test 
//     ])
//     .then((answers) =>{
//       let engineerName = `${answers.HTML1}`
//       let engineerID = `${answers.HTML2}`
//       let engineerEmail = `${answers.HTML3}`
//       let engineerGithub = `${answers.HTML4}`

//       let engineerHTML5 = `
//       <div class="card" style="height:380px; width:300px">
//             <div class="card-header text-center">
//                 <p><span style="font-weight: bold; font-size: large;">${engineerName}</span></p>
//             </div>
//             <div class="card-body row">
//                 <div class="col text-center mb-3">
//                     <img src="https://dummyimage.com/200X200/a1a1a1/fff" alt="${engineerName} image">
//                 </div>
//                 <div class="col border-top">
//                     <p>I.D: <span style="font-weight: bold;">${engineerID}</span><br>
//                     Github: <a href="https://github.com/${engineerGithub}">${engineerName} Email</a><br>
//                     <a href="mailto:${engineerEmail}">${engineerName} Email</a>
//                     </p>
//                 </div>
//             </div>
//         </div>`

//         //Write to disk
//         fs.appendFile('index.html', engineerHTML5, (err) => {
//             err ? console.error(`Oops! Try Again`) : console.log('Success!')
//         });
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// }

module.exports = {
    Engineer,
}