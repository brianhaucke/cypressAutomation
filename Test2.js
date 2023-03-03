//cypress - Spec

describe('My Second Test', function(){
    it('My Second Test Case', function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        // get acts like findElement
  
        //Parent child 
        cy.get('.products').as('productLocator')

        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            
            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Cashews')) {
                cy.wrap($el).find('button').click()
            }

        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()

    })
    //fixture
})

