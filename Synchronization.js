describe("syncrnoziation", function()
{
it("For Non-angular website", function()
{
browser.waitForAngularEnabled(false);
browser.get("https://the-internet.herokuapp.com/dynamic_loading/1");
element(by.css("#start button")).click();  //inspecting this start button by 1st tgoing to start and then searching for button
var EC=protractor.ExpectedConditions;
browser.wait(EC.invisibilityOf(element(by.id('loading'), 9000)));
element(by.id("finish")).getText().then(function(text)
{
browser.sleep(8000);
    console.log(text);
})
})

})