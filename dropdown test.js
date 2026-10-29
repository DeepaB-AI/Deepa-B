// describe("protrcator element demo", function ()
// {
// it('Locator', function(){
   
//     browser.get('http://juliemr.github.io/protractor-demo/');
//     element(by.model("first")).sendKeys("3")
//     // element(by.model("operator")).element(by.css("option:nth-child(1)")).click() //basically this logic is used when we want individual calculation
//     // element(by.model("operator")).element(by.css("option:nth-child(2)")).click()
//     element(by.model("operator")).element(by.css("option:nth-child(3)")).click()
//     // element(by.model("operator")).element(by.css("option:nth-child(4)")).click()
//     // element(by.model("operator")).element(by.css("option[value='MULTIPLICATION']")).click()
    
// //    element(by.css("option[value='ADDITION']")).element(by.css("option[value='DIVISION']")).element(by.css("option[value:'MODULO']"))
// //     element(by.css("option[value:'MULTIPLICATION']")).element(by.css("option[value:'SUBTRACTION']"))
    

    
//     //To send the data on the edit box
//     element(by.model("second")).sendKeys("5"); //to send the data on the Edit box
//     element(by.id("gobutton")).click(); //To clk on browser
//     element(by.css("h2[class='ng-binding']")).getText().then(function(text)
//     //tagname[attribute='value']=CSS
//     {
//     console.log(text);
//     })
// });
// })



//To click on the dropdown sections in calcultor
describe("protrcator element demo", function ()
{
    function calc(a,b,c)
    {
    element(by.model("first")).sendKeys(a); //To send the data on the edit box
    element(by.model("second")).sendKeys(b); //to send the data on the Edit box
element.all(by.tagName("option")).each(function(item)
{
item.getAttribute("value").then(function(values)

{

if(values==c)
{
item.click();
}

})
})

    element(by.id("gobutton")).click();
    }
it('Locator', function(){
    browser.get('http://juliemr.github.io/protractor-demo/');

calc(1,2,"ADDITION");
calc(4,7,"DIVISION");
calc(2,4, "MULTIPLICATION");
calc(9,8, "SUBTRACTION");
 //This is basiaclly going to all the 3 histry using all method and common value is result in memory and hence it will 1st count how many are there
    element.all(by.repeater("result in memory")).count().then(function(item){
    console.log(item);
 })

 //After knowing the result we need to print the value going to each and every value so used .each as a function(after each has given the value then you go to next)
    element.all(by.repeater("result in memory")).each(function(item){ //item is a current row
        item.element(by.css("td:nth-child(3)")).getText().then(function(text){ //in each rrow print the values
        console.log(text);
    })
    
    })
});

});


