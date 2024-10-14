const natural = require('natural');
const { WordTokenizer } = natural;
const tokenizer = new WordTokenizer();
const sw = require('stopword');

const questions = [
    { id: 1, question: "How to enable/disable a NUC?", answer: "To enable or disable a NUC, go to the settings and toggle the status." },
    { id: 2, question: "What to do if a NUC is not responding?", answer: "Restart the NUC by holding the power button for 10 seconds." },
    // Add more questions here
];

function extractKeywords(text) {
    const tokens = tokenizer.tokenize(text.toLowerCase());
    return sw.removeStopwords(tokens);
}

function preprocessQuestions() {
    return questions.map(q => ({
        ...q,
        keywords: extractKeywords(q.question)
    }));
}

const processedQuestions = preprocessQuestions();

exports.findRelatedQuestion = (userQuestion) => {
    const userKeywords = extractKeywords(userQuestion);
    
    let bestMatch = null;
    let highestScore = 0;

    processedQuestions.forEach(q => {
        const matchingKeywords = userKeywords.filter(keyword => q.keywords.includes(keyword));
        const score = matchingKeywords.length / Math.max(userKeywords.length, q.keywords.length);

        if (score > highestScore) {
            highestScore = score;
            bestMatch = q;
        }
    });

    const threshold = 0.3; // Adjust this value based on your needs
    if (bestMatch && highestScore >= threshold) {
        return { question: bestMatch.question, answer: bestMatch.answer };
    } else {
        return { question: "Sorry, no related questions found.", answer: null };
    }
};