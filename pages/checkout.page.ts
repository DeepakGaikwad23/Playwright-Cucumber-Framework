import {
    Page,
    Locator
} from '@playwright/test';

export class CheckoutPage {

    private readonly page: Page;

    private readonly firstName: Locator;
    private readonly lastName: Locator;
    private readonly postalCode: Locator;

    private readonly continueButton: Locator;
    private readonly finishButton: Locator;

    private readonly confirmationMessage: Locator;

    constructor(page: Page) {

        this.page = page;

        this.firstName =
            page.getByPlaceholder('First Name');

        this.lastName =
            page.getByPlaceholder('Last Name');

        this.postalCode =
            page.getByPlaceholder('Zip/Postal Code');

        this.continueButton =
            page.getByRole('button', {
                name: 'Continue'
            });

        this.finishButton =
            page.getByRole('button', {
                name: 'Finish'
            });

        this.confirmationMessage =
            page.getByText(
                'Thank you for your order!',
                {
                    exact: true
                }
            );
    }

    async enterCustomerDetails(
        firstName: string,
        lastName: string,
        postalCode: string
    ) {

        await this.firstName.fill(firstName);

        await this.lastName.fill(lastName);

        await this.postalCode.fill(postalCode);

        await this.continueButton.click();
    }

    async finishOrder() {

        await this.finishButton.click();
    }

    async verifyConfirmation() {

        await this.confirmationMessage.waitFor({
            state: 'visible'
        });
    }
}