const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");

let dict = require("../words.json")
let words = dict.words


function wait(ms) {
  var d = new Date();
  var d2 = null;
  do { d2 = new Date(); }
  while(d2-d < ms);
}

async function example() {

  var searchString = "Langue";

  //To wait for browser to build and launch properly
  let driver = await new Builder().forBrowser("chrome").build();

  //To fetch http://google.com from the browser with our code.
  await driver.get("https://cemantix.certitudes.org/pedantix");

  await driver.findElement(By.id("dialog-close")).click();

  let guessBar = driver.findElement(By.id("pedantix-guess"))

  for (const word of words) {
    wait(40);
    await guessBar.sendKeys(word, Key.RETURN);
  }

  //It is always a safe practice to quit the browser after execution
  // await driver.quit();
}

example()