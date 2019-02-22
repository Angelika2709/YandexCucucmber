package Classes;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Manufactures extends HelperBase {

	public Manufactures(WebDriver wd) {
		super(wd);

	}

	public void get_manufacturer() {
		List<WebElement> checkboxes = wd.findElements(By.xpath("//span[@class='NVoaOvqe58']"));
		checkboxes.get(0).click();
		checkboxes.get(8).click();
	}

}
