package Runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C:\\Users\\USER 1\\git\\alfatest\\ÑucumberTestNG\\src\\test\\resources\\Features\\goods.feature"
		,glue= {"stepDefinitions"},
		tags = "@mobilephones",
		format= {"html:test-outout"}
		)

public class TestRunner {

}
