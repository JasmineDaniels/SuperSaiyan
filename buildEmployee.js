class Employee {  
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        
    }

    getName(){
        return this.name
    }
    getID(){
        return this.id 
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return "employee"
    } 

    


}

// profileInfo(){
//     inquirer.prompt([ 
//         {
//             type: 'input',
//             message: 'Name:',
//             name: 'HTML1', //employee name
//         },
//         {
//             type: 'input',
//             message: 'I.D#:',
//             name: 'HTML2', //employee id
//         },
//         {
//             type: 'input',
//             message: 'Email:',
//             name: 'HTML3', //
//         },
//         {
//             type: 'input',
//             message: 'Office Number:', //choice Office No., GH Username, School 
//             name: 'HTML4',
//         },// test 
//     ])
//     .then((answers) => {
//         // this.name = `${answers.HTML1}`
//         // this.id = `${answers.HTML2}`
//         // this.email = `${answers.HTML3}`
        


//         let employeeName = `${answers.HTML1}` //this.name = `${answers.HTML1}`
//         let employeeID = `${answers.HTML2}`   //this.id = `${answers.HTML2}`
//         let employeeEmail = `${answers.HTML3}`//this.email = `${answers.HTML3}`

//         let html5 = `<!DOCTYPE html>
//         <html lang="en">
//         <head>
//             <meta charset="UTF-8">
//             <meta http-equiv="X-UA-Compatible" content="IE=edge">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <title>Profile Automator</title>
//             <!-- Link Bootstrap -->
//             <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" 
//             integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
//             crossorigin="anonymous">
//             <!-- Font Awesome -->
//             <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" rel="stylesheet">
//             <!-- Link CSS -->
//             <link rel="stylesheet" href="./style.css">
//             <!-- Link Favicon -->
//         </head>
//         <body>
//                 <main>
//                     <div class="card" style="height:380px; width:300px">
//                         <div class="card-header text-center">
//                             <p><span style="font-weight: bold; font-size: large;">${employeeName}</span></p>
//                         </div>
//                         <div class="card-body row">
//                             <div class="col text-center mb-3">
//                                 <img src="https://dummyimage.com/200X200/a1a1a1/fff" alt="${employeeName} image">
//                             </div>
//                             <div class="col border-top">
//                                 <p>I.D: <span style="font-weight: bold;">${employeeID}</span><br>
//                                 <a href="mailto:${employeeEmail}">${employeeName} Email</a>
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </main>
        
//                 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
//                 <!-- Link JS Script -->
//                 <script src="./index.js"></script>
//         </body>
//         </html>`

//         //Write to disk
//         fs.writeFile('index.html', html5, (err) => {
//             err ? console.error(`Oops! Try Again`) : console.log('Success!')
//         });
//     })
//     .catch((err) => {
//         console.log(err)
//     })
      
// }

module.exports = Employee
