
package Classes;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class PriceHelper extends HelperBase {

	public PriceHelper(WebDriver wd) {
		super(wd);
	}

	public void setPrice(String price) {
		sendPrice(By.id("glpricefrom"), price);	
	}

}
