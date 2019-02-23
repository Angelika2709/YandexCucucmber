Feature: Goods in Yandex.Market

Scenario: The name of the phones corresponds to the memorized value

Given Mobile Phones section is selected
When user enters producer and price
Then user checks the number of items
Then user remembers the first item
Then user enters memorized value
Then check that the name of the product corresponds to the memorized value




Scenario: The name of the headphones corresponds to the memorized value

Given Headphones section is selected
When user enters manufacturer and price
Then user verifies the number of items
Then user saves the first item
Then user input memorized value
Then verify that the name of the product corresponds to the memorized value





Scenario: Sorting by mobile phone price

Given Mobile Phones section is choosen
When user sorts for the price
Then to see that the items on the page are sorted correctly