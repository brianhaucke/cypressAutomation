beforeEach(()=>
{
    cy.fixture('example').then(function(data)
    {
globalThis.data=data
    })
});

// before(function(){
//     cy.fixture('example').then(data =>
//     {
//         globalThis.data = data
//     })
// })