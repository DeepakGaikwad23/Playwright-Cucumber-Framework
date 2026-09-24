# Playwright Cucumber BDD Automation Framework

A scalable **BDD automation framework** built using **Playwright, TypeScript, and Cucumber** for end-to-end web application testing.

## 🛠️ Technology Stack

* **Playwright** – Browser automation
* **TypeScript** – Programming language
* **Cucumber** – BDD framework
* **Node.js** – Runtime environment
* **Git & GitHub** – Version control
* **HTML / Cucumber Reports** – Test reporting

## 📁 Project Structure

```text
Playwright-Cucumber-Framework/
│
├── features/
│   └── purchase.feature
│
├── step-definitions/
│   └── purchase.steps.ts
│
├── support/
│   ├── hooks.ts
│   ├── world.ts
│   └── config.ts
│
├── pages/
│   ├── login.page.ts
│   ├── inventory.page.ts
│   └── cart.page.ts
│
├── screenshots/
│
├── reports/
│
├── package.json
├── tsconfig.json
├── cucumber.js
├── README.md
└── .gitignore
```

## 🚀 Application Under Test

This project uses **SauceDemo** as the demo application:

https://www.saucedemo.com/

## ⚙️ Prerequisites

Make sure the following are installed:

* Node.js
* npm
* Git
* VS Code

Verify the installations:

```bash
node --version
npm --version
git --version
```

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/Playwright-Cucumber-Framework.git
```

Navigate to the project:

```bash
cd Playwright-Cucumber-Framework
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## ▶️ Run Tests

Run all Cucumber tests:

```bash
npm test
```

Run a specific feature:

```bash
npx cucumber-js features/purchase.feature
```

Run tests with a specific tag:

```bash
npx cucumber-js --tags "@smoke"
```

## 🧪 BDD Example

### Feature

```gherkin
Feature: Purchase product

  Scenario: Purchase Sauce Labs Backpack
    Given I am on the SauceDemo login page
    When I login with valid credentials
    And I add Sauce Labs Backpack to the cart
    And I open the shopping cart
    Then I should see Sauce Labs Backpack in the cart
```

## 🏗️ Framework Architecture

The framework follows a layered architecture:

```text
Feature Files
     ↓
Step Definitions
     ↓
Page Object Model
     ↓
Playwright
     ↓
Web Application
```

### Feature Files

Feature files contain business-readable scenarios written in Gherkin syntax.

### Step Definitions

Step definitions connect Gherkin steps with TypeScript automation code.

### Page Object Model

Page classes contain:

* Locators
* Page actions
* Reusable methods
* Page-specific functionality

### Custom World

The Cucumber `World` provides access to:

* Browser
* Browser Context
* Page
* Test-specific data

### Hooks

Hooks manage test lifecycle activities such as:

* Browser launch
* Browser/context creation
* Screenshot capture
* Browser cleanup

## 📸 Screenshots

Screenshots can be captured automatically when a scenario fails.

Example:

```text
screenshots/
├── failed-login.png
└── failed-purchase.png
```

## 📊 Reporting

Test execution reports can be generated after the test run.

Example:

```bash
npm test
```

The generated report can be opened from the configured reports directory.

## 🔄 CI/CD

This framework can be integrated with **GitHub Actions** for continuous integration.

Typical pipeline:

```text
Developer Push
      ↓
GitHub Repository
      ↓
GitHub Actions
      ↓
Install Dependencies
      ↓
Install Playwright
      ↓
Execute Cucumber Tests
      ↓
Generate Test Report
```

## 🔐 Test Data

Test data should be maintained separately from test implementation wherever possible.

Example:

```text
test-data/
└── users.json
```

Example:

```json
{
  "validUser": {
    "username": "standard_user",
    "password": "secret_sauce"
  }
}
```

## 🎯 Framework Features

* ✅ Playwright browser automation
* ✅ TypeScript
* ✅ Cucumber BDD
* ✅ Page Object Model
* ✅ Custom Cucumber World
* ✅ Hooks
* ✅ Reusable test methods
* ✅ Screenshot on failure
* ✅ Multiple browser support
* ✅ Configurable environments
* ✅ CI/CD ready
* ✅ GitHub Actions integration
* ✅ Test reporting

## 🌐 Supported Browsers

The framework can be configured to run against:

* Chromium
* Firefox
* WebKit

Example:

```typescript
import { chromium, firefox, webkit } from '@playwright/test';
```

## 👨‍💻 Author

**Deepak Gaikwad**

Senior Quality / Automation Test Engineer

### Skills

* Playwright
* TypeScript
* Java
* Selenium
* Cucumber
* REST API Testing
* GitHub Actions
* CI/CD
* Test Automation Framework Design

## 📄 License

This project is intended for learning and demonstration purposes.

````

### Create it quickly in VS Code

From your project folder:

```powershell
cd G:\Playwright-Cucumber-Framework
New-Item README.md
````

Then open it:

```powershell
code README.md
```

Paste the README above and save it.

Then push it to GitHub:

```powershell
git add README.md
git commit -m "Added project README"
git push
```

Your GitHub repository will then display the `README.md` automatically on the repository home page.
