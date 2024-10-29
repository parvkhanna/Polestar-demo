import { expect } from "chai";
import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
  /**
   * define selectors using getter methods
   */

  get rejectCookiebtn() {
    return $('//button[@id="onetrust-reject-all-handler"]');
  }

  get discoverButton() {
    return $(`(//span[@class='css-1lfoa71' and contains(text(),'Uppt')])[1]`);
  }

  get bookYourTestDriveButton() {
    return $(
      `(//span[@class="css-1lfoa71" and text()='Leveransklara bilar'])[1]`
    );
  }

  async validatePageTitle(expectedTitle) {
    browser.setTimeout({ pageLoad: 10000 });
    const actualTitle = await browser.getTitle();
    expect(actualTitle).to.equal(expectedTitle);
  }

  async handleCookie() {
    await this.rejectCookiebtn.waitForDisplayed();
    await this.rejectCookiebtn.click();
  }

  async open() {
    return super.open("se");
  }
}

export default new HomePage();
