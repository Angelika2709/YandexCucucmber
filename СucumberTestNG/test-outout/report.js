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
  "duration": 24189860958,
  "status": "passed"
});
formatter.match({
  "location": "MobilePhonesDefinition.user_enters_producer_and_price()"
});
formatter.result({
  "duration": 1231800549,
  "status": "passed"
});
formatter.match({
  "location": "MobilePhonesDefinition.user_checks_the_number_of_items()"
});
formatter.result({
  "duration": 5042687964,
  "status": "passed"
});
formatter.match({
  "location": "MobilePhonesDefinition.user_remembers_the_first_item()"
});
formatter.result({
  "duration": 32971918,
  "status": "passed"
});
formatter.match({
  "location": "MobilePhonesDefinition.user_enters_memorized_value()"
});
formatter.result({
  "duration": 6209266595,
  "status": "passed"
});
formatter.match({
  "location": "MobilePhonesDefinition.check_name_product_corresponds_to_memorized_value()"
});
formatter.result({
  "duration": 1475613887,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c...фон Samsung Galaxy S[8]\u003e but was:\u003c...фон Samsung Galaxy S[4 GT-I9500 64GB]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat Classes.Items.getCheck(Items.java:42)\r\n\tat stepDefinitions.MobilePhonesDefinition.check_name_product_corresponds_to_memorized_value(MobilePhonesDefinition.java:49)\r\n\tat ✽.Then check that the name of the product corresponds to the memorized value(C:/Users/USER 1/git/alfatest/СucumberTestNG/src/test/resources/Features/phone.feature:10)\r\n",
  "status": "failed"
});
});