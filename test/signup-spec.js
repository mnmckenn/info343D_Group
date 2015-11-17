'use strict';

describe('Sign up form', function () {
    
	//refresh before each test
	beforeEach(function() {
        browser.get('http://localhost:8000');
    });

	//test for form and buttons
    it('should have a form and a submit button', function () {
        expect(element(by.id('form')).isPresent()).toEqual(true);
        expect(element(by.id('submit-button')).isPresent()).toEqual(true);
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
});