import React, { useState } from 'react';
import QuestionForm from './components/QuestionForm';
import Answer from './components/Answer';
import { askQuestion } from './services/api';
import './App.css';

function App() {
    const [answer, setAnswer] = useState('');

    const handleSubmit = async (question) => {
        try {
            const result = await askQuestion(question);
            if (result.answer) {
                setAnswer(result.answer);
            } else {
                setAnswer("Sorry, I don't have an answer for that.");
            }
        } catch (error) {
            console.error('Error fetching answer:', error);
            setAnswer('Error: Unable to get an answer at this time.');
        }
    };
    

    return (
        <div className="App">
            <h1>Welcome to RingBot!</h1>
            <QuestionForm onSubmit={handleSubmit} />
            <Answer answer={answer} />
        </div>
    );
}

export default App;