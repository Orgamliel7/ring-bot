import React from 'react';

const Answer = ({ answer }) => {
    if (!answer) return null;

    return (
        <div>
            <h3>Answer:</h3>
            <p>{answer}</p>
        </div>
    );
};

export default Answer;
