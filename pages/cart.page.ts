import {
    Page,
    Locator,
    expect
} from '@playwright/test';

export class CartPage {

    private readonly page: Page;

    private readonly cartLink: Locator;
    private readonly checkoutButton: Locator;

    constructor(page: Page) {

        this.page = page;

        this.cartLink =
            page.locator('.shopping_cart_link');

        this.checkoutButton =
            page.getByRole('button', {
                name: 'Checkout'
            });
    }


    async openCart(): Promise<void> {

        console.log(
            'Opening cart. Current URL:',
            this.page.url()
        );

        console.log(
            'Cart count:',
            await this.cartLink.count()
        );

        await expect(this.cartLink)
            .toBeVisible({
                timeout: 10000
            });

        await this.cartLink.click();

        await expect(this.page)
            .toHaveURL(/cart\.html/, {
                timeout: 10000
            });

        console.log(
            'Cart opened. URL:',
            this.page.url()
        );
    }


    async verifyProduct(
        productName: string
    ): Promise<void> {

        await expect(
            this.page.getByText(productName, {
                exact: true
            })
        ).toBeVisible({
            timeout: 10000
        });
    }


    async checkout(): Promise<void> {

        await expect(this.checkoutButton)
            .toBeVisible({
                timeout: 10000
            });

        await this.checkoutButton.click();
    }
}

