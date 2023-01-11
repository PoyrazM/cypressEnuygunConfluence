import HomePage from './pages/HomePage';
import DataGenerator from '../fixtures/DataGenerator';
const startTest = new HomePage();
const fakeData = new DataGenerator();

describe('Sign Up Tests', () => {

    beforeEach(() => {
        cy.visit('').url().then(url => cy.log('Current URL is : ' + url));
    });

    it('Successfully Sign Up Test', () => {
       
        startTest
                .clickSignUpButton()
                .getRegisterPage()
                .fillEmailField(fakeData.email)
                .fillPasswordField(fakeData.password)
                .clickAcceptEmailCheckBox(fakeData.isAccept)
                .clickRegisterButton();
    });

});