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
public class MobilePhonesDefinition {
	protected final ApplicationManager app = new ApplicationManager(BrowserType.CHROME);

	@Given("^Mobile Phones section is selected$")
	public void mobile_phones_sect_is_selected() {
		app.init();
		app.getNavigationHelper().goPhones();
	}

	@When("^user enters producer and price$")
	public void user_enters_producer_and_price() {		
		app.priceHelper.setPrice("20000");
		app.getManufNames().get_AppleSams();	
	}

	@Then("^user checks the number of items$")
	public void user_checks_the_number_of_items() throws InterruptedException {
		app.getItems().getCountItems();
	}

	@Then("^user remembers the first item$")
	public void user_remembers_the_first_item() {
		app.getItems().getFirstItem();
	}
	
	@Then("^user enters memorized value$")
	public void user_enters_memorized_value() {
		app.getItems().setFirstItem();
	}
	
	@Then("^check that the name of the product corresponds to the memorized value$")
	public void check_name_product_corresponds_to_memorized_value() {
		app.getItems().getCheckItems();
		app.stop();
	}

}
