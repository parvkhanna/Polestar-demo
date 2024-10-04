const { assert } = require("chai");
import allure from "@wdio/allure-reporter";
import SpecPage from "../pageobjects/specification.page";
import HomePage from "../pageobjects/home.page";
import { readTestData } from "../../test-data/testDataHelper";

describe("Validate Test Drive Booking ", async function () {
  before("Navigate to home page", async () => {
    allure.startStep("Open Polestar homepage");
    await HomePage.open();
    allure.startStep("Maximize the window");
    await browser.maximizeWindow();
    allure.startStep("Handle cookies");
    await HomePage.handleCookie();
  });
  after("Tear down", async () => {
    allure.startStep("Close browser");
    await browser.closeWindow();
    allure.startStep("Delete Session");
    await browser.deleteSession();
  });

  it("Validate the home page should have correct page title", async () => {
    allure.startStep("Verify the page title");
    await HomePage.validatePageTitle("Polestar – Elbilar | Polestar Sverige");
  });

  it("Should be able to book a test drive", async () => {
    allure.startStep("User is able to select the model for test drive");
    await SpecPage.bookTestDrive("Polestar 4");

    allure.endStep();
  });
});
