describe("protrcator element demo", function ()
{
it('Locator', function(){
   
    browser.get('http://juliemr.github.io/protractor-demo/');
    element(by.model("first")).sendKeys("3"); //To send the data on the edit box
    element(by.model("second")).sendKeys("5"); //to send the data on the Edit box
    element(by.id("gobutton")).click(); //To clk on browser
    element(by.css("h2[class='ng-binding']")).getText().then(function(text)
    //tagname[attribute='value']=CSS
    {
    console.log(text);
    })
});
})
