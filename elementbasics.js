
//Without wait periosd
// describe("protrcator element demo", function ()
// {
// it('Locator', function(){
   
//     browser.get('http://juliemr.github.io/protractor-demo/');
//     element(by.model("first")).sendKeys("3");
//     element(by.model("second")).sendKeys("5");
// })
// })

//Using above code and waiting for 5sec since we are not seeing the enterd value as it is fast
describe("protrcator element demo", function ()
{
it('Locator', function(){
   
    browser.get('http://juliemr.github.io/protractor-demo/');
    element(by.model("first")).sendKeys("3");
    element(by.model("second")).sendKeys("5").then(function(){
        browser.sleep("5000");
    })
})
})