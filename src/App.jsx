// import React from 'react';
// // import TextExtractor from './components/TextExtractor';
// // import Tavily from './components/Tavily';
// import Try2 from './components/Try2';

// function App() {
//   return (
//     <div className="App">
//       {/* <Tavily /> */}
//       <Try2 />

      
//       {/* <TextExtractor /> */}
//     </div>
//   );
// }

// export default App;

//------------------------------------------------------------------------------------------

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Homepage'; // Import HomePage component
import Try2 from './components/Try2';
import Image from './components/Image';
import Facts2 from './components/Facts2'; 
import Chat from './components/Chat';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* HomePage is the default route */}
        <Route path="/try-toy" element={<Try2 />} /> {/* Try2 route */}
        <Route path="/toy-image" element={<Image />} /> {/* Try2 route */}
        <Route path="/facts" element={<Facts2 />} /> 
        <Route path="/chat" element={<Chat />} /> 

      </Routes>
    </Router>
  );
}

export default App;

//------------------------------------------------------------------------------------------


// import React, { useState } from 'react';
// import axios from 'axios';

// const ExtractText = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [extractedText, setExtractedText] = useState('');
//   const [error, setError] = useState('');

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleUpload = async () => {
//     if (!selectedFile) {
//       setError('Please select an image file');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('image', selectedFile);

//     try {
//       const response = await axios.post('http://127.0.0.1:5000/extract-text', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       setExtractedText(response.data.text);
//       setError('');
//     } catch (error) {
//       setError('Failed to extract text. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <h1>Text Extraction using Tesseract</h1>
//       <input type="file" accept="image/*" onChange={handleFileChange} />
//       <button onClick={handleUpload}>Extract Text</button>
      
//       {error && <p style={{ color: 'red' }}>{error}</p>}
      
//       {extractedText && (
//         <div>
//           <h2>Extracted Text:</h2>
//           <textarea value={extractedText} readOnly rows="10" cols="50" />
//         </div>
//       )}
//     </div>
//   );
// };

// export default ExtractText;


// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [imageFile, setImageFile] = useState(null);
//   const [extractedText, setExtractedText] = useState('');
//   const [claimInput, setClaimInput] = useState('');
//   const [productName, setProductName] = useState('');
//   const [analysis, setAnalysis] = useState(null);
//   const [newsStatus, setNewsStatus] = useState(null);

//   const handleFileChange = (e) => {
//     setImageFile(e.target.files[0]);
//   };

//   const handleExtractText = async () => {
//     if (!imageFile) {
//       alert('Please select an image file.');
//       return;
//     }
//     const formData = new FormData();
//     formData.append('image', imageFile);

//     try {
//       const response = await axios.post('http://localhost:5000/extract_text', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });
//       setExtractedText(response.data.text);
//     } catch (error) {
//       console.error('Error extracting text:', error);
//     }
//   };

//   const handleAnalyzeClaim = async () => {
//     if (!extractedText || !claimInput) {
//       alert('Please provide both extracted text and a claim for analysis.');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:5000/claim_analyser', {
//         extractedText,
//         userInput: claimInput,
//         productName,
//       });
//       setAnalysis(response.data.analysis);
//       setNewsStatus(response.data.newsStatus);
//     } catch (error) {
//       console.error('Error analyzing claim:', error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//       <div className="container mx-auto max-w-md bg-white p-6 rounded shadow">
//         <h1 className="text-xl font-bold mb-4">Claim Analyser</h1>

//         {/* Image Upload */}
//         <div className="mb-4">
//           <label className="block mb-2 text-sm font-medium text-gray-700">Upload Image</label>
//           <input type="file" onChange={handleFileChange} className="w-full px-3 py-2 border rounded" />
//           <button onClick={handleExtractText} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
//             Extract Text
//           </button>
//         </div>

//         {/* Display Extracted Text */}
//         {extractedText && (
//           <div className="mb-4">
//             <h2 className="text-lg font-semibold">Extracted Text:</h2>
//             <p className="p-2 border rounded">{extractedText}</p>
//           </div>
//         )}

//         {/* Claim Analysis */}
//         <div className="mb-4">
//           <label className="block mb-2 text-sm font-medium text-gray-700">Claim to Verify</label>
//           <input
//             type="text"
//             value={claimInput}
//             onChange={(e) => setClaimInput(e.target.value)}
//             className="w-full px-3 py-2 border rounded"
//             placeholder="Enter product claim"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block mb-2 text-sm font-medium text-gray-700">Product Name (Optional)</label>
//           <input
//             type="text"
//             value={productName}
//             onChange={(e) => setProductName(e.target.value)}
//             className="w-full px-3 py-2 border rounded"
//             placeholder="Enter product name"
//           />
//         </div>

//         <button onClick={handleAnalyzeClaim} className="w-full px-4 py-2 bg-green-500 text-white rounded">
//           Analyze Claim
//         </button>

//         {/* Display Claim Analysis */}
//         {analysis && (
//           <div className="mt-6">
//             <h2 className="text-lg font-semibold">Analysis Results:</h2>
//             <div className="p-4 bg-gray-50 rounded border">
//               <p><strong>Claim:</strong> {analysis.claim}</p>
//               <p><strong>Claim Accuracy:</strong> {analysis.claimAccuracy}</p>
//               <p><strong>Ingredient Review:</strong> {analysis.ingredientReview}</p>
//               <p><strong>Nutritional Facts Review:</strong> {analysis.nutritionalFactsReview}</p>
//               <p><strong>Overall Observation:</strong> {analysis.overallObservation}</p>
//               <p><strong>Conclusion:</strong> {analysis.conclusion}</p>
//             </div>
//           </div>
//         )}

//         {/* Display News Results */}
//         {newsStatus && (
//           <div className="mt-6">
//             <h2 className="text-lg font-semibold">Related News:</h2>
//             <pre className="p-2 bg-gray-50 border rounded">{JSON.stringify(newsStatus, null, 2)}</pre>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;




// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [imageFile, setImageFile] = useState(null);
//   const [extractedText, setExtractedText] = useState('');
//   const [claimInput, setClaimInput] = useState('');
//   const [productName, setProductName] = useState('');
//   const [analysis, setAnalysis] = useState(null);
//   const [newsStatus, setNewsStatus] = useState(null);

//   const handleFileChange = (e) => {
//     setImageFile(e.target.files[0]);
//   };

//   const handleExtractText = async () => {
//     if (!imageFile) {
//       alert('Please select an image file.');
//       return;
//     }
//     const formData = new FormData();
//     formData.append('image', imageFile);

//     try {
//       const response = await axios.post('http://localhost:5000/extract_text', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });
//       setExtractedText(response.data.text);
//     } catch (error) {
//       console.error('Error extracting text:', error);
//     }
//   };

//   const handleAnalyzeClaim = async () => {
//     if (!extractedText || !claimInput) {
//       alert('Please provide both extracted text and a claim for analysis.');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:5000/claim_analyser', {
//         extractedText,
//         userInput: claimInput,
//         productName,
//       });
//       setAnalysis(response.data.analysis);
//       setNewsStatus(response.data.newsStatus);
//     } catch (error) {
//       console.error('Error analyzing claim:', error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#00bf63] flex">
//   {/* Sidebar */}
//   <div className="w-1/4 p-4 bg-[#00bf63] text-white flex flex-col items-center">
//     <img 
//       src="/ll.png" 
//       alt="Consume Wisely Logo" 
//       className="mb-6 w-60 h-auto" // Increased width for a better logo display
//     />

//     {/* Image Upload Section */}
//     <div className="mb-4 w-full">
//       <label className="w-full block bg-white text-green-700 font-semibold px-4 py-2 rounded-lg cursor-pointer text-center hover:bg-green-100 transition duration-300">
//         Upload image
//         <input
//           type="file"
//           onChange={handleFileChange}
//           className="hidden"
//         />
//       </label>
      
//       <button
//         onClick={handleExtractText}
//         className="w-full mt-4 px-4 py-2 bg-[#c1ff72] text-green-800 font-bold rounded-lg shadow-lg hover:bg-green-400 transition duration-300"
//       >
//         Extract label
//       </button>
//     </div>

//     {/* Extracted Text Display */}
//     <div className="bg-white text-gray-800 rounded-lg p-4 w-full flex-1 shadow-lg overflow-y-scroll">
//       <h2 className="text-gray-500 text-sm mb-2">Extracted label text with scrollbar</h2>
//       <p>{extractedText}</p>
//     </div>
//   </div>


//       {/* Main Content */}
//       <div className="w-3/4 p-6 bg-white">
//         {/* Header Links */}
//         <div className="flex justify-end space-x-6 mb-6">
//           <a href="#" className="text-green-600">AI Experts</a>
//           <a href="#" className="text-green-600">Learn Healthy</a>
//           <a href="#" className="text-green-600">Products in News</a>
//         </div>

//         {/* Claim Analysis Input Section */}
//         <div className="flex items-center space-x-4 mb-6">
//           <input
//             type="text"
//             value={productName}
//             onChange={(e) => setProductName(e.target.value)}
//             placeholder="Product Name"
//             className="w-1/4 px-3 py-2 border border-green-600 rounded"
//           />
//           <input
//             type="text"
//             value={claimInput}
//             onChange={(e) => setClaimInput(e.target.value)}
//             placeholder="Enter the claim"
//             className="w-2/4 px-3 py-2 border border-green-600 rounded"
//           />
//           <button
//             onClick={handleAnalyzeClaim}
//             className="px-4 py-2 bg-green-500 text-white rounded"
//           >
//             Check
//           </button>
//         </div>

//         {/* Scrollable Analysis Results Section */}
//         <div className="flex space-x-4">
//           <div className="w-3/3 p-4 border border-green-600 rounded overflow-y-scroll">
//             <h2 className="text-gray-500">Scrollable bar with clean information</h2>
//             {analysis && (
//               <div>
//                 <p><strong>Claim:</strong> {analysis.claim}</p>
//                 <p><strong>Claim Accuracy:</strong> {analysis.claimAccuracy}</p>
//                 <p><strong>Ingredient Review:</strong> {analysis.ingredientReview}</p>
//                 <p><strong>Nutritional Facts Review:</strong> {analysis.nutritionalFactsReview}</p>
//                 <p><strong>Overall Observation:</strong> {analysis.overallObservation}</p>
//                 <p><strong>Conclusion:</strong> {analysis.conclusion}</p>
//               </div>
//             )}
//           </div>

//           {/* Display News Results */}
//             {newsStatus && newsStatus.length > 0 ? (
//               <div className="mt-0">
//                 <h2 className="text-lg font-semibold mb-2">Related News:</h2>
//                 <div className="space-y-4">
//                   {newsStatus.map((newsItem, index) => (
//                     <div key={index} className="p-4 bg-gray-50 border rounded">
//                       <p className="text-gray-800">{newsItem.content}</p>
//                       <a href={newsItem.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
//                         Read more
//                       </a>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ) : (
//               <div className="mt-6">
//                 <h2 className="text-lg font-semibold">Related News:</h2>
//                 <p>No recent news available for this product.</p>
//               </div>
//             )}

//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;




////////////////////////

// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [imageFile, setImageFile] = useState(null);
//   const [extractedText, setExtractedText] = useState('');
//   const [claimInput, setClaimInput] = useState('');
//   const [productName, setProductName] = useState('');
//   const [analysis, setAnalysis] = useState(null);
//   const [newsStatus, setNewsStatus] = useState(null);
//   const [isUploading, setIsUploading] = useState(false);
//   const [isExtracting, setIsExtracting] = useState(false);

//   const handleFileChange = (e) => {
//     setImageFile(e.target.files[0]);
//     setIsUploading(true);

//     setTimeout(() => {
//       setIsUploading(false);
//     }, 1000);
//   };

//   const handleExtractText = async () => {
//     if (!imageFile) {
//       alert('Please select an image file.');
//       return;
//     }
//     const formData = new FormData();
//     formData.append('image', imageFile);

//     setIsExtracting(true);

//     try {
//       const response = await axios.post('http://localhost:5000/extract_text', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });
//       setExtractedText(response.data.text);
//     } catch (error) {
//       console.error('Error extracting text:', error);
//     } finally {
//       setIsExtracting(false);
//     }
//   };

//   const handleAnalyzeClaim = async () => {
//     if (!extractedText || !claimInput) {
//       alert('Please provide both extracted text and a claim for analysis.');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:5000/claim_analyser', {
//         extractedText,
//         userInput: claimInput,
//         productName,
//       });
//       setAnalysis(response.data.analysis);
//       setNewsStatus(response.data.newsStatus);
//     } catch (error) {
//       console.error('Error analyzing claim:', error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#00bf63] flex flex-col md:flex-row">
//       {/* Sidebar */}
//       <div className="md:w-1/4 w-full p-4 bg-[#00bf63] text-white flex flex-col items-center">
//         <img 
//           src="/ll.png" 
//           alt="Consume Wisely Logo" 
//           className="mb-6 w-60 h-auto" 
//         />

//         {/* Image Upload Section */}
//         <div className="mb-4 w-full">
//           <label className="w-full block bg-white text-green-700 font-semibold px-4 py-2 rounded-lg cursor-pointer text-center hover:bg-green-100 transition duration-300">
//             Upload image
//             <input
//               type="file"
//               onChange={handleFileChange}
//               className="hidden"
//             />
//           </label>
          
//           {isUploading && <p className="text-yellow-300 mt-2">Image has been uploaded!</p>}
          
//           <button
//             onClick={handleExtractText}
//             className="w-full mt-4 px-4 py-2 bg-[#c1ff72] text-green-800 font-bold rounded-lg shadow-lg hover:bg-green-400 transition duration-300"
//           >
//             Extract label
//           </button>

//           {isExtracting && (
//             <div className="flex items-center mt-2">
//               <div className="spinner-border animate-spin inline-block w-4 h-4 border-2 rounded-full text-white mr-2"></div>
//               <span className="text-yellow-300">Extracting text, please wait...</span>
//             </div>
//           )}
//         </div>

//         {/* Extracted Text Display */}
//         <div className="bg-white text-gray-800 rounded-lg p-4 w-full flex-1 shadow-lg overflow-y-scroll">
//           <h2 className="text-gray-500 text-sm mb-2">Extracted label text</h2>
//           <p>{extractedText || "No text extracted yet."}</p>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="md:w-3/4 w-full p-6 bg-white">
//         {/* Header Links */}
//         <div className="flex justify-end space-x-6 mb-6">
//           <a href="#" className="text-green-600">AI Experts</a>
//           <a href="#" className="text-green-600">Learn Healthy</a>
//           <a href="#" className="text-green-600">Products in News</a>
//         </div>

//         {/* Claim Analysis Input Section */}
//         <div className="flex items-center space-x-4 mb-6">
//           <input
//             type="text"
//             value={productName}
//             onChange={(e) => setProductName(e.target.value)}
//             placeholder="Product Name"
//             className="w-1/4 px-3 py-2 border border-green-600 rounded"
//           />
//           <input
//             type="text"
//             value={claimInput}
//             onChange={(e) => setClaimInput(e.target.value)}
//             placeholder="Enter the claim"
//             className="w-3/4 px-3 py-2 border border-green-600 rounded"
//           />
//           <button
//             onClick={handleAnalyzeClaim}
//             className="px-4 py-2 bg-green-500 text-white rounded"
//           >
//             Check
//           </button>
//         </div>

//         {/* Scrollable Analysis Results Section */}
//         <div className="flex space-x-4">
//           <div className="w-full p-4 border border-green-600 rounded overflow-y-scroll">
//             <h2 className="text-gray-500">Analysis Results</h2>
//             {analysis ? (
//               <div>
//                 <p><strong>Claim:</strong> {analysis.claim}</p>
//                 <p><strong>Claim Accuracy:</strong> {analysis.claimAccuracy}</p>
//                 <p><strong>Ingredient Review:</strong> {analysis.ingredientReview}</p>
//                 <p><strong>Nutritional Facts Review:</strong> {analysis.nutritionalFactsReview}</p>
//                 <p><strong>Overall Observation:</strong> {analysis.overallObservation}</p>
//                 <p><strong>Conclusion:</strong> {analysis.conclusion}</p>
//               </div>
//             ) : (
//               <p>No analysis available.</p>
//             )}
//           </div>

//           {/* Display News Results */}
//           {newsStatus && newsStatus.length > 0 ? (
//             <div className="w-full p-4 border border-green-600 rounded overflow-y-scroll">
//               <h2 className="text-gray-500">Related News</h2>
//               {newsStatus.map((newsItem, index) => (
//                 <div key={index} className="p-4 bg-gray-50 border rounded mb-4">
//                   <p className="text-gray-800">{newsItem.content}</p>
//                   <a href={newsItem.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
//                     Read more
//                   </a>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="w-full mt-6">
//               <h2 className="text-lg font-semibold">Related News</h2>
//               <p>No recent news available for this product.</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
