Feature: Add a new to-do item

Scenario: User adds a new to-do item
  Given the user is on the to-do page
    When the user enters a new to-do item "Buy groceries"
    And the user clicks the add button
    Then the new to-do item "Buy groceries" should be added to the list


/* Markdone */
Feature: Mark a to-do item as completed

Scenario: User marks a to-do item as completed
  Given the user has a to-do item "Buy groceries"
    When the user marks the to-do item "Buy groceries" as completed
    Then the to-do item "Buy groceries" should be marked as completed
    
/* Delete */
Feature: Delete a to-do item

Scenario: User deletes a to-do item
  Given the user has a to-do item "Buy groceries"
    When the user deletes the to-do item "Buy groceries"
    Then the to-do item "Buy groceries" should be removed from the list

