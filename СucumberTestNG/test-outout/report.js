$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/USER 1/git/alfatest/СucumberTestNG/src/test/resources/Features/phone.feature");
formatter.feature({
  "line": 1,
  "name": "Mobile Phones section Feature",
  "description": "",
  "id": "mobile-phones-section-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "The name of the product corresponds to the memorized value",
  "description": "",
  "id": "mobile-phones-section-feature;the-name-of-the-product-corresponds-to-the-memorized-value",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Mobile Phones section is selected",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters producer and price",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user checks the number of items",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "the user remembers the first item",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enters memorized value",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "check that the name of the product corresponds to the memorized value",
  "keyword": "Then "
});
formatter.match({
  "location": "MobilePhonesDefinition.mobile_phones_sect_is_selected()"
});
formatter.result({
  "duration": 22331990330,
  "status": "passed"
});
formatter.match({
  "location": "MobilePhonesDefinition.user_enters_producer_and_price()"
});
formatter.result({
  "duration": 1218061467,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});