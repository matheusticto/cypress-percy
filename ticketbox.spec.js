
describe('TicketBOx', () => {
    beforeEach(() => cy.visit('https://ticket-box.s3.eu-central-1.amazonaws.com/index.html'));
    it('Check for the Initial state', () => {
        cy.percySnapshot('form') 
        cy.screenshot('form')
     });
    });

it('updates agreement', () => {
  
  cy.get('#first-name').type('Matheus');
  cy.get('#last-name').type('Santos');
  cy.get('#ticket-quantity').select('4');
  cy.get('#vip').check();
  cy.percySnapshot();

});

