const express = require('express')
const app = express()
const router = require('./routes')
const port = process.env.PORT || 3000
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Tododb')

// bodyParserは非推奨になったので、この形で書く
// 入力されたデータを文字列または配列として認識する
// Content-Typeがapplication/x-www-form-urlencodedのデータを取得するためにはexpress.urlencoded()を追加する必要がある
// extendedオプションはデフォルトでfalseに設定されており、配列型のフォームデータを受け取る際にはtrueに変更する必要がある
app.use(express.urlencoded({ extended: true }))

// 受け取ったデータをJSONオブジェクトとして認識する
// Content-Typeがapplication/jsonのデータを取得するためにはexpress.json()を追加する必要がある
app.use(express.json())
app.use('/api', router)

app.listen(port)
console.info('listen on port: ' + port)