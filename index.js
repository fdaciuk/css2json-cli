#!/usr/bin/env node

const css2json = require('./lib/css2json')
const css = process.argv[2]

console.log(css2json(css))
