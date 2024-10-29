import { expect } from "chai";
import Page from "./page";

class BookingdataPage extends Page {
  get tfemail() {
    return $('//input[@name="email"]');
  }

  get tfemailagain() {
    return $('//input[@name="reenterEmail"]');
  }

  get tfFirstName() {
    return $('//input[@name="firstName"]');
  }

  get tfLastName() {
    return $('//input[@name="lastName"]');
  }

  get tfbdate() {
    return $('//input[@name="birthDate"]');
  }

  get tfphoneNo() {
    return $('//input[@name="phoneNumber"]');
  }

  get tfAddress() {
    return $('//input[@name="address"]');
  }

  get tfpostalNo() {
    return $('//input[@name="postalCode"]');
  }

  get tfLocation() {
    return $('//input[@name="city"]');
  }

  get cbTelefon() {
    return $('//input[@name="Telefon"]');
  }

  get cbMarketing() {
    return $('//input[@name="Bundled Marketing"]');
  }

  get cbProfileRing() {
    return $('//input[@name="Profilering"]');
  }
  get btnSubmit() {
    return $('//button[@type="submit"]');
  }

  get txtConfirm() {
    return $(`//h1[text()='Bilen är reserverad']`);
  }

  get btnOk() {
    return $(`//span[contains(text(),'OK') or contains(text(),'Ja')]`);
  }

  get txtPreExist() {
    return $(
      `//h1[@class="css-q03omn" or contains(text(),'En reservation finns redan')]`
    );
  }

  async enterDetails() {
    // Wait for the elements to be displayed (if needed)
    await this.tfemail.scrollIntoView();
    await this.tfemail.waitForDisplayed();
    // Fill in the form fields using global test data
    await this.tfemail.setValue(global.testData.email);
    await this.tfemailagain.setValue(global.testData.confirm_email);
    await this.tfFirstName.setValue(global.testData.first_name);
    await this.tfLastName.setValue(global.testData.surname);
    await this.tfbdate.setValue(global.testData.bdate);
    await browser.keys("Space");
    await browser.pause(4000);
    await this.tfphoneNo.click();
    await browser.keys(["Command", "a"]);
    await browser.keys("Delete"); // Deletes the selected text
    await this.tfphoneNo.setValue(global.testData.phone_number);
    await this.tfAddress.setValue(global.testData.address);
    await this.tfpostalNo.setValue(global.testData.postal_code);
    await this.tfLocation.setValue(global.testData.location);
    await this.tfemail.scrollIntoView();
    await this.cbTelefon.click();
    await this.cbMarketing.click();
    await this.cbProfileRing.click();
    await this.btnSubmit.waitForClickable();
    // Submit the form
    await this.btnSubmit.click();

    // Capture the confirmation text and verify using Chai assertions
    try {
      // Wait for the confirmation text to be displayed
      await this.txtConfirm.waitForDisplayed({ timeout: 10000 });
      const confirmationText = await this.txtConfirm.getText();
      expect(confirmationText).to.equal("Bilen är reserverad"); // Chai assertion
    } catch {
      await this.txtPreExist.waitForDisplayed({ timeout: 10000 });
      const alternativeText = await this.txtPreExist.getText(); // Assuming another element contains different text
      expect(alternativeText).to.equal("En reservation finns redan");
      const isOkBtnDisplayed = await this.btnOk.waitForEnabled({
        timeout: 10000,
      });
      if (isOkBtnDisplayed) {
        await this.btnOk.waitForClickable({ timeout: 10000 });
        await this.btnOk.click();
        await browser.pause(8000); //In case of minor timing issues (like animations or popups), a short pause can sometimes help.
      }
    }
    await this.btnOk.waitForClickable({ timeout: 60000 });
    await this.btnOk.click();
  }
}

export default new BookingdataPage();
