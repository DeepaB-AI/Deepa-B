//Half of the code is written since this cannot be executed only conecept we need grasp
element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).get(0).click();

element(by.css("a[ng-href*='London/River Island']")).click().then(function () {

    browser.getTitle().then(function (title) {
        console.log(title + " title of the page before switching");
    });

    browser.getAllWindowHandles().then(function (handles) { // to get all the winodw existing details

        browser.switchTo().window(handles[1]); //Switching from parent window to 1st child window and 0 th index will be for parent window

        browser.getTitle().then(function (title) {
            console.log(title + " title of the page after switching"); // getting details from child window
        });

        browser.switchTo().window(handles[0]); //switching back to parent winodw

        browser.getTitle().then(function (title) {
            console.log(title + " title of the page at 3rd time ");
        });

    });
});