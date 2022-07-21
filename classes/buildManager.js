const Employee  = require('./buildEmployee');


class Manager extends Employee {  
    constructor (name, id, email, officeNum) {
        super(name, id, email)
        this.officeNum = officeNum;
        
    }
    
    getCard(){
        let managerHTML = `
        <div class="card mx-2" style="height:400px; width:300px">
            <div class="card-header text-center">
                <p><span style="font-weight: bold; font-size: large;">${this.name}</span><br>
                    Position: <span style="font-weight: bold;">Manager</span>
                </p>
            </div>
            <div class="card-body ">
                <div class="col text-center mb-3">
                    <img src="https://dummyimage.com/200X200/a1a1a1/fff" alt="${this.name} image">
                </div>
                <div class="col border-top">
                    <p>I.D: <span style="font-weight: bold;">${this.id}</span><br>
                    Office No.: <span style="font-weight: bold;">${this.officeNum}<br>
                    <a href="mailto:${this.email}">${this.name} Email</a>
                    </p>
                </div>
            </div>
        </div>`

        return managerHTML
    }

    getRole(){
        return "Manager"
    }

}

module.exports = Manager
