$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/USER 1/git/alfatest/СucumberTestNG/src/main/java/Features/phone.feature");
formatter.feature({
  "line": 1,
  "name": "Mobile Phones section Feature",
  "description": "",
  "id": "mobile-phones-section-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Mobile Phones section Scenario",
  "description": "",
  "id": "mobile-phones-section-feature;mobile-phones-section-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Electronics section is selected",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of page \"����������� � ������ �� ������.�������\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user goes to the Mobile Phones section",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user selects the manufacturer and enters the price",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user sees 66 products",
  "keyword": "Then "
});
formatter.match({
  "location": "MobilePhonesDefinition.electr_sct_is_sel()"
});
formatter.result({
  "duration": 13717289627,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "MobilePhonesDefinition.user_goes_to_the_Mobile_Phones_section()"
});
formatter.result({
  "status": "skipped"
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