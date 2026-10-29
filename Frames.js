//we cannot execute below code since training link was not working
browser.waitForAngularEnbaled(false);
browser.driver.manage().window().maximize(); //To maximize the chrome screen
browser.get("https://www.qucikacedemy.com");
browser.switchTo().frame("frame name/or id");  //To switch to the frame from parent window
Element(by.css("a[b=c]")).getText().then(function(text){
    console.log(text);
})