export default class RegisterPage {

    EMAIL_INPUT = '[name="_email"]';
    PASSWORD_INPUT = '.katalon__modal-password';
    ACCEPT_EMAIL_CHECKBOX = '//*[@id="_acceptEmails"]';
    REGISTER_BUTTON = '.katalon__modal-register-button';

    fillEmailField(email){
        cy
            .get(this.EMAIL_INPUT)
            .type(email)
            .log('Filled the Email Field');
        return this;
        }

    fillPasswordField(password){
        cy
            .get(this.PASSWORD_INPUT)
            .type(password)
            .log('Filled the Password Field');
        return this;
    }

    clickAcceptEmailCheckBox(isAccept){
        if(isAccept){
        cy
            .xpath(this.ACCEPT_EMAIL_CHECKBOX)
            .click()
            .log('Clicked the Accept Email Checkbox');
        }
        else cy.log('Not Clicked the Accept Email Checkbox');
        return this;
    }

    clickRegisterButton(){
        cy
            .get(this.REGISTER_BUTTON)
            .click()
            .log('Clicked the Register Button');
        return this;
    }
}
