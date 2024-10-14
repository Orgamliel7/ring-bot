import React, { useState } from 'react';

const QuestionForm = ({ onSubmit }) => {
    const [question, setQuestion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(question);
        setQuestion('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask a question..."
                required
            />
            <button type="submit">Ask</button>
        </form>
    );
};

export default QuestionForm;