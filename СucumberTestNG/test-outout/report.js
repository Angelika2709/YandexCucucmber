$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/USER 1/git/alfatest/СucumberTestNG/src/test/resources/Features/goods.feature");
formatter.feature({
  "line": 1,
  "name": "Goods in Yandex.Market",
  "description": "",
  "id": "goods-in-yandex.market",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "The name of the phones corresponds to the memorized value",
  "description": "",
  "id": "goods-in-yandex.market;the-name-of-the-phones-corresponds-to-the-memorized-value",
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
  "duration": 21085839714,
  "status": "passed"
});
formatter.match({
  "location": "MobilePhonesDefinition.user_enters_producer_and_price()"
});
formatter.result({
  "duration": 982368868,
  "status": "passed"
});
formatter.match({
  "location": "MobilePhonesDefinition.user_checks_the_number_of_items()"
});
formatter.result({
  "duration": 5063958559,
  "status": "passed"
});
formatter.match({
  "location": "MobilePhonesDefinition.user_remembers_the_first_item()"
});
formatter.result({
  "duration": 46459694,
  "status": "passed"
});
formatter.match({
  "location": "MobilePhonesDefinition.user_enters_memorized_value()"
});
formatter.result({
  "duration": 5731452389,
  "status": "passed"
});
formatter.match({
  "location": "MobilePhonesDefinition.check_name_product_corresponds_to_memorized_value()"
});
formatter.result({
  "duration": 904988668,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "The name of the headphones corresponds to the memorized value",
  "description": "",
  "id": "goods-in-yandex.market;the-name-of-the-headphones-corresponds-to-the-memorized-value",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "Headphones section is selected",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "user enters manufacturer and price",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user verifies the number of items",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user saves the first item",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user input memorized value",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "verify that the name of the product corresponds to the memorized value",
  "keyword": "Then "
});
formatter.match({
  "location": "HeadphonesDefinition.headphones_sect_is_selected()"
});
formatter.result({
  "duration": 19382201700,
  "status": "passed"
});
formatter.match({
  "location": "HeadphonesDefinition.user_enters_manufacturer_price()"
});
formatter.result({
  "duration": 604485031,
  "status": "passed"
});
formatter.match({
  "location": "HeadphonesDefinition.user_verifies_number_items()"
});
formatter.result({
  "duration": 5027897576,
  "status": "passed"
});
formatter.match({
  "location": "HeadphonesDefinition.user_saves_first_item()"
});
formatter.result({
  "duration": 30540774,
  "status": "passed"
});
formatter.match({
  "location": "HeadphonesDefinition.user_input_memorized_value()"
});
formatter.result({
  "duration": 4752246398,
  "status": "passed"
});
formatter.match({
  "location": "HeadphonesDefinition.verufy_name_product_corresponds_to_memorized_value()"
});
formatter.result({
  "duration": 865626568,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Sorting by mobile phone price",
  "description": "",
  "id": "goods-in-yandex.market;sorting-by-mobile-phone-price",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "Mobile Phones section is choosen",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "user sorts for the price",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "�heck that the items on the page are sorted correctly",
  "keyword": "Then "
});
formatter.match({
  "location": "SortMobilePhonesDefinition.mobile_phones_sect_is_choosen()"
});
formatter.result({
  "duration": 19775549632,
  "status": "passed"
});
formatter.match({
  "location": "SortMobilePhonesDefinition.user_sorts_price()"
});
formatter.result({
  "duration": 66809116,
  "error_message": "java.lang.ClassCastException: org.openqa.selenium.remote.RemoteWebElement cannot be cast to java.lang.Comparable\r\n\tat java.util.Comparators$NaturalOrderComparator.compare(Comparators.java:47)\r\n\tat java.util.TimSort.countRunAndMakeAscending(TimSort.java:355)\r\n\tat java.util.TimSort.sort(TimSort.java:234)\r\n\tat java.util.Arrays.sort(Arrays.java:1512)\r\n\tat java.util.stream.SortedOps$SizedRefSortingSink.end(SortedOps.java:348)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:482)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.ReduceOps$ReduceOp.evaluateSequential(ReduceOps.java:708)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.collect(ReferencePipeline.java:499)\r\n\tat Classes.Items.getPrice(Items.java:52)\r\n\tat stepDefinitions.SortMobilePhonesDefinition.user_sorts_price(SortMobilePhonesDefinition.java:29)\r\n\tat ✽.When user sorts for the price(C:/Users/USER 1/git/alfatest/СucumberTestNG/src/test/resources/Features/goods.feature:31)\r\n",
  "status": "failed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});