// describe("protrcator element demo", function ()
// {
// it('Locator', function(){
   
//     browser.get('http://juliemr.github.io/protractor-demo/');
//     element(by.model("first")).sendKeys("3"); //To send the data on the edit box
//     element(by.model("second")).sendKeys("5"); //to send the data on the Edit box
//     element(by.id("gobutton")).click();

//     element(by.model("first")).sendKeys("4"); //To send the data on the edit box
//     element(by.model("second")).sendKeys("2"); //to send the data on the Edit box
//     element(by.id("gobutton")).click();

//     element(by.model("first")).sendKeys("2"); //To send the data on the edit box
//     element(by.model("second")).sendKeys("8"); //to send the data on the Edit box
//     element(by.id("gobutton")).click();

//  //This is basiaclly going to all the 3 histry using all method and common value is result in memory and hence it will 1st count how many are there
//     element.all(by.repeater("result in memory")).count().then(function(item){
//     console.log(item);
//  })

//  //After knowing we need to print the value going to each and every value so used .each as a function(after each has given the value then you go to next)
//     element.all(by.repeater("result in memory")).each(function(item){ //item is a current row
//         item.element(by.css("td:nth-child(3)")).getText().then(function(text){ //in each rrow print the values
//         console.log(text);
//     })
    
//     })
// });
// });

//Above method using funcations for sending 2 values
describe("protrcator element demo", function ()
{
    function add(a,b)
    {
    element(by.model("first")).sendKeys(a); //To send the data on the edit box
    element(by.model("second")).sendKeys(b); //to send the data on the Edit box
    element(by.id("gobutton")).click();
    }
it('Locator', function(){
    browser.get('http://juliemr.github.io/protractor-demo/');

add(1,2);
add(4,7);
add(2,4);
add(9,8);
 //This is basiaclly going to all the 3 histry using all method and common value is result in memory and hence it will 1st count how many are there
    element.all(by.repeater("result in memory")).count().then(function(item){
    console.log(item);
 })

 //After knowing we need to print the value going to each and every value so used .each as a function(after each has given the value then you go to next)
    element.all(by.repeater("result in memory")).each(function(item){ //item is a current row
        item.element(by.css("td:nth-child(3)")).getText().then(function(text){ //in each rrow print the values
        console.log(text);
    })
    
    })
});

});


