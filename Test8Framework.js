//cypress - Spec
/// <reference types="Cypress" />

describe('My Framework Test', function(){

    before(function(){ // runs once before all tests in the block
        cy.fixture('example').then(function(data)
        {
            this.data = data
        })
        
    })


    it('My Framework Test Case', function(){

        cy.visit('https://rahulshettyacademy.com/angularpractice/')

        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        cy.get('select').select(this.data.gender)

        cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.data.name)
        cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength', '2')
        cy.get('#inlineRadio3').should('be.disabled')
        //cy.pause()
        cy.get(':nth-child(2) > .nav-link').click()

        //this.data.productName
        // cy.selectProduct('Blackberry')
        // cy.selectProduct('Nokia Edge')
        this.data.productName.forEach(function(element) {
            cy.selectProduct(element)
        });


        })



    })
    //fixture

