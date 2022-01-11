const express = require('express');
const router = express.Router(); 
const messageController = require('../controllers/messageController');

router.get('/', messageController.getMessages, (req, res) => {
  return res.status(200).send(res.locals.messages);
})

router.post('/', messageController.postMessage, (req, res) => {
  return res.sendStatus(200);
})

router.put('/:id', messageController.updateMessage, (req, res) => {
  return res.sendStatus(200);
})

router.delete('/:id', messageController.deleteMessage, (req, res) => {
  return res.sendStatus(200);
})

module.exports = router;