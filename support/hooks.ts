import {
    Before,
    After,
    Status
} from '@cucumber/cucumber';

import {
    chromium,
    firefox,
    webkit
} from '@playwright/test';

import fs from 'fs';

import { CustomWorld } from './world';
import { config } from './config';


Before(async function (this: CustomWorld) {

    // Create required folders
    if (!fs.existsSync('screenshots')) {
        fs.mkdirSync('screenshots', {
            recursive: true
        });
    }

    if (!fs.existsSync('traces')) {
        fs.mkdirSync('traces', {
            recursive: true
        });
    }

    if (!fs.existsSync('reports')) {
        fs.mkdirSync('reports', {
            recursive: true
        });
    }


    // Launch browser
    if (config.browser === 'firefox') {

        this.browser = await firefox.launch({
            headless: config.headless
        });

    } else if (config.browser === 'webkit') {

        this.browser = await webkit.launch({
            headless: config.headless
        });

    } else {

        this.browser = await chromium.launch({
            headless: config.headless
        });

    }


    // Create browser context
    this.context = await this.browser.newContext();


    // Start Playwright tracing
    await this.context.tracing.start({
        screenshots: true,
        snapshots: true,
        sources: true
    });


    // Create page
    this.page = await this.context.newPage();

});


After(async function (this: CustomWorld, scenario) {

    const scenarioName = scenario.pickle.name
        .replace(/[^a-zA-Z0-9]/g, '_');


    // Take screenshot when scenario fails
    if (
        scenario.result?.status === Status.FAILED &&
        this.page
    ) {

        const screenshotPath =
            `screenshots/${scenarioName}.png`;

        await this.page.screenshot({
            path: screenshotPath,
            fullPage: true
        });

        const screenshot =
            fs.readFileSync(screenshotPath);

        await this.attach(
            screenshot,
            'image/png'
        );
    }


    // Stop tracing
    if (this.context) {

        const tracePath =
            `traces/${scenarioName}.zip`;

        await this.context.tracing.stop({
            path: tracePath
        });
    }


    // Close page
    if (this.page) {
        await this.page.close();
    }


    // Close context
    if (this.context) {
        await this.context.close();
    }


    // Close browser
    if (this.browser) {
        await this.browser.close();
    }

});