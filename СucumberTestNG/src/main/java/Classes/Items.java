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
		List<WebElement> pricesList = new ArrayList(); 
		pricesList = wd.findElements(By.xpath("//div[@class='price']"));
		for (int k=0; k<pricesList.size(); k++) {
		System.out.println(pricesList.get(k).getText());
				}
	}	
	
	public void getCheckSort() {	
		
	}

}
