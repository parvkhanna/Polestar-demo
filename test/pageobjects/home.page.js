import { expect } from 'chai';
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */

    get rejectCookiebtn()
    {
        return $('//button[@id="onetrust-reject-all-handler"]')
    }

    get discoverButton() {
        return $(`(//span[@class='css-1lfoa71' and contains(text(),'Uppt')])[1]`);
    }

    get bookYourTestDriveButton() {
        return $(`(//span[@class="css-1lfoa71" and text()='Leveransklara bilar'])[1]`);
    }

    

    

    async validatePageTitle(expectedTitle) {
        const actualTitle = await browser.getTitle();
        expect(actualTitle).to.equal(expectedTitle);
    }

    
    
    async handleCookie()
    {
        await this.rejectCookiebtn.waitForDisplayed();
        await this.rejectCookiebtn.click();
    }

    // await browser.execute(() => {
    //     const script = document.createElement('script');
    //     script.type = 'text/javascript';
    //     script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    //     document.body.appendChild(script);
    //     window.googleTranslateElementInit = function () {
    //         new google.translate.TranslateElement({ pageLanguage: 'es', includedLanguages: 'en' }, 'translate_element');
    //     };
    // });
    

    open() {
        return super.open('se');
    }
}

export default new HomePage();
