const Employee = require('./buildEmployee');


class Engineer extends Employee {
    constructor (name, id, email, username) {
            

        super(name, id, email);
        this.username = username;
    }
    getGithub(){
        return this.username = this.username
    }

    getRole(){
        return "Engineer"
    }

    getCard(){
        let engineerHTML5 = `
       <div class="card mx-2" style="height:400px; width:300px">
            <div class="card-header text-center">
                <p><span style="font-weight: bold; font-size: large;">${this.name}</span><br>
                    Position: <span style="font-weight: bold;">Engineer</span>
                </p>
            </div>
            <div class="card-body row">
                <div class="col text-center mb-3">
                    <img src="https://dummyimage.com/200X200/a1a1a1/fff" alt="${this.name} image">
                </div>
                <div class="col border-top">
                    <p>I.D: <span style="font-weight: bold;">${this.id}</span><br>
                    Github: <a href="https://github.com/${this.username}">${this.name} Github</a><br>
                    <a href="mailto:${this.email}">${this.name} Email</a>
                    </p>
                 </div>
            </div>
        </div>`

        return engineerHTML5
    }
}


module.exports = Engineer
