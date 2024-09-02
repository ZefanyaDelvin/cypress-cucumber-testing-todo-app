import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

/************************** Add **************************/
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

/************************** Markdone **************************/
/*
Given('the user has a to-do item {string}', (todo) => {
  cy.visit('http://localhost:3000/');
  cy.get('[data-cy=new-todo-input]').type(todo);
  cy.get('[data-cy=add-todo-button]').click();
});

When('the user marks the to-do item {string} as completed', (todo) => {
  cy.get(`[data-cy=complete-todo-${todo}]`).click();
});

Then('the to-do item {string} should be marked as completed', (todo) => {
  cy.get(`[data-cy=todo-item-${todo}]`).should('have.class', 'completed');
});
*/

/************************** Delete **************************/
/*
Given('the user has a to-do item {string}', (todo) => {
  cy.visit('/');
  cy.get('[data-cy=new-todo-input]').type(todo);
  cy.get('[data-cy=add-todo-button]').click();
});

When('the user deletes the to-do item {string}', (todo) => {
  cy.get(`[data-cy=delete-todo-${todo}]`).click();
});

Then('the to-do item {string} should be removed from the list', (todo) => {
  cy.get('[data-cy=todo-list]').should('not.contain', todo);
});
*/
