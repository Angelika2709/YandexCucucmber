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
public class HeadphonesDefinition {
	
	protected final ApplicationManager app = new ApplicationManager(BrowserType.CHROME);

	@Given("^Headphones section is selected$")
	public void headphones_sect_is_selected() {
		app.init();
		app.getNavigationHelper().goHeadPhones();
	}

	@When("^user enters manufacturer and price$")
	public void user_enters_manufacturer_price() {		
		app.priceHelper.setPrice("5000");
		app.getManufNames().get_Beats();		
	}

	@Then("^user verifies the number of items$")
	public void user_verifies_number_items() throws InterruptedException {
		app.getItems().getCountItems();
	}

	@Then("^user saves the first item$")
	public void user_saves_first_item() {
		app.getItems().getFirstItem();
	}
	
	@Then("^user input memorized value$")
	public void user_input_memorized_value() {
		app.getItems().setFirstItem();
	}
	
	@Then("^verify that the name of the product corresponds to the memorized value$")
	public void verufy_name_product_corresponds_to_memorized_value() {
		app.getItems().getCheckItems();
		app.stop();
	}

}
