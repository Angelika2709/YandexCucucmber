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
  "name": "user remembers the first item",
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
  "duration": 20913034314,
  "status": "passed"
});
formatter.match({
  "location": "MobilePhonesDefinition.user_enters_producer_and_price()"
});
formatter.result({
  "duration": 1111064652,
  "status": "passed"
});
formatter.match({
  "location": "MobilePhonesDefinition.user_checks_the_number_of_items()"
});
formatter.result({
  "duration": 5033370851,
  "status": "passed"
});
formatter.match({
  "location": "MobilePhonesDefinition.user_remembers_the_first_item()"
});
formatter.result({
  "duration": 27586110,
  "status": "passed"
});
formatter.match({
  "location": "MobilePhonesDefinition.user_enters_memorized_value()"
});
formatter.result({
  "duration": 5875850346,
  "status": "passed"
});
formatter.match({
  "location": "MobilePhonesDefinition.check_name_product_corresponds_to_memorized_value()"
});
formatter.result({
  "duration": 1126599572,
  "status": "passed"
});
});