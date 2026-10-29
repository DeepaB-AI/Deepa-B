//Without promise the ascynchrnouse conectpt
// describe("protractor baby steps", function ()
// {
// it('open angular js website', function(){
//     browser.get('https://angularjs.org');
//     browser.get('http://juliemr.github.io/protractor-demo/'); // to hit the 2nd  URL
//     browser.sleep(9000);
//     console.log("It has finished execution");
// })
// it('closing the JS website', function(){
// //write the code to close and this is the 2nd test case

// })

// })

//With .then(function(){  JS code or 10% protrcator code which is not resoved internally from protrcator})
describe("protractor baby steps", function ()
{
it('open angular js website', function(){
    browser.get('https://angularjs.org');
    browser.get('http://juliemr.github.io/protractor-demo/').then(function()
    {
    browser.sleep(9000);
    console.log("It has finished execution");
    });
})
it('closing the JS website', function(){
//write the code to close and this is the 2nd test case

})

})