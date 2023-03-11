/// <reference types="Cypress" />
import HomePage from "../pageObjects/HomePage"
import Products
 from "../pageObjects/Products"


describe('My Framework Test', function(){

    before(function(){ // runs once before all tests in the block
        cy.fixture('example').then(function(data)
        {
            this.data = data
        })
        
    })


    it('My Framework Test Case', function(){
        Cypress.config('defaultCommandTimeout', 8000)
        const homePage = new HomePage()
        const products = new Products()

        cy.visit('https://rahulshettyacademy.com/angularpractice/')

        // *** Replacing all these with HomePage.js methods ***

        //cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        homePage.getEditBox().type(this.data.name)
        //cy.get('select').select(this.data.gender)
        homePage.getGender().select(this.data.gender)
        //cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.data.name)
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        //cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength', '2')
        homePage.getEditBox().should('have.attr', 'minlength','2')
        //cy.get('#inlineRadio3').should('be.disabled')
        homePage.getEntrepreneur().should('be.disabled')
        //cy.get(':nth-child(2) > .nav-link').click()
        homePage.getShopTab().click()

        //this.data.productName
        // cy.selectProduct('Blackberry')
        // cy.selectProduct('Nokia Edge')
        this.data.productName.forEach(function(element) {
            cy.selectProduct(element)
        });

        //cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
        products.checkoutButton().click()
        cy.contains('Checkout').click()
        cy.get('#country').type('India')
    
        cy.get('.suggestions > ul > li > a').click()

        cy.get('#checkbox2').click({force: true})
        cy.get('input[type="submit"]').click()
        //cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
        cy.get('.alert').then(function(element)
        {
            const actualText=element.text()
            expect(actualText.includes("Success")).to.be.true
        })

        })



    })
    //fixture

