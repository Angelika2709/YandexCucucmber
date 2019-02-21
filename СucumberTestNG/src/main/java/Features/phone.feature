Feature: Mobile Phones section Feature

Scenario: Mobile Phones section Scenario

Given Electronics section is selected
When title of page "Ёлектроника Ч купить на яндекс.ћаркете"
Then user goes to the Mobile Phones section
Then user selects the manufacturer and enters the price
Then user sees 66 products
