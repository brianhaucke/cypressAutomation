/// <reference types="Cypress" />

describe('My Sixth Test', function() {
    it('My Sixth Test case', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //Scan existing table
        //Iterate

        //cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click({force: true})
        cy.url().should('include', 'top')
        
    
})
})