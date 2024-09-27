/** Generated from: tests\features\login.feature */
import { test } from "../../../tests/fixtures/fixture.js";

test.describe("Verify login", () => {

  test("Verify user is able to login with valid credentials", { tag: ["@login"] }, async ({ Given, ecomLoginPage, page, And, When, Then }) => {
    await Given("I navigate to \"https://ecommerce-playground.lambdatest.io/\"", null, { ecomLoginPage, page });
    await And("I click on My account", null, { ecomLoginPage });
    await And("I enter E-Mail Address \"pranav@testroverautomation.com\"", null, { ecomLoginPage });
    await And("I enter password \"Test1234\"", null, { ecomLoginPage });
    await When("I click on submit button", null, { ecomLoginPage });
    await Then("I should verify url contains \"pranav/testrover/automation\"", null, { ecomLoginPage });
  });

  test.describe("Verify user is not able login with following credentails", () => {

    test("Example #1", { tag: ["@login"] }, async ({ Given, ecomLoginPage, page, And, When, Then }) => {
      await Given("I navigate to \"https://ecommerce-playground.lambdatest.io/\"", null, { ecomLoginPage, page });
      await And("I click on My account", null, { ecomLoginPage });
      await And("I enter E-Mail Address \"xzy@gmail.com\"", null, { ecomLoginPage });
      await And("I enter password \"TesMeTest\"", null, { ecomLoginPage });
      await When("I click on submit button", null, { ecomLoginPage });
      await Then("I should verify user is not able to login and url contains \"route=account/login\"", null, { page });
    });

    test("Example #2", { tag: ["@login"] }, async ({ Given, ecomLoginPage, page, And, When, Then }) => {
      await Given("I navigate to \"https://ecommerce-playground.lambdatest.io/\"", null, { ecomLoginPage, page });
      await And("I click on My account", null, { ecomLoginPage });
      await And("I enter E-Mail Address \"srk@testroverautomation.com\"", null, { ecomLoginPage });
      await And("I enter password \"Jawan123\"", null, { ecomLoginPage });
      await When("I click on submit button", null, { ecomLoginPage });
      await Then("I should verify user is not able to login and url contains \"route=account/login\"", null, { page });
    });

    test("Example #3", { tag: ["@login"] }, async ({ Given, ecomLoginPage, page, And, When, Then }) => {
      await Given("I navigate to \"https://ecommerce-playground.lambdatest.io/\"", null, { ecomLoginPage, page });
      await And("I click on My account", null, { ecomLoginPage });
      await And("I enter E-Mail Address \"testerrgreat@123.com\"", null, { ecomLoginPage });
      await And("I enter password \"Tesrxzy123\"", null, { ecomLoginPage });
      await When("I click on submit button", null, { ecomLoginPage });
      await Then("I should verify user is not able to login and url contains \"route=account/login\"", null, { page });
    });

    test("Example #4", { tag: ["@login"] }, async ({ Given, ecomLoginPage, page, And, When, Then }) => {
      await Given("I navigate to \"https://ecommerce-playground.lambdatest.io/\"", null, { ecomLoginPage, page });
      await And("I click on My account", null, { ecomLoginPage });
      await And("I enter E-Mail Address \"srk_jawan@test.com\"", null, { ecomLoginPage });
      await And("I enter password \"great123\"", null, { ecomLoginPage });
      await When("I click on submit button", null, { ecomLoginPage });
      await Then("I should verify user is not able to login and url contains \"route=account/login\"", null, { page });
    });

    test("Example #5", { tag: ["@login"] }, async ({ Given, ecomLoginPage, page, And, When, Then }) => {
      await Given("I navigate to \"https://ecommerce-playground.lambdatest.io/\"", null, { ecomLoginPage, page });
      await And("I click on My account", null, { ecomLoginPage });
      await And("I enter E-Mail Address \"SalmanDabang@gmail.com\"", null, { ecomLoginPage });
      await And("I enter password \"test 123\"", null, { ecomLoginPage });
      await When("I click on submit button", null, { ecomLoginPage });
      await Then("I should verify user is not able to login and url contains \"route=account/login\"", null, { page });
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests\\features\\login.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Verify user is able to login with valid credentials": {"pickleLocation":"10:2","tags":["@login"]},
  "Verify user is not able login with following credentails|Example #1": {"pickleLocation":"27:3","tags":["@login"]},
  "Verify user is not able login with following credentails|Example #2": {"pickleLocation":"28:3","tags":["@login"]},
  "Verify user is not able login with following credentails|Example #3": {"pickleLocation":"29:3","tags":["@login"]},
  "Verify user is not able login with following credentails|Example #4": {"pickleLocation":"30:3","tags":["@login"]},
  "Verify user is not able login with following credentails|Example #5": {"pickleLocation":"31:3","tags":["@login"]},
};