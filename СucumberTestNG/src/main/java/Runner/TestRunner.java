package Runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C:\\Users\\USER 1\\git\\alfatest\\�ucumberTestNG\\src\\main\\java\\Features\\phone.feature"
		,glue= {"stepDefinitions"},
		format= {"pretty", "html:test-outout"}
		)

public class TestRunner {
	

}
