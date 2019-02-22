package stepDefinitions;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import Classes.Manufactures;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

@SuppressWarnings("deprecation")
public class MobilePhonesDefinition extends TestBase {

	@Given("^Mobile Phones section is selected$")
	public void mobile_phones_sect_is_selected() {
		app.getNavigationHelper().goPhones();
	}

	@When("^title of page 'Ёлектроника Ч купить на яндекс.ћаркете'$")
	public void title_of_page_electr() {
		String title = wd.getTitle();
		System.out.println(title);
		Assert.assertEquals("Ёлектроника Ч купить на яндекс.ћаркете", title);
	}

	@Then("^user goes to the Mobile Phones section$")
	public void user_goes_to_the_Mobile_Phones_section() {
		driver.findElement(By.partialLinkText("ћобильные телефоны")).click();
	}

	@Then("^user selects the manufacturer and enters the price&")
	public void user_selects_the_manuf_and_enters_the_price() {
		driver.findElement(By.id("glpricefrom")).sendKeys("20000");

		app.get_manufacturer("Apple", "Samsung");
	}

	@Then("^user sees 68 products&")
	public void user_sees_68_products() {
		// driver.findElement(By.xpath(""));
		System.out.println("ok");
		// Assert.assertEquals("Ёлектроника Ч купить на яндекс.ћаркете", title);
	}

}
