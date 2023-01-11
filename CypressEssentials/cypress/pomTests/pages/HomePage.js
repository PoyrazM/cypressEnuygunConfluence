import RegisterPage from './RegisterPage'

class HomePage {

    SIGN_UP_BUTTON = '#ctx-RegisterBtn'

    clickSignUpButton(){
        cy
        .get(this.SIGN_UP_BUTTON)
        .click()
        .log('Clicked the Sign Up Button in HomePage');
        return this;
    }
    
    getRegisterPage(){
        return new RegisterPage();
    }
}
export default HomePage

