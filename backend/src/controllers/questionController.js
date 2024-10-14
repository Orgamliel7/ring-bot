const { findRelatedQuestion } = require('../services/questionService');

exports.getAnswer = (req, res) => {
    const { userQuestion } = req.body;
    console.log('Received question:', userQuestion); // Log the received question

    const result = findRelatedQuestion(userQuestion);
    console.log('Returning result:', result); // Log the response

    res.json(result); // Ensure you are returning the full object
};

