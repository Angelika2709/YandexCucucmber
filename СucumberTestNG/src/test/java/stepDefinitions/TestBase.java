package stepDefinitions;


import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.remote.BrowserType;

import Classes.ApplicationManager;
import cucumber.api.java.After;
import cucumber.api.java.Before;


public class TestBase {
	
	protected final ApplicationManager app = new ApplicationManager(BrowserType.CHROME);

	@Before
	void setUp() throws Exception {
		 app.init();
	}

	@After
	void tearDown() throws Exception {
		 app.stop();
	}
}
