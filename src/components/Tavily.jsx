// // App.js
// import React, { useState } from 'react';
// // import './App.css';

// function App() {
//   const [query, setQuery] = useState('');
//   const [news, setNews] = useState([]);
//   const [error, setError] = useState('');

//   const handleSearch = async () => {
//     try {
//         const response = await fetch(`http://127.0.0.1:5000/api/search?query=${query}`);
//       const data = await response.json();
      
//       if (response.ok) {
//         setNews(data.results);
//         setError('');
//       } else {
//         setError(data.error);
//         setNews([]);
//       }
//     } catch (err) {
//       setError('Failed to fetch news');
//     }
//   };

//   return (
//     <div className="App">
//       <h1>News Search</h1>
//       <input 
//         type="text" 
//         value={query} 
//         onChange={(e) => setQuery(e.target.value)} 
//         placeholder="Enter a search term" 
//       />
//       <button onClick={handleSearch}>Search</button>

//       {error && <p className="error">{error}</p>}

//       <div className="news-results">
//         {news.map((item, index) => (
//           <div key={index} className="news-item">
//             <p>{item.content}</p>
//             <a href={item.url} target="_blank" rel="noopener noreferrer">Read more</a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [prompt, setPrompt] = useState('');
//   const [response, setResponse] = useState({ intro: '', conclusion: '' });
//   const [loading, setLoading] = useState(false);

//   const handleGenerate = async () => {
//     setLoading(true);
//     try {
//       const result = await axios.post('http://localhost:5000/generate_story', {
//         prompt: prompt
//       });

//       const generatedText = result.data.text;

//       // Assuming the response has introduction and conclusion clearly marked
//       const introMatch = generatedText.match(/Introduction:(.*)Conclusion:/s);
//       const conclusionMatch = generatedText.match(/Conclusion:(.*)$/s);

//       if (introMatch && conclusionMatch) {
//         setResponse({
//           intro: introMatch[1].trim(),
//           conclusion: conclusionMatch[1].trim(),
//         });
//       }
//     } catch (error) {
//       console.error("Error generating text:", error);
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-xl font-bold mb-4">Real-Time Essay Generator</h1>

//       {/* User Input for the prompt */}
//       <input
//         type="text"
//         value={prompt}
//         onChange={(e) => setPrompt(e.target.value)}
//         placeholder="Enter your essay topic"
//         className="border p-2 rounded w-full mb-4"
//       />

//       <button
//         onClick={handleGenerate}
//         className="bg-blue-500 text-white p-2 rounded mb-4"
//       >
//         {loading ? 'Generating...' : 'Generate Introduction & Conclusion'}
//       </button>

//       {/* Display the generated Introduction and Conclusion */}
//       {response.intro && (
//         <div className="mt-4 p-4 bg-gray-100 rounded shadow">
//           <h2 className="text-lg font-semibold mb-2">Introduction:</h2>
//           <p>{response.intro}</p>
//         </div>
//       )}

//       {response.conclusion && (
//         <div className="mt-4 p-4 bg-gray-100 rounded shadow">
//           <h2 className="text-lg font-semibold mb-2">Conclusion:</h2>
//           <p>{response.conclusion}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


// import React, { useState } from 'react';
// import axios from 'axios';
//  // Adjust the path based on where you store the logo

// function App() {
//   const [claim, setClaim] = useState('');
//   const [nutritionText, setNutritionText] = useState('');
//   const [response, setResponse] = useState({
//     claim: "",
//     claimAccuracy: "",
//     ingredientReview: "",
//     nutritionalFactsReview: "",
//     overallObservation: "",
//     conclusion: "",
//   });
//   const [loading, setLoading] = useState(false);

//   const handleAnalyzeClaim = async () => {
//     setLoading(true);
//     try {
//       const result = await axios.post('http://localhost:5000/analyze_claim', {
//         claim: claim,
//         nutritionText: nutritionText,
//       });
//       const analysis = result.data.analysis;

//       setResponse({
//         claim: analysis.claim || '',
//         claimAccuracy: analysis.claimAccuracy || '',
//         ingredientReview: analysis.ingredientReview || '',
//         nutritionalFactsReview: analysis.nutritionalFactsReview || '',
//         overallObservation: analysis.overallObservation || '',
//         conclusion: analysis.conclusion || '',
//       });
//     } catch (error) {
//       console.error('Error analyzing claim:', error);
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="container  mx-auto p-4">
//       {/* Replace the heading with the logo */}
//       <div className="flex justify-center mb-4">
//       <img src="/ll.png" alt="Logo" className="w-48 h-auto" />

//       </div>

