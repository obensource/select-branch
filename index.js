#!/usr/bin/env node

const inquirer = require('inquirer')
const { exec } = require('child_process')

const gitBranchOutput = process.argv.sort()
const outputCruft = gitBranchOutput.filter((outputLine, idx) => gitBranchOutput[idx + 1] === outputLine)
outputCruft.push('node_modules', 'package-lock.json', 'package.json')

const gitBranches = gitBranchOutput.filter((outputLine, idx) => !outputCruft.includes(outputLine) && idx > 2)

if (gitBranches.length === 0) {
  console.log('No branches')
  return process.exit(0)
} else if (gitBranches.length === 1) {
  console.log('Only one branch')
  return process.exit(0)
}

inquirer.prompt([
  {
    type: 'list',
    name: 'selection',
    message: 'Which branch do you want to checkout?',
    choices: gitBranches
  }
]).then(choice => {
  let branchSelection = choice.selection
  inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirm',
      message: `Checkout ${branchSelection}?`,
      default: true
    }
  ]).then(selection => {
    if (!selection.confirm) {
      return process.exit(0)
    }
    module.exports = exec(`git checkout ${branchSelection}`,
    (error) => {
      if (error) {
        console.error(`${error}`);
        return;
      }
    })
  })
})
