import { assert } from "chai";
import allure from "@wdio/allure-reporter";
import SpecPage from "../pageobjects/specification.page";
import HomePage from "../pageobjects/home.page";
import { readTestData } from "../../test-data/testDataHelper";

describe("Validate Test Drive Booking ", function () {
  before("Navigate to home page", async function () {
    allure.startStep("Open Polestar homepage");
    await HomePage.open();
    allure.startStep("Maximize the window");
    await browser.maximizeWindow();
    allure.startStep("Handle cookies");
    await HomePage.handleCookie();
  });
  // after("Tear down", async () => {
  //   allure.startStep("Close browser");
  //   await browser.closeWindow();
  //   // allure.startStep("Delete Session");
  //   // await browser.deleteSession();
  //   allure.endStep();
  // });

  it("Validate the home page should have correct page title", async function () {
    allure.startStep("Verify the page title");
    await HomePage.validatePageTitle("Polestar – Elbilar | Polestar Sverige");
    allure.endStep();
  });

  it("Should be able to book a test drive", async function () {
    allure.startStep("User is able to select the model for test drive");
    await SpecPage.bookTestDrive("Polestar 4");
    allure.endStep();
  });
});
