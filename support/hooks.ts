import {
    Before,
    After,
    Status,
    setDefaultTimeout
} from '@cucumber/cucumber';

import {
    chromium,
    firefox,
    webkit
} from '@playwright/test';

import fs from 'fs';

import { CustomWorld } from './world';
import { config } from './config';


// Cucumber step timeout
setDefaultTimeout(30 * 1000);


Before(async function (this: CustomWorld) {

    // Create folders
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


    // Launch browser
    if (config.browser === 'firefox') {

        this.browser =
            await firefox.launch({
                headless: config.headless
            });

    } else if (config.browser === 'webkit') {

        this.browser =
            await webkit.launch({
                headless: config.headless
            });

    } else {

        this.browser =
            await chromium.launch({
                headless: config.headless
            });
    }


    // Create context
    this.context =
        await this.browser.newContext();


    // Start tracing
    await this.context.tracing.start({
        screenshots: true,
        snapshots: true
    });


    // Create page
    this.page =
        await this.context.newPage();


    // Navigate to SauceDemo
    await this.page.goto(
        'https://www.saucedemo.com/',
        {
            waitUntil: 'domcontentloaded'
        }
    );

    console.log(
        'Browser started. URL:',
        this.page.url()
    );
});


After(async function (
    this: CustomWorld,
    scenario
) {

    const scenarioName =
        scenario.pickle.name
            .replace(/[^a-zA-Z0-9]/g, '_');


    // Capture screenshot when failed
    if (scenario.result?.status === Status.FAILED) {

        const screenshot =
            await this.page.screenshot({
                path:
                    `screenshots/${scenarioName}.png`,
                fullPage: true
            });

        this.attach(
            screenshot,
            'image/png'
        );


        // Save trace
        await this.context.tracing.stop({
            path:
                `traces/${scenarioName}.zip`
        });

    } else {

        await this.context.tracing.stop();
    }


    // Close browser
    await this.browser.close();
});

