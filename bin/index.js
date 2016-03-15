#!/usr/bin/env node

var copy = require('copy-template-dir')
var path = require('path')
var mkdirp = require('mkdirp')
var argv = require('minimist')(process.argv.slice(2))

var cwd = process.cwd()
var templateDir = path.resolve(__dirname, '..', 'template')
var input = argv._[0]
var targetDir = path.resolve(cwd, input)

mkdirp(targetDir, function (err) {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  copy(templateDir, targetDir, function (err) {
    if (err) {
      console.error(err)
      process.exit(1)
    }
  })
})
