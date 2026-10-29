// describe("protractor element demo", function () {

//     it('Locator', function () {

//         browser.get("http://juliemr.github.io/protractor-demo/");

//         element(by.model("first")).sendKeys("3");
//         element(by.model("second")).sendKeys("5");

//         element(by.id("gobutton")).click();

//         //Assertions to chcek the expected and actual results and jasmine takes care of promise
//         expect(element(by.css("h2.ng-binding")).getText()).toBe("18");

//         element(by.css("h2[class='ng-binding']")).getText().then(function(text)
//         //tagname[attribute='value']=CSS
//         {
//         console.log(text);
//     })

//     });

// });


//If the expected and actual is not same then there will be an error

describe("protractor element demo", function () {

    it('Locator', function () {

        browser.get("http://juliemr.github.io/protractor-demo/");

        element(by.model("first")).sendKeys("3");
        element(by.model("second")).sendKeys("5");

        element(by.id("gobutton")).click();

        //Assertions to chcek the expected and actual results and jasmine takes care of promise
        expect(element(by.css("h2.ng-binding")).getText()).toBe("18");

        element(by.css("h2[class='ng-binding']")).getText().then(function(text)
        //tagname[attribute='value']=CSS
        {
        console.log(text);
    })

    });

});