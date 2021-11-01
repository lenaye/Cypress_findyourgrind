// Sample Cypress script to test findyourgrind.com site
// The script also demonstrates that it is possible to have Gherkin style syntax
// WITHOUT having to use Cucumber plugin to Cypress, thereby
// reducing complexities and simplifying test code.

// Leonard Aye. 31 October 2021


describe('Find Your Grind Test Suite', () => {
    context('Given I am at the homepage of Find Your Grind', ()=>{

        beforeEach(() => {
            cy.visit('http://findyourgrind.com')
            
            cy.on('uncaught:exception', (e) => {
              if (e.message.includes('undefined')) {
              // we expected this error, so let's ignore it
              // and let the test continue
              return false
              }
              // on any other error message the test fails
              })
          
          })
     

        // ----- Product Page
        context('When I click on Our Product page', ()=>{
            beforeEach(()=> {
                cy.get('header nav')
                    .contains('Product').click() 
            })

            it('Then I should see the main text', ()=>{
                cy.url().should('eq','https://findyourgrind.com/product/')
                cy.get('.hero_text')
                    .should('contain','most powerful learning solution for future readiness')
            })

            it('Then I should see image & text block - Bite Size Learning', ()=> {
                cy.get('.grid_container .grid_item').eq(0).then(firstBlock =>{
                    cy.wrap(firstBlock)
                        .should('contain','Bite-sized Learning')
                        .find('img').invoke('attr', 'src').should('include','Bitesized.gif')
                })
            })

            it('Then I should see image & text block - Reward-driven Incentives', ()=> {
                cy.get('.grid_container .grid_item').eq(1).then(secondBlock => {
                    cy.wrap(secondBlock)
                        .should('contain','Reward-driven Incentives')
                        .find('img').invoke('attr', 'src').should('include','Reward-Driven.png')
                })
            })

            it('Then I should see image & text block - Personalized insights for every student', ()=> {
                cy.get('.grid_container .grid_item').eq(2).then(thirdBlock =>{
                    cy.wrap(thirdBlock)
                        .should('contain','Personalized insights for every student')
                        .find('img').invoke('attr', 'src').should('include','insights-thumb.svg')
                })
            })

            it('Then I should see Learn More link', ()=> {
                cy.get('.grid_container .grid_item').eq(2)
                    cy.get('.read_more').should('contain','Learn More')
            })
        })  
        // End of Product page

        // ----- Curriculum Section 
        context('When I click on Curriculum Link on Our Product page', ()=>{
            beforeEach(()=> {
                cy.get('header nav')
                    .contains('Product').click()    
                cy.get('.filter_nav .content_container')
                    .contains('Curriculum').click()    
            })

            it('Then I should see the main section text', ()=>{
                cy.get('#curriculum .scroll_reveal')
                    .should('contain','The Find Your Grind Lifestyle Assessment is the first step for a more purposeful career journey.')
            })      
            
            it('Then I should see text block - Power Skill for Life', ()=>{
                cy.get('#curriculum .three_col_block .col_item')
                    .eq(0)
                    .should('contain','Power Skills for Life')
            })

            it('Then I should see text block - Gen Z Relevant Career Content', ()=>{
                cy.get('#curriculum .three_col_block .col_item')
                    .eq(1)
                    .should('contain','Gen Z Relevant Career Content')
            })

            it('Then I should see text block - Future Ready Student Profiles', ()=>{
                cy.get('#curriculum .three_col_block .col_item')
                    .eq(2)
                    .should('contain','Future Ready Student Profiles')
            })
        })  
        // End of Curriculum section of Product page

        // ----- FAQ Page
        context('When I click on FAQ page', ()=>{
            beforeEach(()=> {
                cy.get('header nav')
                    .contains('FAQs').click() 
            })
        
            it('Then I should see FAQ page', ()=> {
                cy.get('header h1').should('contain','Frequently')
                cy.url().should('eq', 'https://findyourgrind.com/faq/')
            }) 

            it('Then I could open first FAQ and click to Contacts page', ()=> {
                cy.get('.faq_container #ac-trigger-0').click()
                cy.get('.faq_container #ac-panel-0 a')
                    .eq(1)
                    .should('contain','schedule a call with our team')
                    .click()
                    cy.url().should('eq', 'https://findyourgrind.com/contact/')
            })

        })  
        // End of FAQ page

        // ----- Contact Page
        context('When I click on Contacts page', ()=>{
            beforeEach(()=> {
                cy.get('header nav')
                    .contains('Contact').click() 
            })
        
            it('Then I should see Contacts page', ()=> {
                cy.url().should('eq','https://findyourgrind.com/contact/')
            })
        
            it('Then I can enter my details', ()=> {
                cy.get('[placeholder="Full Name*"]').click().type('Paul Atreides')
                cy.get('[placeholder="Email*"]').click().type('paul@atreides.com')
                cy.get('[placeholder="School"]').click().type('Bene Gesserit School of Mind Control')
                cy.get('[placeholder="Job Title"]').click().type('Son of Duke Leto Atreides')
                cy.get('[placeholder="Message*"]').click().type('Fear is the Mind Killer')
                cy.get('#wpforms-137-field_15_1').check({force:true})
                cy.get('#wpforms-137-field_14_1').check({force:true})
            })
        
        })
        // End of Contact Page

    }) //End of Homepage suite

})
