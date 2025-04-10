const express = require('express');
const router = express.Router();
const{body}=require('express-validator');

router.post('/register', [
    body('email').isEmail().withMessage('Please enter a valid email address.'),
    body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long.')
])


module.exports = router;

