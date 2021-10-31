// Sample Cypress script to test findyourgrind.com site
// The script also demonstrates that it is possible to have Gherkin style syntax
// WITHOUT having to use Cucumber plugin to Cypress, thereby
// reducing complexities and simplifying test code.


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
    
        context('When I click on Our Product page', ()=>{
            beforeEach(()=> {
                cy.get('header nav a').eq(0)
                    .click() // click on first element of Nav bar
            })

            it('Then I should see the main text', ()=>{
                cy.get('.hero_text').contains('most powerful learning solution for future readiness')
            })

            it('Then I should see text block - Bite Size Learning', ()=> {
                cy.get('.grid_container .grid_item').eq(0)
                    .contains('Bite-sized Learning')
            })

            it('Then I should see text block - Reward-driven Incentives', ()=> {
                cy.get('.grid_container .grid_item').eq(1)
                    .contains('Reward-driven Incentives')
            })

            it('Then I should see text block - Personalized insights for every student', ()=> {
                cy.get('.grid_container .grid_item').eq(2)
                    .contains('Personalized insights for every student')
            })

            it('Then I should see Learn More link', ()=> {
                cy.get('.grid_container .grid_item').eq(2)
                    cy.get('.read_more').contains('Learn More')
            })

        })


    })

    context('When I click on Curriculum Link on Our Product page', ()=>{
        beforeEach(()=> {
            //cy.get('header nav a').eq(0)
            //    .click()    // click on first element of Nav bar
            cy.get('.filter_nav .content_container a').eq(0)
                .contains('Curriculum')
                .click()    // click on Curriculum
        })

        it('Then I should see the main section text', ()=>{
            cy.get('#curriculum .scroll_reveal')
                .contains('The Find Your Grind Lifestyle Assessment is the first step for a more purposeful career journey.')
        })      
        
        it('Then I should see text block - Power Skill for Life', ()=>{
            cy.get('#curriculum .three_col_block .col_item')
                .eq(0)
                .contains('Power Skills for Life')
        })

        it('Then I should see text block - Gen Z Relevant Career Content', ()=>{
            cy.get('#curriculum .three_col_block .col_item')
                .eq(1)
                .contains('Gen Z Relevant Career Content')
        })

        it('Then I should see text block - Future Ready Student Profiles', ()=>{
            cy.get('#curriculum .three_col_block .col_item')
                .eq(2)
                .contains('Future Ready Student Profiles')
        })
    })

})