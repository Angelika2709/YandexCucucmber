package Classes;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import junit.framework.Assert;

public class Items extends HelperBase {
	List<WebElement> items = new ArrayList();
	List<WebElement> prices = new ArrayList();
	String nameItem;
	private Comparator comparator;
	
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
			System.out.println("it works");
	}
	
	public void getPrice() {
		prices = wd.findElements(By.xpath("//div[@class='price']"));
		prices.stream().sorted().collect(Collectors.toList()).equals(prices);
		System.out.println(prices.stream().sorted().collect(Collectors.toList()).equals(prices));
	}	
	
	public void getCheckSort() {	
		Assert.assertEquals(prices.stream().sorted().collect(Collectors.toList()).equals(prices), prices);
	}

}
