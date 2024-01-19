#!/usr/bin/env node
const { cwd } = require('node:process')
const { existsSync } = require('node:fs')
const { join } = require('node:path')
const { execSync } = require('node:child_process')

// 初始化husky钩子
const packageManager = 'yarn'

const huskyPath = join(cwd(), '.husky')
const commitMsgPath = join(huskyPath, 'commit-msg')
const preCommitPath = join(huskyPath, 'pre-commit')

function installHusky() {
  execSync(`${packageManager} husky install`)
}

function initCommitMsg() {
  execSync(
    `${packageManager} husky add .husky/commit-msg '${packageManager} commitlint --edit $1'`,
  )
}

function initPreCommit() {
  execSync(
    `${packageManager} husky add .husky/pre-commit '${packageManager} lint-staged'`,
  )
}

try {
  if (!existsSync(huskyPath)) {
    installHusky()
  }
  if (!existsSync(commitMsgPath)) {
    initCommitMsg()
  }
  if (!existsSync(preCommitPath)) {
    initPreCommit()
  }
} catch (error) {
  console.error('Install Husky Error: ', error)
}
