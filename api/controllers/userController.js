const mongoose = require("mongoose")
const User = mongoose.model("Users")

// 全てのタスクを取得する。
exports.all_tasks = function(req, res) {
  User.find({}, function(err, task) {
    if (err) res.send(err)
    res.json(task)
  })
}

// 新しいタスクを作成する。
exports.create_task = function(req, res) {
  var new_task = new User(req.body);
  new_task.save(function(err, task) {
    if (err) res.send(err)
    res.json(task)
  })
};

// 特定のタスクを取得する。
exports.load_task = function(req, res) {
  User.findById(req.params.taskId, function(err, task) {
    if (err) res.send(err)
    res.json(task)
  });
};

// 特定のタスクを更新する。
exports.update_task = function(req, res) {
  User.findOneAndUpdate(
    { _id: req.params.taskId },
    req.body,
    { new: true },
    function(err, task) {
      if (err) res.send(err)
      res.json(task)
    }
  );
};

// 特定のタスクを削除する。
exports.delete_task = function(req, res) {
  User.remove(
    {
      _id: req.params.taskId
    },
    function(err, task) {
      if (err) res.send(err);
      res.json({ message: "Task successfully deleted" });
    }
  )
}