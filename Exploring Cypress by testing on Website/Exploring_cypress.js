/// <reference types="Cypress" />
// above command is to auto complete any of the commands like "describe", "get" etc

describe('Exploring cypress commands', function()
{

    it('Exploring FLIPKART', function()
    {
        //to load a URL
        cy.visit("https://www.flipkart.com/");

        //to click on the search bar and enter the values
        cy.get("input[type='text']").type('sanitizers');

        //to wait for some seconds, as it takes Milliseconds
        cy.wait(5000);

        //to click on the Search bar
        cy.get(".vh79eN").click();

        //In a flipkart page if we search an element, for every page "45" elements will only get displayed
        //we put an "Assertion" tool and check a scenario of how many products are getting displayed 
        cy.get('._3BTv9X').should('have.length',45);
    })
})

//.<classname> is a syntax for CSS-Locator. Ex:.vh79eN, _3BTv9X
//tagname[attribute='value'] is also a syntax for CSS Locator. Ex: input[type='text']