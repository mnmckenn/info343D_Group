'use strict';

describe('Sign up form', function () {
    
	//refresh before each test
	beforeEach(function() {
        browser.get('http://localhost:8080');
    });

	//test for form and buttons
    it('should have a form and a submit button', function () {
        expect(element(by.id('form')).isPresent()).toEqual(true);
        expect(element(by.id('submit-button')).isPresent()).toEqual(true);
    });

    //date of birth validity test
    it('should have a date of birth field that validates based on age', function() {
        expect(element(by.id('form')).isPresent()).toEqual(true);
        expect(element(by.id('DOB')).isPresent()).toEqual(true);
        //check to see if entering a date less than 13 years old yields an error message
        element(by.model('DOB')).sendKeys('04/08/2005');
        expect(element(by.model('DOB')).getAttribute('class')).toContain('ng-dirty');

        //check to see if leaving the field blank yields an error message
        element(by.model('DOB')).clear();
        expect(element(by.model('email')).getAttribute('class')).toContain('ng-invalid');
        
        //check valid DOB
        element(by.model('DOB')).sendKeys('04/08/1995');
        expect(element(by.model('DOB')).getAttribute('class')).toContain('ng-valid');
    });
    
    //email address validity test
    it('should check for a valid email address', function() {
    	element(by.model('email')).clear();

    	//check invalid email causes invalid error message.
    	element(by.model('email')).sendKeys('foo');
		expect(element(by.model('email')).getAttribute('class')).toContain('ng-dirty');

    	//check leaving field blank causes must enter error message
    	element(by.model('email')).clear();
    	expect(element(by.model('email')).getAttribute('class')).toContain('ng-invalid');
    	
    	//check valid email causes no error message
    	element(by.model('email')).sendKeys('example@domain.com');
    	expect(element(by.model('email')).getAttribute('class')).toContain('ng-valid');

    });
	
	//name validity test
	it('should have first and last name fields that validate', function () {
        expect(element(by.id('form')).isPresent()).toEqual(true);
        expect(element(by.id('firstName')).isPresent()).toEqual(true);
        expect(element(by.id('lastName')).isPresent()).toEqual(true);
		
		var firstName = element(by.id('firstName'));
		var lastName = element(by.id('lastName'));
		
        firstName.sendKeys(" ");
        expect(firstName.getAttribute('class')).toContain('ng-invalid-required');
        firstName.sendKeys("John");
        expect(firstName.getAttribute('class')).toContain('ng-valid');

        lastName.sendKeys(" ");
        expect(lastName.getAttribute('class')).toContain('ng-invalid-required');
        lastName.sendKeys("Doe");
        expect(lastName.getAttribute('class')).toContain('ng-valid');
    });
	
	it('should have password forms that validate', function(){
        var password = element(by.name('password'));
		var confirmPassword = element(by.name('confirmpassword'));
		var changeError = element(by.id('changeError'));
		
        expect(password.isPresent()).toEqual(true);
        expect(confirmPassword.isPresent()).toEqual(true);

        expect(password.getAttribute('class')).toMatch('ng-invalid-required');
        password.sendKeys("Hunter2");
        expect(password.getAttribute('class')).toMatch('ng-valid');

        expect(changeError.isDisplayed());
        
        expect(confirmpassword.getAttribute('class')).toMatch('ng-invalid-required');
        confirmpassword.sendKeys("Hunter2");
        expect(confirmpassword.getAttribute('class')).toMatch('ng-valid');        

        expect(!changeError.isDisplayed());
    });
	
});