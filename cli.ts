#!/usr/bin/env node
// 获取当前工作目录
const cwd = process.cwd();
// 获取当前脚本所在目录
const scriptDir = __dirname;
console.log(`Current working directory: ${cwd}`);
console.log(`Script directory: ${scriptDir}`);
