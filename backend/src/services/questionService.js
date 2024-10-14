const questions = [
    { id: 1, question: "How to enable/disable a NUC?", answer: "To disable a NUC, go to the settings and toggle the status." },
    { id: 2, question: "What to do if a NUC is not responding?", answer: "Restart the NUC by holding the power button for 10 seconds." },
];

exports.findRelatedQuestion = (userQuestion) => {
    const foundQuestion = questions.find(q => userQuestion.toLowerCase().includes(q.question.toLowerCase()));
    
    if (foundQuestion) {
        return { question: foundQuestion.question, answer: foundQuestion.answer };
    } else {
        return { question: "Sorry, no related questions found.", answer: null };
    }
};