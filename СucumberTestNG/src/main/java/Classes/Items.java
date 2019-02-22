package Classes;

import java.util.ArrayList;
import java.util.List;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import junit.framework.Assert;

public class Items extends HelperBase {
	List<WebElement> items = new ArrayList();
	String nameItem;
	
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
		nameItem = items.get(0).getText();
		System.out.println(nameItem);
	}

	public void setFirstItem() {
		wd.findElement(By.id("header-search")).sendKeys(nameItem);
		wd.findElement(By.xpath("//button[@type='submit']")).click();
	}
	
	public void getCheck() {
		if (wd.getPageSource().contains(nameItem))
			System.out.println("it works");

	}

}
