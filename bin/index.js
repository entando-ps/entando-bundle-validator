#!/usr/bin/env node

const program = require('commander');

const {validateBundle} = require('../lib/actions');
const version = require('../package.json').version;

program.storeOptionsAsProperties(false);

program.version(version).name('entando-bundle-validator');
program.description("A tool to validate Entando's ECR bundles");

program
    .command('validate <bundleFolderPath>')
    .description('validate an Entando\'s ECR bundle folder absolute path')
    .action(validateBundle)

program.parse(process.argv);
