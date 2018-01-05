#!/usr/bin/env node

const fs = require('fs');
const yargs = require('yargs');

const argv = yargs.argv;
const thisPwd = process.env.PWD;

function buildScaffold() {
  fs.mkdirSync(`${thisPwd}/build`);
  fs.mkdirSync(`${thisPwd}/src`);
  fs.mkdirSync(`${thisPwd}/src/sass`);
}

if (argv.smacss) {
  buildScaffold();
  fs.mkdirSync(`${thisPwd}/src/sass/00-plugins`);
  fs.mkdirSync(`${thisPwd}/src/sass/01-base`);
  fs.mkdirSync(`${thisPwd}/src/sass/02-layout`);
  fs.mkdirSync(`${thisPwd}/src/sass/03-modules`);
  fs.mkdirSync(`${thisPwd}/src/sass/04-state`);
  fs.mkdirSync(`${thisPwd}/src/sass/05-theme`);
  fs.writeFileSync(`${thisPwd}/src/sass/main.scss`, "@charset 'utf-8';\n\n@import '00-plugins/__plugins-dir.scss';\n@import '01-base/__base-dir.scss'\n@import '02-layout/__layout-dir.scss';\n@import '03-modules/__modules-dir.scss';\n@import '04-state/__state-dir.scss';\n@import '05-theme/__theme-dir.scss';");
  fs.writeFileSync(`${thisPwd}/src/sass/00-plugins/__plugins-dir.scss`, '');
  fs.writeFileSync(`${thisPwd}/src/sass/01-base/__base-dir.scss`, '');
  fs.writeFileSync(`${thisPwd}/src/sass/02-layout/__layout-dir.scss`, '');
  fs.writeFileSync(`${thisPwd}/src/sass/03-modules/__modules-dir.scss`, '');
  fs.writeFileSync(`${thisPwd}/src/sass/04-state/__state-dir.scss`, '');
  fs.writeFileSync(`${thisPwd}/src/sass/05-theme/__theme-dir.scss`, '');
}

if (argv.bem) {
  buildScaffold();
  fs.mkdirSync(`${thisPwd}/src/sass/00-plugins`);
  fs.mkdirSync(`${thisPwd}/src/sass/01-block`);
  fs.mkdirSync(`${thisPwd}/src/sass/02-element`);
  fs.mkdirSync(`${thisPwd}/src/sass/03-modifier`);
}
