module.exports = function(app) {
  const userList = require('../controllers/userController')

  app.route('/users')
    .get(userList.all_tasks)
    .post(userList.create_task)


  app.route('/tasks/:taskId')
    .get(userList.load_task)
    .put(userList.update_task)
    .delete(userList.delete_task)
};