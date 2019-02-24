package Classes;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import junit.framework.Assert;

public class Items extends HelperBase {
	List<WebElement> items = new ArrayList();
	String nameItem;
	List<WebElement> prices = new ArrayList();

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

	public void getCheckItems() {
		if (wd.getPageSource().contains(nameItem))
			System.out.println("Name items");
	}

	public void getPrice() throws Exception {
		Thread.sleep(5000);
		prices = wd.findElements(By.xpath("//div[@class='price']"));
		for (int y = 0; y < prices.size(); y++) {
			String s = prices.get(y).getText();
			System.out.println(s);
		}
	}

	public void getCheckSort() {
		System.out.println("__");
		/*
		 * JavascriptExecutor jse = ((JavascriptExecutor)wd); jse.executeScript(
		 * "https://yastatic.net/market-skubi/_/JOleTI6Q_9tRnfHeyfupVhI2vu4.js");
		 */
	}

}
