const express = require('express');
const router = express.Router(); 
const messageController = require('../controllers/messageController');

router.get('/', messageController.getMessages, (req, res) => {
  res.status(200).send(res.locals.messages);
})


// router.post('/', (req, res) => {
//   res.status(200).send('POST REQUEST SUCCESSFUL')
// })

// router.put('/', (req, res) => {
//   res.status(200).send('PUT REQUEST SUCCESSFUL')
// })


// router.delete('/:id', (req, res) => {
//   res.status(200).send('DELETE REQUEST SUCCESSFUL')
// })

module.exports = router;