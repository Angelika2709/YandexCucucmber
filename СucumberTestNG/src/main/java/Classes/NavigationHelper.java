package Classes;

import java.util.List;

import org.openqa.selenium.Alert;
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

	public void goSections() throws Exception {

		wd.navigate()
				.to("https://market.yandex.ru/?clid=505&utm_source=face_abovesearch&utm_campaign=face_abovesearch");
		Thread.sleep(10);
		wd.navigate().to("https://market.yandex.ru/catalog--elektronika/54440");		
	}	


	public void goPhones() {
		wd.findElement(By.linkText("Мобильные телефоны")).click();
		System.out.println("ok");
	}

}