//       {/* User Input for the claim */}
//       <textarea
//         value={claim}
//         onChange={(e) => setClaim(e.target.value)}
//         placeholder="Enter the product claim"
//         className="border p-2 rounded w-full mb-4"
//       />

//       {/* User Input for the nutrition text */}
//       <textarea
//         value={nutritionText}
//         onChange={(e) => setNutritionText(e.target.value)}
//         placeholder="Enter the nutrition text"
//         className="border p-2 rounded w-full mb-4"
//       />

//       <button
//         onClick={handleAnalyzeClaim}
//         className="bg-green-500 text-white p-2 rounded mb-4"
//       >
//         {loading ? 'Analyzing...' : 'Analyze Claim'}
//       </button>

//       {/* Display the interactive analysis */}
//       {response.claim && (
//         <div className="mt-4 p-4 bg-gray-100 rounded shadow">
//           <h2 className="text-lg font-semibold mb-2">Analysis:</h2>

//           <div className="mb-4">
//             <h3 className="font-semibold">🔍 Claim:</h3>
//             <p>{response.claim}</p>
//           </div>

//           <div className="mb-4">
//             <h3 className="font-semibold">🔍 Claim Accuracy:</h3>
//             <p>{response.claimAccuracy}</p>
//           </div>

//           <div className="mb-4">
//             <h3 className="font-semibold">🧪 Ingredient Review:</h3>
//             <p>{response.ingredientReview}</p>
//           </div>

//           <div className="mb-4">
//             <h3 className="font-semibold">📊 Nutritional Facts Review:</h3>
//             <p>{response.nutritionalFactsReview}</p>
//           </div>

//           <div className="mb-4">
//             <h3 className="font-semibold">🔍 Overall Observation:</h3>
//             <p>{response.overallObservation}</p>
//           </div>

//           <div className="mb-4">
//             <h3 className="font-semibold">⚖️ Conclusion:</h3>
//             <p>{response.conclusion}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
////////////////////////////////////////////////////////////////////////


import React, { useState } from 'react';
import axios from 'axios';
 // Adjust the path based on where you store the logo

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [extractedText, setExtractedText] = useState('');
  const [claim, setClaim] = useState('');
  const [nutritionText, setNutritionText] = useState('');
  const [uploadStatus, setUploadStatus] = useState('');
  const [response, setResponse] = useState({
    claim: "",
    claimAccuracy: "",
    ingredientReview: "",
    nutritionalFactsReview: "",
    overallObservation: "",
    conclusion: "",
  });
  
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      setUploadStatus(`Image "${file.name}" uploaded successfully`);
    } else {
      setUploadStatus('No image uploaded');
    }
  };

  const handleExtractText = async () => {
    if (selectedFile) {
      setLoading(true);
      const formData = new FormData();
      formData.append('image', selectedFile);

      try {
        const response = await axios.post('http://localhost:5000/extract_text', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        setExtractedText(response.data.text);
      } catch (error) {
        console.error('Error extracting text:', error);
        setExtractedText('Failed to extract text');
      } finally {
        setLoading(false);
      }
    } else {
      setUploadStatus('Please upload an image first');
    }
  };

  const handleAnalyzeClaim = async () => {
    setLoading(true);
    try {
      const result = await axios.post('http://localhost:5000/analyze_claim', {
        claim: claim,
        nutritionText: nutritionText,
      });
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

    <div className="flex">
      {/* Left Sidebar */}
      <div className="bg-[#00bf63] text-white p-6 w-[25%] fixed top-0 left-0 h-full flex flex-col">
        <img 
          src="./ll.png" 
          alt="Consume Wisely Logo" 
          className="mb-6" 
        />

        <div className="flex flex-col mb-6">
          <label className="bg-white text-green-700 p-4 rounded-lg shadow-lg text-center cursor-pointer hover:bg-green-100 transition duration-300 ease-in-out">
            Upload image
            <input 
              type="file" 
              onChange={handleFileChange} 
              className="hidden"
              disabled={loading}
            />
          </label>
          <button 
            onClick={handleExtractText} 
            className="mt-4 px-4 py-2 bg-[#c1ff72] text-green-800 rounded-lg shadow-lg hover:bg-green-500 transition duration-300 ease-in-out"
            disabled={loading}
          >
            {loading ? <Spinner /> : 'Extract label'}
          </button>
        </div>

        <div className="text-green-200 mb-4">
          <p>{uploadStatus}</p>
        </div>

        <div className="bg-white text-gray-800 p-4 rounded-lg shadow-lg overflow-y-auto flex-grow">
          <p>{extractedText}</p>
        </div>
      </div>

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
    </div>
  );
}

export default App;

