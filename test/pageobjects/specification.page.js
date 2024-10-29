import { expect } from "chai";
import Page from "./page";
import HomePage from "./home.page";
import BookingDataPage from "../pageobjects/bookingData.page";

class SpecPage extends Page {
  get modeldd() {
    return $(
      '(//label[contains(@id,"dropdown-field-:")]/following-sibling::div/div)[1]'
    );
  }

  getselectModel(modelName) {
    return $(`//button[contains(text(),'${modelName}')]`);
  }

  get carDesc() {
    return $(`//div[@id="vehicle-list"]//div/h1`);
  }

  get modelId() {
    return $(`(//h3[@class="css-2d41ue" and contains(text(),'kr')])[1]`);
  }

  get detailsTab() {
    return $(`//label[@class="css-v6lw2h"]`);
  }

  get priceSpecTab() {
    return $(`//h2[@id="pricebreakdown-section-title"]`);
  }

  get btnContinue() {
    return $(`//button[@id="delivery-order-cta"]`);
  }

  async validateCarModeldesc(expectedModel) {
    const actualModel = await this.carDesc.getText();
    expect(actualModel).to.equal(expectedModel);
  }

  /**
   * a method to encapsule automation code to interact with the page
   */
  async bookTestDrive(expectedModel) {
    await HomePage.discoverButton.waitForClickable();
    await HomePage.bookYourTestDriveButton.click();
    await this.modeldd.waitForDisplayed();
    await this.modeldd.click();
    await this.getselectModel(expectedModel).click();
    await this.carDesc.waitForDisplayed();
    await this.validateCarModeldesc(expectedModel);
    await this.modelId.click();
    await this.detailsTab.waitForDisplayed();
    await this.btnContinue.scrollIntoView();
    await this.btnContinue.waitForClickable({ timeout: 10000 });
    await this.btnContinue.click();
    await BookingDataPage.enterDetails();
  }
}

export default new SpecPage();
