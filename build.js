'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
}

// Text + chalk definitions
const data = {
  name: chalk.green('           Mukul Rajpoot'),
  handle: chalk.white('mukulrajpoot262610'),
  work: chalk.white('SDE Intern at Stratzy'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('mukulrajpoot262610'),
  github: chalk.gray('https://github.com/') + chalk.green('mukulrajpoot262610'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('mukul_eth'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~mukulrajpoot262610'),
  web: chalk.cyan('https://mukulrajpoot.com'),
  wakatime: chalk.gray('https://wakatime.com/') + chalk.cyan('@mukulrajpoot262610'),
  npx: chalk.red('npx') + ' ' + chalk.white('mukulrajpoot262610'),

  labelWork: chalk.white.bold('    Work:'),
  labelLinkedIn: chalk.white.bold('LinkedIn:'),
  labelGitHub: chalk.white.bold('  GitHub:'),
  labelTwitter: chalk.white.bold(' Twitter:'),
  labelWeb: chalk.white.bold('     Web:'),
  labelWakatime: chalk.white.bold('Wakatime:'),
  labelnpm: chalk.white.bold('     npm:'),
  labelCard: chalk.white.bold('    Card:'),
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle} `
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const wakatime = `${data.labelWakatime}  ${data.wakatime}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
  newline + newline + // Add one whole blank line
  working + newline + // data.labelWork + data.work
  linkedining + newline + // data.labelLinkedIn + data.linkedin
  githubing + newline + // data.labelGitHub + data.github
  twittering + newline + // data.labelTwitter + data.twitter
  wakatime + newline + // data.labelTwitter + data.twitter
  webing + newline + newline + // data.labelWeb + data.web
  npming + newline + // data.labelnpm + data.npm
  carding // data.labelCard + data.npx


fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
