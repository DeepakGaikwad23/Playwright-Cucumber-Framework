import {
    Page,
    Locator
} from '@playwright/test';

export class InventoryPage {

    private readonly page: Page;

    private readonly productsTitle: Locator;

    constructor(page: Page) {

        this.page = page;

        this.productsTitle =
            page.getByText('Products', {
                exact: true
            });
    }

    async verifyProductsPage() {

        await this.productsTitle.waitFor({
            state: 'visible'
        });
    }

    async addProduct(productName: string) {

        const product =
            this.page
                .locator('.inventory_item')
                .filter({
                    hasText: productName
                });

        await product
            .getByRole('button', {
                name: 'Add to cart'
            })
            .click();
    }
}