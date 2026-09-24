export const config = {

    baseURL:
        process.env.BASE_URL ||
        'https://www.saucedemo.com',

    headless:
        process.env.CI === 'true',

    browser:
        process.env.BROWSER ||
        'chromium'
};