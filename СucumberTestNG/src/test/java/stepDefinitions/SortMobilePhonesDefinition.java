package stepDefinitions;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.BrowserType;

import Classes.*;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

@SuppressWarnings("deprecation")
public class SortMobilePhonesDefinition {
	protected final ApplicationManager app = new ApplicationManager(BrowserType.CHROME);

	@Given("^Mobile Phones section is choosen$")
	public void mobile_phones_sect_is_choosen() {
		app.init();
		app.getNavigationHelper().goPhones();
	}

	@When("^user sorts for the price$")
	public void user_sorts_price() throws Exception {
		app.getNavigationHelper().goSort();	
		app.getItems().getFirstPrice();			
		app.getItems().getSecondPrice();
		
	}

	@Then("^to see that the items on the page are sorted correctly$")
	public void see_items_are_sorted_correctly() {	
		app.getItems().getCheckSort();		
		app.stop();
	}

}
