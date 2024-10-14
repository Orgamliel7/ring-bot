const { findRelatedQuestion } = require('./src/services/questionService'); 

// Test inputs
const testQuestions = [
    "How to enable nuc?",
    "How can I enable a NUC?",
    "What are the steps to disable the NUC?",
    "Enable or disable the NUC settings",
    "How do I turn on or off a NUC?",
    "Turning on/off the NUC",
    "Ways to enable the NUC",
    "How to disable nuc",
    "Guide to enable/disable a NUC",
    "Instructions to enable nuc",
    "enable nuc"
];

// Execute all test inputs and print the result
testQuestions.forEach((question, index) => {
    const result = findRelatedQuestion(question);
    console.log(`Test ${index + 1}:`);
    console.log(`Input Question: ${question}`);
    console.log(`Matched Question: ${result.question}`);
    console.log(`Answer: ${result.answer}`);
    console.log('--------------------------------------');
});
