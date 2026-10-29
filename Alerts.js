describe('Protractor Alert steps',function() {  

it('Open NonAngular js website Alerts',function() {
la
browser.waitForAngularEnabled(false); // As the below link is non-angular
browser.get("http://qaclickacademy.com/practice.php"); 
element(by.id("confirmbtn")).click(); //To goto that particular section via insepct ID and click there

browser.switchTo().alert().dismiss().then(function() //this one is used to click on pop-up
//alert().accept()--> For cliking the positive or okay
//alert().dismiss()--> For cancelling the pop-up

{
//10sec
browser.sleep(5000);
})










})

 





//browser.get() will hit url on the browser
// write your raw protractor code

//Each it block will be called as a spec




it('close browswer', function() {



// code to close browser
})





})
//first parameter- Test suite name
//Second parameter - function (function wil have all tests (it blocks)

//first parameter- Test case  name'