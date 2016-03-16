#!/usr/bin/env node

var copy = require('copy-template-dir')
var path = require('path')
var argv = require('minimist')(process.argv.slice(2))

var cwd = process.cwd()
var templateDir = path.resolve(__dirname, 'template')
var input = argv._[0]
var targetDir = path.resolve(cwd, input)

copy(templateDir, targetDir, {
  name: input
}, function (err) {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log('Done. Happy hacking!')
})
