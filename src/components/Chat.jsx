import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [userInput, setUserInput] = useState('');
  const [role, setRole] = useState('nutritionist');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async () => {
    setLoading(true);
    let prompt;

    // Define different prompts based on the role
    if (role === 'nutritionist') {
      prompt = `You are a professional nutritionist. Answer the user's query: "${userInput}" with detailed nutritional advice.`;
    } else if (role === 'dietician') {
      prompt = `You are a certified dietician. Provide a well-informed response to the user's question: "${userInput}" based on dietary guidelines.`;
    }

    // Call to Gemini API
    try {
      const response = await axios.post('http://localhost:5000/gemini', {
        prompt,
      });
      setResponse(response.data.result); // Assuming response is structured this way
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      setResponse('An error occurred while fetching the response.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#00bf63] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Health Expert Chatbot</h1>

        {/* Dropdown to select between Nutritionist and Dietician */}
        <div className="mb-4">
          <label className="block text-gray-700">Choose Role:</label>
          <select
            value={role}
            onChange={handleRoleChange}
            className="w-full mt-2 px-3 py-2 border rounded"
          >
            <option value="nutritionist">Nutritionist</option>
            <option value="dietician">Dietician</option>
          </select>
        </div>

        {/* Input for user's question */}
        <div className="mb-4">
          <label className="block text-gray-700">Ask a Question:</label>
          <textarea
            value={userInput}
            onChange={handleInputChange}
            placeholder="Type your health-related question here..."
            className="w-full mt-2 px-3 py-2 border rounded"
          />
        </div>

        {/* Submit button */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          {loading ? 'Loading...' : 'Submit'}
        </button>

        {/* Response Display */}
        <div className="mt-4">
          {response && (
            <div className="p-4 bg-gray-100 rounded">
              <h2 className="text-lg font-semibold">Response:</h2>
              <p>{response}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
