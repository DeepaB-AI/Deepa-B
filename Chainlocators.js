//say suppose there are 3 rows with the same value and when you use CSS loactor and direct approch then it might give only 1st row answer how about the other and which the user wants so chain loactors tell were exactly one should go and look
describe("protrcator element demo", function ()
{
it('Locator', function(){
   
    browser.get('http://juliemr.github.io/protractor-demo/');
    element(by.model("first")).sendKeys("3"); //To send the data on the edit box
    element(by.model("second")).sendKeys("5"); //to send the data on the Edit box
    element(by.id("gobutton")).click(); //To clk on browser
    element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text){
        console.log(text);
    })
    
    //tagname[attribute='value']=CSS
    //Can also be defined as tagname only
   
})
})


// describe('Chain locators demo',function() {  


// it('Open Angular js website',function() {

// browser.get('http://juliemr.github.io/protractor-demo/');
// //repeater ,  chain locators, And css for identical tags
// element(by.model("first")).sendKeys("3");
// element(by.model("second")).sendKeys("5");

// element(by.id("gobutton")).click();

// element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text)
// {

// console.log(text);
// })


// // element(by.model("operator")).element(by.css("option:nth-child(4)")).click();








// })

// })