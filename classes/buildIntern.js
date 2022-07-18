const Employee = require('./buildEmployee');

class Intern extends Employee {
    constructor (name, id, email, school) { //name, id, email, school
        super(name, id, email);
        this.school = school;
    }

    getGithub(){
        return this.school = this.school
    } 

    getCard(){
        let internHTML5 = `
        <div class="card mx-2" style="height:400px; width:300px">
            <div class="card-header text-center">
                <p><span style="font-weight: bold; font-size: large;">${this.name}</span><br>
                    Position: <span style="font-weight: bold;">Intern</span> 
                </p>
            </div>
            <div class="card-body row">
                <div class="col text-center mb-3">
                    <img src="https://dummyimage.com/200X200/a1a1a1/fff" alt="${this.name} image">
                </div>
                <div class="col border-top">
                    <p>I.D: <span style="font-weight: bold;">${this.id}</span><br>
                    School: <span style="font-weight: bold;">${this.school}</span><br>
                    <a href="mailto:${this.email}">${this.name} Email</a>
                    </p>
                </div>
            </div>
        </div>`

        return internHTML5
    }
    

    getRole(){
        return "Intern"
    }
}



module.exports = Intern