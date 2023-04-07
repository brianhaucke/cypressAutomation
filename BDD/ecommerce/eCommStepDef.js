// import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import { Given,When,Then} from "@badeball/cypress-cucumber-preprocessor"
import HomePage from '../../../../support/pageObjects/HomePage.js'
import Products from '../../../../support/pageObjects/Products.js'

// const { Given,When,Then,And } = require("@badeball/cypress-cucumber-preprocessor");
const homePage = new HomePage()
const products = new Products()
let name


Given('I open eCommerce page', ()=>
{
    cy.visit(Cypress.env('url')+'/angularpractice/')
    //homePage.getShopTab().click()
    
})

When('I add items to cart', ()=>
{
    homePage.getShopTab().click()
    //this.data.productName
    // cy.selectProduct('Blackberry')
    // cy.selectProduct('Nokia Edge')
    globalThis.data.productName.forEach(function(element) {
        cy.selectProduct(element)
    });
    //cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
    products.checkoutButton().click()  
})
//And validate the total prices
var sum=0
When('validate the total prices', ()=>
{
    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
        const amount = $el.text()
        //cy.log($el.text())
        var res = amount.split(" ")
        res = res[1].trim()
        sum = Number(sum) + Number(res)
        cy.log(res)
        
    }).then(function()
    {
        cy.log(sum)
    })
    cy.get('h3 > strong').then(function(element)
    {
        const amount = element.text()
        var res = amount.split(" ")
        var total = res[1].trim()
        expect(Number(total)).to.equal(sum)
    })
})

Then('Select the country submit and verify Thankyou', ()=>
{
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


When('I fill the form details', function(dataTable)
{
    //homePage.getGender().select(globalThis.data.name)
    //homePage.getGender().select(globalThis.data.gender)
    // Now getting this data from ecommerce.feature file
    name = dataTable.rawTable[1][0]
    homePage.getEditBox().type(dataTable.rawTable[1][0])
    homePage.getGender().select(dataTable.rawTable[1][1])
})

// Then validate the forms behavior
Then('validate the forms behavior', function()
{
    //homePage.getTwoWayDataBinding().should('have.value', globalThis.data.name)
    homePage.getTwoWayDataBinding().should('have.value', name)
    homePage.getEditBox().should('have.attr', 'minlength','2')
    homePage.getEntrepreneur().should('be.disabled')
})

// And select the shop page
Then('select the Shop Page', ()=>
{
    homePage.getShopTab().click()
})