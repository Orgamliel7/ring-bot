const express = require('express');
const { getAnswer } = require('../controllers/questionController');

const router = express.Router();

router.post('/ask', getAnswer);

module.exports = router;