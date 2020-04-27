/// <reference types="Cypress" />
// above command is to auto complete any of the commands like "describe", "get" etc
//In this Program there are concepts of aliasing, Logging, Checkboxes, Dropdowns, Radiobox, Calender & If-else loop 
//Basically This Program is to Register a User in a website

describe('Test-1', function(){

    it('Test-1.1', function(){

        //It Visits the website(Website we have to register a user)
        cy.visit('https://rahulshettyacademy.com/angularpractice/')

        //we are giving a aliasing for LOGO
        cy.get('.navbar-brand').as('logo')

        //We are keeping an assertion, to check logo/title as ProtoCommerce
        if(cy.get('@logo').should('have.text','ProtoCommerce'))
        {

        //Displaying home page
        cy.log('HOME-PAGE')    

        //Now we are printing this logo as output, using promising statements
        cy.get('@logo').then(function(logoprint)
        {
            cy.log(logoprint.text())
        })

        //We are sending text
        cy.get(':nth-child(1) > .form-control').type('ABC')
        cy.get("input[name='email']").type('abc@gmail.com')
        cy.get("input[type='password']").type('xyz')

        //Clicking on the check boxes(We have given the ID as locator)
        cy.get('#exampleCheck1').check()

        //To select "Male" option from STATIC DROPDOWN
        cy.get('#exampleFormControlSelect1').select('Male')
        //To check whether "Male" option is selected or not
        cy.get("#exampleFormControlSelect1").should('have.value','Male')

        //To check the Radio box
        cy.get('#inlineRadio1').click();

        //To Enter the Calender-Date
        //We are just clicking on the Calender box
        cy.get("input[name='bday']").click()
        //To enter the Date(As DATE format is defined)
        cy.get("input[name='bday']").type("1995-05-05")

        //Click on the "Submit" button
        cy.get("input[value='Submit']").click()

        //To print the message in LOGS after the registration
        cy.get('.alert').then(function(message)
        {
            cy.log(message.text())
        })
        //To close the message
        cy.get('.close').click()
        }
    
        else{
            //if we give anither site address
            cy.log('NOT CORRECT SITE');
        }
        
    })
})