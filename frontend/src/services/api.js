import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const askQuestion = async (question) => {
    try {
        const response = await axios.post(`${API_URL}/ask`, { userQuestion: question });
        return response.data;
    } catch (error) {
        console.error('Error asking question:', error);
        throw error;
    }
};