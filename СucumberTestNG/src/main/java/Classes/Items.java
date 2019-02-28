package Classes;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import junit.framework.Assert;

public class Items extends HelperBase {
	List<WebElement> items = new ArrayList();
	String nameItem;
	List<Integer> pricesNotSort = new ArrayList<Integer>();
	List<Integer> pricesSort = new ArrayList<Integer>();

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

	public void getFirstPrice() throws Exception {
		Thread.sleep(5000);
		List<WebElement> prValues = wd.findElements(By.xpath("//div[@class='price']"));
		for (int j = 0; j < prValues.size(); j++) {
			String s = prValues.get(j).getText().replaceAll("\u20BD", "").replaceAll("\\s", "");
			pricesNotSort.add(Integer.parseInt(s));
		}
		Collections.sort(pricesNotSort);
		for (int k = 0; k < pricesNotSort.size(); k++) {
			pricesNotSort.get(k);
		}	
	}

	
	public void getSecondPrice() throws Exception {
		Thread.sleep(5000);
		List<WebElement> prValues2 = wd.findElements(By.xpath("//div[@class='price']"));
		for (int l = 0; l < prValues2.size(); l++) {
			String s2 = prValues2.get(l).getText().replaceAll("\u20BD", "").replaceAll("\\s", "");
			pricesSort.add(Integer.parseInt(s2));
			System.out.println(pricesSort.get(l));	
		}
	}
		
		public void getCheckSort() {
			System.out.println("___");
			Assert.assertEquals(pricesNotSort.get(0), pricesSort.get(0));
		}

}
