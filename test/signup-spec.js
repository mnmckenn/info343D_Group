'use strict';

describe('Sign up form', function () {
    
	//refresh before each test
	beforeEach(function() {
        browser.get('http://localhost:8080');
    });

    it('should have a form and a submit button', function () {
        expect(element(by.id('form')).isPresent()).toEqual(true);
        expect(element(by.id('submit-button')).isPresent()).toEqual(true);
    });