module.exports = {

    default: {

        require: [
            'support/**/*.ts',
            'step-definitions/**/*.ts'
        ],

        requireModule: [
            'ts-node/register'
        ],

        format: [
            'progress',
            'html:reports/cucumber-report.html',
            'json:reports/cucumber-report.json'
        ],

        publishQuiet: true
    }
};