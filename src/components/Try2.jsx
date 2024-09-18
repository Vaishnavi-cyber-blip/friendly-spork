import React, { useState } from 'react';
import axios from 'axios';
 // Adjust the path based on where you store the logo

function Try2() {
  const [claim, setClaim] = useState('');
  const [nutritionText, setNutritionText] = useState('');
  const [response, setResponse] = useState({
    claim: "",
    claimAccuracy: "",
    ingredientReview: "",
    nutritionalFactsReview: "",
    overallObservation: "",
    conclusion: "",
  });
  const [loading, setLoading] = useState(false);

  const handleAnalyzeClaim = async () => {
    setLoading(true);
    try {
      const result = await axios.post('https://consume-2.onrender.com/analyze_claim', {
        claim: claim,
        nutritionText: nutritionText,
      });
      console.log('Analysis result:', result.data);
      const analysis = result.data.analysis;

      setResponse({
        claim: analysis.claim || '',
        claimAccuracy: analysis.claimAccuracy || '',
        ingredientReview: analysis.ingredientReview || '',
        nutritionalFactsReview: analysis.nutritionalFactsReview || '',
        overallObservation: analysis.overallObservation || '',
        conclusion: analysis.conclusion || '',
      });
    } catch (error) {
      console.error('Error analyzing claim:', error);
    }
    setLoading(false);
  };

  return (
    <div className="container  mx-auto p-4">
      {/* Replace the heading with the logo */}
      <div className="flex justify-center mb-4">
      <img src="/ll.png" alt="Logo" className="w-48 h-auto" />

      </div>

      {/* User Input for the claim */}
      <textarea
        value={claim}
        onChange={(e) => setClaim(e.target.value)}
        placeholder="Enter the product claim"
        className="border p-2 rounded w-full mb-4"
      />

      {/* User Input for the nutrition text */}
      <textarea
        value={nutritionText}
        onChange={(e) => setNutritionText(e.target.value)}
        placeholder="Enter the nutrition text"
        className="border p-2 rounded w-full mb-4"
      />

      <button
        onClick={handleAnalyzeClaim}
        className="bg-green-500 text-white p-2 rounded mb-4"
      >
        {loading ? 'Analyzing...' : 'Analyze Claim'}
      </button>

      {/* Display the interactive analysis */}
      {response.claim && (
        <div className="mt-4 p-4 bg-gray-100 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Analysis:</h2>

          <div className="mb-4">
            <h3 className="font-semibold">🔍 Claim:</h3>
            <p>{response.claim}</p>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold">🔍 Claim Accuracy:</h3>
            <p>{response.claimAccuracy}</p>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold">🧪 Ingredient Review:</h3>
            <p>{response.ingredientReview}</p>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold">📊 Nutritional Facts Review:</h3>
            <p>{response.nutritionalFactsReview}</p>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold">🔍 Overall Observation:</h3>
            <p>{response.overallObservation}</p>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold">⚖️ Conclusion:</h3>
            <p>{response.conclusion}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Try2;
