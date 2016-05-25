# nightwatchProject
r## End to End

This module uses [nightwatch.js](http://nightwatchjs.org/) to run all functional tests.

### Install and update the module

    npm install
    npm run update

### Run all tests against mocks

    npm test

### Run all tests against an environment

    npm test -- --env dev
    npm test -- -e dev

Available environments:

- dev
- test
- stage

### Run single or suite tests

	npm test -- -t tests/login/loginTest.js

    npm test -- -g login








