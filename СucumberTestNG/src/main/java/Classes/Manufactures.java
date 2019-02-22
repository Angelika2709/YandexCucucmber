package Classes;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Manufactures extends HelperBase {
	private Manufactures manNames;
	String manApple;
	String manSams;
	
    public Manufactures(WebDriver wd) {
    	super(wd);
    	manNames = new Manufactures(wd);
    }	


	public void get_manufacturer(String manApple, String manSams) {
		this.manApple = manApple;
		this.manSams = manSams;

		WebElement ddown_manuf = wd.findElement(By.xpath("//*[@class='_2y67xS5HuR']"));
		List<WebElement> manuf_options = ddown_manuf.findElements(By.tagName("li"));
		for (WebElement option : manuf_options)
			if (option.getText().equals(manApple) && (option.getText().equals(manSams))) {
				option.click();
				break;
			}
	}

	public String manAppl(String AppleText) {
		return AppleText;
	}

	public String manSams(String SamsungText) {
		return SamsungText;
	}
}
