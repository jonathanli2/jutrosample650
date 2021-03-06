"use strict";

var path = require('path');

module.exports = {
  envVarsPath: "config/.env",
  quarantineMode: false,
  concurrency: 1,
  browser: 'chrome',
  reporter: process.env.TEAMCITY_VERSION === undefined ? 'spec' : 'teamcity',
  reporterOutputBdd: 'reports/behaviouralTests',
  reporterOutputNonBdd: 'reports/devtests',
  screenshotsPathPattern: undefined,
  videoPathPattern: undefined,
  clientScripts: undefined,
  headless: false,
  selectorTimeout: 30000,
  assertionTimeout: 20000,
  pageLoadTimeout: 30000,
  liveMode: false,
  osCompatibility: false,
  disablePageCaching: true,
  debugOnFail: false,
  speed: 1,
  disableMultipleWindows: false,
  retryTestPages: false,
  ajaxRequestTimeout: 120000,
  pageRequestTimeout: 3000,
  browserInitTimeout: 120000,
  disableScreenshots: false,
  debugMode: false,
  stopOnFirstFail: false,
  skipJsErrors: true,
  skipUncaughtErrors: true,
  projectName: path.basename(__dirname),
  projectVersion: process.env.npm_package_version,
  reportName: 'GT-UI Behavioural Tests Report',
  openReportInBrowser: false,
  disableLog: true,
  displayDuration: true,
  durationInMS: true
};