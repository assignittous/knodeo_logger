'use strict';
var chalk, moment;

chalk = require('chalk');

moment = require('moment');

exports.Logger = {
  log: [],
  init: function() {
    this.log = [];
    return this;
  },
  completed: function() {
    return this.log.join("\n");
  },
  append: function(type, msg) {
    var entry;
    entry = "[" + (moment().format('HH:mm:ss.SSS')) + "] " + type + " " + msg;
    this.log.push(chalk.stripColor(entry));
    return console.log(entry);
  },
  debug: function(msg) {
    return this.append(chalk.bgWhite.black(" DEBUG "), msg);
  },
  info: function(msg) {
    return this.append(chalk.bgWhite.black(" INFO "), msg);
  },
  error: function(msg) {
    return this.append(chalk.bgRed.black(" ERROR "), msg);
  },
  warn: function(msg) {
    return this.append(chalk.bgYellow.black(" WARN "), msg);
  },
  bot: function(msg) {
    return this.append(chalk.bgGreen.white(" BOT "), msg);
  },
  shell: function(msg) {
    this.append(chalk.bgBlue.white(" SHELL: "), "");
    return console.log(msg);
  },
  exec: function(msg) {
    return this.append(chalk.bgBlue.white(" EXEC "), msg);
  },
  stub: function(msg) {
    return this.append(chalk.bgRed.black(" STUB "), msg);
  },
  todo: function(msg) {
    return this.append(chalk.bgRed.black(" TODO "), msg);
  }
}.init();
