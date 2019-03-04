$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/USER 1/git/alfatest/СucumberTestNG/src/test/resources/Features/goods.feature");
formatter.feature({
  "line": 1,
  "name": "Goods in Yandex.Market",
  "description": "",
  "id": "goods-in-yandex.market",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "The name of the phones corresponds to the memorized value",
  "description": "",
  "id": "goods-in-yandex.market;the-name-of-the-phones-corresponds-to-the-memorized-value",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@mobilephones"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Mobile Phones section is selected",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enters producer and price",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user checks the number of items",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user remembers the first item",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enters memorized value",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "check that the name of the product corresponds to the memorized value",
  "keyword": "Then "
});
formatter.match({
  "location": "MobilePhonesDefinition.mobile_phones_sect_is_selected()"
});
formatter.result({
  "duration": 16502497922,
  "status": "passed"
});
formatter.match({
  "location": "MobilePhonesDefinition.user_enters_producer_and_price()"
});
formatter.result({
  "duration": 1094917587,
  "status": "passed"
});
formatter.match({
  "location": "MobilePhonesDefinition.user_checks_the_number_of_items()"
});
formatter.result({
  "duration": 5032238094,
  "status": "passed"
});
formatter.match({
  "location": "MobilePhonesDefinition.user_remembers_the_first_item()"
});
formatter.result({
  "duration": 28474465,
  "status": "passed"
});
formatter.match({
  "location": "MobilePhonesDefinition.user_enters_memorized_value()"
});
formatter.result({
  "duration": 4204657581,
  "status": "passed"
});
formatter.match({
  "location": "MobilePhonesDefinition.check_name_product_corresponds_to_memorized_value()"
});
formatter.result({
  "duration": 1566417735,
  "status": "passed"
});
});