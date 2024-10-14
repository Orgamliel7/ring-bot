const { findRelatedQuestion } = require('../services/questionService');

exports.getAnswer = (req, res) => {
    const { userQuestion } = req.body;
    const result = findRelatedQuestion(userQuestion);
    res.json(result);
};