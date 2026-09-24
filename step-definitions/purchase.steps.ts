import {
    When,
    Then
} from '@cucumber/cucumber';

import { CustomWorld } from '../support/world';

import { InventoryPage } from '../pages/inventory.page';
import { CartPage } from '../pages/cart.page';
import { CheckoutPage } from '../pages/checkout.page';
import { LoginPage } from '../pages/login.page';

import testData from '../data/testData.json';


When(
    'I add the configured product to the cart',
    async function (this: CustomWorld) {

        const inventoryPage =
            new InventoryPage(this.page);

        await inventoryPage.addProduct(
            testData.product.name
        );
    }
);


When(
    'I open the shopping cart',
    async function (this: CustomWorld) {

        const cartPage =
            new CartPage(this.page);

        await cartPage.openCart();
    }
);


Then(
    'I should see the configured product in the cart',
    async function (this: CustomWorld) {

        const cartPage =
            new CartPage(this.page);

        await cartPage.verifyProduct(
            testData.product.name
        );
    }
);


When(
    'I checkout with customer details',
    async function (this: CustomWorld) {

        const cartPage =
            new CartPage(this.page);

        await cartPage.checkout();

        const checkoutPage =
            new CheckoutPage(this.page);

        await checkoutPage.enterCustomerDetails(

            testData.customer.firstName,

            testData.customer.lastName,

            testData.customer.postalCode
        );
    }
);


When(
    'I finish the order',
    async function (this: CustomWorld) {

        const checkoutPage =
            new CheckoutPage(this.page);

        await checkoutPage.finishOrder();
    }
);


Then(
    'I should see the order confirmation',
    async function (this: CustomWorld) {

        const checkoutPage =
            new CheckoutPage(this.page);

        await checkoutPage.verifyConfirmation();
    }
);