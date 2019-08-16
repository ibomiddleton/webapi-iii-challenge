const express = 'express';
const router = express.Router();
const Hubs = require('./users/userDb.js');

router.use((req, res, next) => {
    console.log('WOW');
    next();
  });

router.post('/', (req, res) => {

});

router.post('/:id/posts', validateUser, (req, res) => {

});

router.get('/:id', validateUserId, (req, res) => {
    res.status(200).json(req.hub);
  });

router.get('/:id', (req, res) => {

});

router.get('/:id/posts', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

//custom middleware

function validateUserId(req, res, next) {
    
    const { id } = req.params;
    
    Hubs.findById(id)
    .then(user => {
        if (user) {
        req.user = user;
        next();
        } else {
        errorHelper(400, "invalid user id", res);
        }
    })
    .catch(error => {
        // log error
        console.log(error);
        res.status(500).json({
        message: 'Error processing request'
        });
    });
}

function validateUser(req, res, next) {
    const { name } = req.body;
    if (!name) {
      errorHelper(400, "missing user data", res);
      next();
    } else {
      next();
    }
  };  

function validatePost(req, res, next) {

};

module.exports = router;
