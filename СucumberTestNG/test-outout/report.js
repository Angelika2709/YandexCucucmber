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
  "duration": 53317239196,
  "status": "passed"
});
formatter.match({
  "location": "MobilePhonesDefinition.user_enters_producer_and_price()"
});
formatter.result({
  "duration": 1247968215,
  "status": "passed"
});
formatter.match({
  "location": "MobilePhonesDefinition.user_checks_the_number_of_items()"
});
formatter.result({
  "duration": 5035947490,
  "status": "passed"
});
formatter.match({
  "location": "MobilePhonesDefinition.user_remembers_the_first_item()"
});
formatter.result({
  "duration": 33873464,
  "status": "passed"
});
formatter.match({
  "location": "MobilePhonesDefinition.user_enters_memorized_value()"
});
formatter.result({
  "duration": 6218945093,
  "status": "passed"
});
formatter.match({
  "location": "MobilePhonesDefinition.check_name_product_corresponds_to_memorized_value()"
});
formatter.result({
  "duration": 974371008,
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
  "duration": 22859096867,
  "status": "passed"
});
formatter.match({
  "location": "HeadphonesDefinition.user_enters_manufacturer_price()"
});
formatter.result({
  "duration": 684083043,
  "status": "passed"
});
formatter.match({
  "location": "HeadphonesDefinition.user_verifies_number_items()"
});
formatter.result({
  "duration": 5025154112,
  "status": "passed"
});
formatter.match({
  "location": "HeadphonesDefinition.user_saves_first_item()"
});
formatter.result({
  "duration": 32418532,
  "status": "passed"
});
formatter.match({
  "location": "HeadphonesDefinition.user_input_memorized_value()"
});
formatter.result({
  "duration": 4283637945,
  "status": "passed"
});
formatter.match({
  "location": "HeadphonesDefinition.verufy_name_product_corresponds_to_memorized_value()"
});
formatter.result({
  "duration": 930188860,
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
  "duration": 22443733808,
  "status": "passed"
});
formatter.match({
  "location": "SortMobilePhonesDefinition.user_sorts_price()"
});
formatter.result({
  "duration": 2247437015,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d72.0.3626.109)\n  (Driver info: chromedriver\u003d2.45.615291 (ec3682e3c9061c10f26ea9e5cdcf3c53f3f74387),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-SRR2B8KR\u0027, ip: \u0027192.168.100.243\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.45.615291 (ec3682e3c9061c..., userDataDir: C:\\Users\\USER1~1\\AppData\\Lo...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:49221}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 72.0.3626.109, webStorageEnabled: true}\nSession ID: c2d659acc608a920a1d6c1bc6943ae2c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.getText(RemoteWebElement.java:166)\r\n\tat Classes.Items.getPrice(Items.java:53)\r\n\tat stepDefinitions.SortMobilePhonesDefinition.user_sorts_price(SortMobilePhonesDefinition.java:30)\r\n\tat ✽.When user sorts for the price(C:/Users/USER 1/git/alfatest/СucumberTestNG/src/test/resources/Features/goods.feature:31)\r\n",
  "status": "failed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});