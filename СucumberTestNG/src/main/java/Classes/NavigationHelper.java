package Classes;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class NavigationHelper extends HelperBase {

	public NavigationHelper(WebDriver wd) {
		super(wd);
	}	
	
	public void goPhones() {	
		wd.navigate().to("https://market.yandex.ru/catalog--mobilnye-telefony/54726/list?catId=91491&hid=91491");
	}



}
