import {
    Given,
    When,
    Then
} from '@cucumber/cucumber';

import { CustomWorld } from '../support/world';

import { LoginPage } from '../pages/login.page';

import { InventoryPage } from '../pages/inventory.page';

import testData from '../data/testData.json';

Given(
    'I am on the SauceDemo login page',
    async function (this: CustomWorld) {

        const loginPage =
            new LoginPage(this.page);

        await loginPage.navigate(
            'https://www.saucedemo.com'
        );
    }
);

When(
    'I login with valid credentials',
    async function (this: CustomWorld) {

        const loginPage =
            new LoginPage(this.page);

        await loginPage.login(
            testData.validUser.username,
            testData.validUser.password
        );
    }
);

Then(
    'I should see the products page',
    async function (this: CustomWorld) {

        const inventoryPage =
            new InventoryPage(this.page);

        await inventoryPage.verifyProductsPage();
    }
);