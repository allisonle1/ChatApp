const db = require('../models/model');
const messageController = {};

messageController.getMessages = (req, res, next) => {
  const messageQuery = "SELECT * FROM messages"
  db.query(messageQuery)
    .then(data => {
      res.locals.messages = data.rows;
      return next();
    })
    .catch(err => {
      // console.log(err);
      return next(err);
    })
}

module.exports = messageController;