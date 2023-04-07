describe('My API Test Suite', function()
{
    it('My first API test case', function()
    {

        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', 
        {
        "name":"Learn Appium Automation with Java Part 2",
        "isbn":"t3st",
        "aisle":"1337",
        "author":"John foe"
        }).then(function(response)
        {
            expect(response.body).to.have.property("Msg","successfully added")
            expect(response.status).to.eq(200)
        })
    })
})