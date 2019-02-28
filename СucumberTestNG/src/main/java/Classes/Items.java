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
	List<WebElement> prValues = new ArrayList();
	List<Integer> pricesNotSort = new ArrayList<Integer>();
	String[] pricesSort;

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
			for (int k = 0; k < pricesNotSort.size(); k++) {
				Collections.sort(pricesNotSort);
				System.out.println(pricesNotSort.get(k));
			}			
		}
	}

	public void getCheckSort() {
		System.out.println("___");
		// Arrays.sort(pricesMy);
		// System.out.println("Сравнение "+ Arrays.equals(pricesMy, pricesNotMy));
	}

}
