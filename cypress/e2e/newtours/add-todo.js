import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('the user is on the to-do page', () => {
  cy.visit('http://localhost:3000/');
});

When('the user enters a new to-do item {string}', (todo) => {
  cy.get('[data-cy=new-todo-input]').type(todo);
});

When('the user clicks the add button', () => {
  cy.get('[data-cy=add-todo-button]').click();
});

Then('the new to-do item {string} should be added to the list', (todo) => {
  cy.get('[data-cy=todo-list]').should('contain', todo);
});
