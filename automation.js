var webdriver = require('selenium-webdriver');

function testLookingForConsoleErrors()
{
    let prefs = new webdriver.logging.Preferences();
    prefs.setLevel('browser', webdriver.logging.Level.ALL);
    driver = new webdriver.Builder().forBrowser('chrome').setLoggingPrefs(prefs).build();

    driver.get('https://www.geektime.co.il/source-defense-raises-10m').then( () => {

        driver.sleep(500).then(() => {

             driver.manage().logs().get('browser').then((logs) => {
                
                let report = logs.map(item =>{
                    var newItem = {
                        level: item.level.name,
                        message: item.message
                    }
                    return newItem;
                });
                var json = JSON.stringify(report);
                console.log(json);
            });
        });
    });

}

testLookingForConsoleErrors();