package stepDefinitions;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;


@SuppressWarnings("deprecation")
public class MobilePhonesDefinition {	
	
	WebDriver driver;
		
	@Given("^Electronics section is selected$")
	public void electr_sct_is_sel() {
		System.setProperty("webdriver.chrome.driver", "C://chromedriver_win32//chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://market.yandex.ru");
		driver.findElement(By.partialLinkText("ћаркет")).click();
		driver.findElement(By.partialLinkText("Ёлектроника")).click();
		}
	
	
	@When("^title of page 'Ёлектроника Ч купить на яндекс.ћаркете'$")
	public void title_of_page_electr() {
		String title = driver.getTitle();
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
		get_manufacturer();	
	}

	@Then("^user sees 68 products&")
	public void user_sees_68_products() {
		//driver.findElement(By.xpath(""));
		System.out.println("ok");
		//Assert.assertEquals("Ёлектроника Ч купить на яндекс.ћаркете", title);
	}
	
	
	private void get_manufacturer() {
		String AppleText = "Apple";
		String SamsungText = "Samsung";		
		WebElement ddown_manuf = driver.findElement(By.xpath("//*[@class='_2y67xS5HuR']"));
		List<WebElement> manuf_options = ddown_manuf.findElements(By.tagName("li"));
		for (WebElement option : manuf_options)
			if (option.getText().equals(AppleText)&&(option.getText().equals(SamsungText)))
		    {
		        option.click(); 
		        break;
		    }
	}
	}
		


