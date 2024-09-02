Feature: Add a new to-do item

Scenario: User adds a new to-do item
  Given the user is on the to-do page
    When the user enters a new to-do item "Buy groceries"
    And the user clicks the add button
    Then the new to-do item "Buy groceries" should be added to the list