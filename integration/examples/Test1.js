//cypress - Spec

describe('My First Test', function(){
    it('My First Test Case', function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        // get acts like findElement
        cy.get('.product').should('have.length',5)
        //Parent child 
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length', 4)
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function(){
            console.log('sf')
        })

        console.log('sf asynchronous')

        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            
            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Cashews')) {
                cy.wrap($el).find('button').click()
            }

        })
        cy.get('.brand').should('have.text','GREENKART')


        cy.get('.brand').then(function(logoelement){
            cy.log(logoelement.text())
        })



    })
    //fixture
})

