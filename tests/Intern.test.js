const Intern = require('../classes/buildIntern')
        
        
        
describe('Profile Automator Testing Suite', () => {
    describe('test .getRole() on new Intern Object', () => {
        it('it should return new object with the role of Intern', () => {
            const Emmit = new Intern('Emmit', '21', 'commitemmit@gmail.com', 'Georgia Tech')

            expect('Intern').toEqual(Emmit.getRole())
            
        })
        
    })
})