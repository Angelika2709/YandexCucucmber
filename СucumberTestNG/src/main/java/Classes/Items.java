package Classes;

import java.util.ArrayList;
import java.util.List;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;


public class Items extends HelperBase {
	List<WebElement> items = new ArrayList();

	public Items(WebDriver wd) {
		super(wd);

	}

	public void getCountItems() throws InterruptedException {
		Thread.sleep(5000);
		items = wd.findElements(By.xpath("//div[@class='n-snippet-cell2__title']"));
		int countItems = items.size();
		System.out.println(countItems);
	}

	public void getFirstItem() {
		String nameItems = items.get(0).getAttribute("title");
		System.out.println(nameItems);
	}

}
