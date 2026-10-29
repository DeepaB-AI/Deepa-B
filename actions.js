//Actions (But the posse brower is not present currently so this cannot be ran this is for underatdning)
describe("Actions demo", function ()
{
it('open angular js website', function(){
    browser.get('https://posse.com') // to hit the URL
    element(by.model("river")).sendKeys("river");
    browesr.actions().mouseMove(element(by.model("londonQuery")).sendKeys("London")).perform //To move our mouse to that edit box
    browesr.actions().sendKeys(Protrcator.key.Arrow_DOWN).perform(); //After auto sug we need to move our mouse down so use arrow key down
     browesr.actions().sendKeys(Protrcator.key.ENTER).perform(); //After going down we need to enter that value

})

})


// Say suppose with Lonon city we have 7 citied we need to goto 1 st location then we need to use assertions and some get methods
describe('Handling AutoComplete Dropdown', function () {

    it('Select value from autocomplete dropdown', function () {

        browser.get('https://posse.com');

        // Enter search text
        element(by.model('userInputQuery')).sendKeys('river');

        // Move to location textbox and type London
        browser.actions()
            .mouseMove(element(by.model('locationQuery')))
            .sendKeys('london')
            .perform();

        // Press Arrow Down
        browser.actions()
            .sendKeys(protractor.Key.ARROW_DOWN)
            .perform();

        // Press Enter
        browser.actions()
            .sendKeys(protractor.Key.ENTER)
            .perform();

        browser.sleep(2000);

        // Count autocomplete suggestions
        expect(
            element.all(
                by.css('div[ng-mouseover*="onSearchResultOver"]')
            ).count()
        ).toEqual(7);

        // Select first suggestion
        element.all(
            by.css('div[ng-mouseover*="onSearchResultOver"]')
        ).get(0).click();

        browser.sleep(3000);

    });
});