// import manager 
const Manager = require('../classes/buildManager')

describe('Profile Automator Testing Suite', () => {
    describe('test .getID() on new Manager Object', () => {
        it('should return the user input "id" of the new Manager object', () => {
            const buddy = new Manager('John', '02', 'john@gmail.com', '1002')
            
            expect(buddy.getID()).toBe('02')
        })

    })
})