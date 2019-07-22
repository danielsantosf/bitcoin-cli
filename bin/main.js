#!/usr/bin/env node
'use strict';

var program = require('commander');
var pkg = require('../package.json');
var convertBTC = require('./ConvertBTC');

program.version(pkg.version).description('Enables one to convert Bitcoin to any currency provided.').option('-C, --currency <currency>', 'Currency to be converted. (Default: USD)').option('-A, --amount <amount>', 'Value in Bitcoin to convert. (Default: 1)').parse(process.argv);

convertBTC(program.currency, program.amount);