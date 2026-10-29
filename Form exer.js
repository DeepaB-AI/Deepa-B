describe("protractor form", function ()
{
function selectitem(x)
{
    element.all(by.tagName("app-card")).each(function(item)
{
    item.element(by.css("h4[class='card-title'] a")).getText().then(function(text)
    //the above logic can also be wriiten as 
    //item.elemet(by.css("h4 a")).getText().then(function(text)
    {

    if (text==x)
    {
       item.element(by.css("button[class*='btn-info']")).click()
    }

    })

})
}
it('To enter the details in the form', function(){
    browser.get('https://qaclickacademy.github.io/protocommerce/') // to hit the URL
    element(by.name("name")).sendKeys("Deepa")
    element(by.css("input[name='email']")).sendKeys("deepainch@gmail.com");
    element(by.css("input[type='password']")).sendKeys("12345");
    element(by.id("exampleCheck1")).click();
    element(by.cssContainingText("[id='exampleFormControlSelect1'] option","Female")).click(); //locator
    element.all(by.name("inlineRadioOptions")).first().click();
    element(by.buttonText("Submit")).click(); //locator
    element(by.css("[class='alert alert-success alert-dismissible']")).getText().then(function(text){
      console.log(text);
    })

    element(by.name("name")).clear();
    element(by.name("name")).sendKeys("M")
    element(by.css("div[class='alert alert-danger']")).getText().then(function(text)
    {
     console.log(text);
    })

    element(by.linkText("Shop")).click();
    selectitem("Samsung Note 8");
    selectitem("Nokia Edge");

element(by.partialLinkText("Checkout")).getText().then(function(text){
    var res=text.split("("); //To splict the value and give it has a number 
    var x=Number(res[1].trim().charAt(0));

var y=x;
console.log(y);
   expect(Number(res[1].trim().charAt(0))).toBe(y);


})

element(by.partialLinkText("Checkout")).click()

element.all(by.css("tbody tr")).each(function(item) {

    item.all(by.tagName("td")).get(2).getText().then(function(text) {
       // console.log(text);


var total = Number(text.replace("₹.", "").trim());
console.log(total);
    });


});

element(by.css("td[class='text-right']")).getText().then(function(text)
{
    console.log(text);
});

});
});
