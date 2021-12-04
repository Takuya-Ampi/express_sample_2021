const mongoose = require('mongoose')
const User = require('../models/user')
module.exports = {
  // 全てのユーザーを取得する。
  find_users : async (req, res) => {
    const users = await User.find({}).catch(err => {
      res.send(err)
      console.error(err)
    })
    return res.json(users)
  },

  // 新しいユーザーを作成する。
  create_user : async (req, res) => {
    const user = new User()
    user.name = req.body.name
    user.age = req.body.age
    await user.save().catch(err => {
      res.send(err)
      console.error(err)
    })
    return res.json(user)
  },


  // 特定のユーザーを取得する。
  find_user : async (req, res) => {
    const user = await User.findById(req.params.user_id).catch(err => {
      res.send(err)
      console.error(err)
    })
    return res.json(user)
  },

  // 特定のユーザーを更新する。
  update_user : async (req, res) => {
    const user = await User.findById(req.params.user_id).catch(err => {
      res.send(err)
      console.error(err)
    })
    user.name = req.body.name
    user.age = req.body.age
    await user.save()
    return res.json(user)
  },

  // 特定のユーザーを削除する。
  delete_user : async (req, res) => {
    await User.deleteOne({
      _id: req.params.user_id
    }).catch(err => {
      res.send(err)
      console.error(err)
    })
    return res.json({ message: "Successfully deleted"})
  }
}