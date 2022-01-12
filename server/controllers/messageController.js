const db = require('../models/model');
const messageController = {};

messageController.getMessages = (req, res, next) => {
  const messageQuery = "SELECT * FROM messages";
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

messageController.postMessage = (req, res, next) => {
  const postQuery = "INSERT INTO messages (id, user_id, message) VALUES ($1, $2, $3)";
  const {id, user_id, message} = req.body;

  // console.log('POST', req.body);
  db.query(postQuery, [id, user_id, message])
    .then(data => {
      return next();
    })
    .catch(err => {
      console.log('Error', err);
      return next(err);
    })
}

messageController.updateMessage = (req, res, next) => {
  const updateQuery = "UPDATE messages SET message = $1 WHERE id = $2";
  const updatedMessage = req.body.message;
  const id = req.params.id;
  db.query(updateQuery, [updatedMessage, id]) 
    .then(data => {
      return next();
  })
    .catch(err => {
      console.log("Error", err);
      return next(err);
    })
}

messageController.deleteMessage = (req, res, next) => {
  const deleteQuery = "DELETE FROM messages WHERE id = $1";

  db.query(deleteQuery, [req.params.id])
    .then(data => {
      if(data.rowCount === 0){
        return next({message: "Message not found"});
      }
      return next();
    })
    .catch(err => {
      // console.log(err);
      return next(err);
    })
}

module.exports = messageController;