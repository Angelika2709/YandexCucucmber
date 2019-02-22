package Classes;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Items extends HelperBase {

		public Items(WebDriver wd) {
			super(wd);

		}

		public void getCountItems() {
			List<WebElement> items = wd.findElements(By.xpath("//div[contains(@class,'n-snippet-cell2__title')]/a[contains(@class,'title')]"));			
			System.out.println(items.get(2).getAttribute("title"));
			
		}

	}



