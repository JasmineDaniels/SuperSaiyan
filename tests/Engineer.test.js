const Engineer = require('../classes/buildEngineer')
        
        
        
describe('Profile Automator Testing Suite', () => {
    describe('test .getGithub() on new Engineer Object', () => {
        it('it should return new object with the username ArthurSpeaks', () => {
            const Arthur = new Engineer('Arthur', '03', 'arthurspeaks@yahoo.com', 'ArthurSpeaks')

            expect(Arthur.getGithub()).toEqual('ArthurSpeaks')
        })
        
    })
})