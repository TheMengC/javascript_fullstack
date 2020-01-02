// 模块化 commonjs
// const express = require ('express')
// es6 模块化方案
// node 使用es6模块化
import express from 'express'
const app = express()
app.listen(3000)
module.exports = app