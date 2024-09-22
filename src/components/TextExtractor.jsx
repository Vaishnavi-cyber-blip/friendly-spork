// import React, { useState } from 'react';
// import axios from 'axios';

// const TextExtractor = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [extractedText, setExtractedText] = useState('');

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleExtractText = async () => {
//     if (selectedFile) {
//       const formData = new FormData();
//       formData.append('image', selectedFile);

//       try {
//         const response = await axios.post('http://localhost:5000/extract_text', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });
//         setExtractedText(response.data.text.join(' '));
//       } catch (error) {
//         console.error('Error extracting text:', error);
//         setExtractedText('Failed to extract text');
//       }
//     }
//   };

//   return (
//     <div>
//       <h2>Text Extractor</h2>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleExtractText}>Extract Text</button>
//       {extractedText && <p>Extracted Text: {extractedText}</p>}
//     </div>
//   );
// };

// export default TextExtractor;


// import React, { useState } from 'react';
// import axios from 'axios';

// const TextExtractor = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [extractedText, setExtractedText] = useState('');

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleExtractText = async () => {
//     if (selectedFile) {
//       const formData = new FormData();
//       formData.append('image', selectedFile);

//       try {
//         const response = await axios.post('http://localhost:5000/extract_text', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });
//         setExtractedText(response.data.text.join(' '));
//       } catch (error) {
//         console.error('Error extracting text:', error);
//         setExtractedText('Failed to extract text');
//       }
//     }
//   };

//   return (
//     <div>
//       <h2>Text Extractor</h2>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleExtractText}>Extract Text</button>
//       {extractedText && <p>Extracted Text: {extractedText}</p>}
//     </div>
//   );
// };

// export default TextExtractor;
//-------------------------------------------------------------------------------------------------------------------------

// import React, { useState } from 'react';
// import axios from 'axios';

// const TextExtractor = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [extractedText, setExtractedText] = useState('');

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleExtractText = async () => {
//     if (selectedFile) {
//       const formData = new FormData();
//       formData.append('image', selectedFile);

//       try {
//         const response = await axios.post('http://localhost:5000/extract_text', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });

//         setExtractedText(response.data.text); // Now always handling as a string

//       } catch (error) {
//         console.error('Error extracting text:', error);
//         setExtractedText('Failed to extract text');
//       }
//     }
//   };

//   return (
//     <div>
//       <h2>Text Extractor</h2>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleExtractText}>Extract Text</button>
//       {extractedText && <p>Extracted Text: {extractedText}</p>}
//     </div>
//   );
// };

// export default TextExtractor;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from 'react';
// import axios from 'axios';

// const TextExtractor = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [extractedText, setExtractedText] = useState('');
//   const [userInput, setUserInput] = useState('');
//   const [analysisResult, setAnalysisResult] = useState('');

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleExtractText = async () => {
//     if (selectedFile) {
//       const formData = new FormData();
//       formData.append('image', selectedFile);

//       try {
//         const response = await axios.post('http://localhost:5000/extract_text', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });

//         setExtractedText(response.data.text);

//       } catch (error) {
//         console.error('Error extracting text:', error);
//         setExtractedText('Failed to extract text');
//       }
//     }
//   };

//   const handleTextChange = (event) => {
//     setUserInput(event.target.value);
//   };

//   const handleAnalyzeText = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/claim_analyser', {
//         extractedText,
//         userInput,
//       });

//       setAnalysisResult(response.data.result);

//     } catch (error) {
//       console.error('Error analyzing text:', error);
//       setAnalysisResult('Failed to analyze text');
//     }
//   };

//   return (
//     <div>
//       <h2>Text Extractor</h2>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleExtractText}>Extract Text</button>
//       {extractedText && <p>Extracted Text: {extractedText}</p>}
      
//       <h3>Claim Analyzer</h3>
//       <textarea 
//         placeholder="Enter your text claim here..." 
//         value={userInput} 
//         onChange={handleTextChange}
//       />
//       <button onClick={handleAnalyzeText}>Analyze Text</button>
//       {analysisResult && <p>Analysis Result: {analysisResult}</p>}
//     </div>
//   );
// };

// export default TextExtractor;

////+++++++++++++++++++++++++++++++++++++++++++++++++

// import React, { useState } from 'react';
// import axios from 'axios';

// const TextExtractor = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [extractedText, setExtractedText] = useState('');
//   const [userInput, setUserInput] = useState('');
//   const [analysisResult, setAnalysisResult] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleExtractText = async () => {
//     if (selectedFile) {
//       setLoading(true); // Start loading
//       const formData = new FormData();
//       formData.append('image', selectedFile);

//       try {
//         const response = await axios.post('http://localhost:5000/extract_text', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });

//         setExtractedText(response.data.text);
//       } catch (error) {
//         console.error('Error extracting text:', error);
//         setExtractedText('Failed to extract text');
//       } finally {
//         setLoading(false); // Stop loading
//       }
//     }
//   };

//   const handleAnalyzeText = async () => {
//     if (extractedText && userInput) {
//       setLoading(true); // Start loading

//       try {
//         const response = await axios.post('http://localhost:5000/claim_analyser', {
//           extractedText,
//           userInput,
//         });

//         setAnalysisResult(response.data.result);
//       } catch (error) {
//         console.error('Error analyzing text:', error);
//         setAnalysisResult('Failed to analyze text');
//       } finally {
//         setLoading(false); // Stop loading
//       }
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-blue-50">
//       <h1 className="text-4xl font-bold mb-8 text-blue-700">Consume Wisely</h1>

//       <div className="flex flex-col items-center">
//         <input 
//           type="file" 
//           onChange={handleFileChange} 
//           className="mb-4 p-2 bg-gray-200 rounded-lg"
//           disabled={loading}
//         />
//         <button 
//           onClick={handleExtractText} 
//           className="mb-8 px-4 py-2 bg-blue-500 text-white rounded-lg"
//           disabled={loading}
//         >
//           Extract
//         </button>
//       </div>

//       {loading && (
//         <div className="flex justify-center items-center mb-8">
//           <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
//         </div>
//       )}

//       <div className="grid grid-cols-2 gap-8 w-3/4">
//         <div className="p-6 bg-blue-700 text-white rounded-lg">
//           <h2 className="text-lg font-semibold mb-4">Nutritional analysis (extracted text)</h2>
//           <p>{extractedText}</p>
//         </div>

//         <div className="p-6 bg-blue-700 text-white rounded-lg">
//           <h2 className="text-lg font-semibold mb-4">Claim Made by Company (Text box)</h2>
//           <textarea 
//             value={userInput} 
//             onChange={(e) => setUserInput(e.target.value)} 
//             className="w-full h-32 p-2 text-black rounded-lg"
//             disabled={loading}
//           />
//         </div>

//         <div className="col-span-2 p-6 bg-blue-700 text-white rounded-lg">
//           <h2 className="text-lg font-semibold mb-4">Claim analyser</h2>
//           <button 
//             onClick={handleAnalyzeText} 
//             className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
//             disabled={loading}
//           >
//             Analyze Claim
//           </button>
//           <p>{analysisResult}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TextExtractor;

//=============================================================

// First launch version

// import React, { useState } from 'react';
// import axios from 'axios';

// const TextExtractor = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [extractedText, setExtractedText] = useState('');
//   const [userInput, setUserInput] = useState('');
//   const [analysisResult, setAnalysisResult] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [uploadStatus, setUploadStatus] = useState('');

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     setSelectedFile(file);

//     if (file) {
//       setUploadStatus(`Image "${file.name}" uploaded successfully`);
//     } else {
//       setUploadStatus('No image uploaded');
//     }
//   };

//   const handleExtractText = async () => {
//     if (selectedFile) {
//       setLoading(true);
//       const formData = new FormData();
//       formData.append('image', selectedFile);

//       try {
//         const response = await axios.post('http://localhost:5000/extract_text', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });

//         setExtractedText(response.data.text);
//       } catch (error) {
//         console.error('Error extracting text:', error);
//         setExtractedText('Failed to extract text');
//       } finally {
//         setLoading(false);
//       }
//     } else {
//       setUploadStatus('Please upload an image first');
//     }
//   };

//   const handleAnalyzeText = async () => {
//     if (extractedText && userInput) {
//       setLoading(true);

//       try {
//         const response = await axios.post('http://localhost:5000/claim_analyser', {
//           extractedText,
//           userInput,
//         });

//         setAnalysisResult(response.data.result);
//       } catch (error) {
//         console.error('Error analyzing text:', error);
//         setAnalysisResult('Failed to analyze text');
//       } finally {
//         setLoading(false);
//       }
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-50 p-8">
//       <h1 className="text-5xl font-bold mb-12 text-indigo-700">Consume Wisely</h1>

//       <div className="flex flex-col items-center w-full max-w-lg mb-8">
//         <label 
//           className="w-full bg-indigo-100 p-4 rounded-lg shadow-lg text-center text-indigo-600 cursor-pointer hover:bg-indigo-200 transition duration-300 ease-in-out">
//           Upload Label Image...
//           <input 
//             type="file" 
//             onChange={handleFileChange} 
//             className="hidden"
//             disabled={loading}
//           />
//         </label>
//         <button 
//           onClick={handleExtractText} 
//           className="w-full mt-4 px-4 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 ease-in-out"
//           disabled={loading}
//         >
//           Extract Text
//         </button>
//         {uploadStatus && (
//           <p className={`mt-2 text-sm ${selectedFile ? 'text-green-600' : 'text-red-600'}`}>
//             {uploadStatus}
//           </p>
//         )}
//       </div>

//       {loading && (
//         <div className="flex justify-center items-center mb-8">
//           <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent border-solid rounded-full animate-spin"></div>
//         </div>
//       )}

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-5xl">
//         <div className="p-6 bg-white rounded-lg shadow-lg">
//           <h2 className="text-lg font-semibold mb-4 text-indigo-700">Nutritional Analysis (Extracted Text)</h2>
//           <p className="text-gray-700">{extractedText}</p>
//         </div>

//         <div className="p-6 bg-white rounded-lg shadow-lg">
//           <h2 className="text-lg font-semibold mb-4 text-indigo-700">Claim Made by Company</h2>
//           <textarea 
//             value={userInput} 
//             onChange={(e) => setUserInput(e.target.value)} 
//             className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
//             disabled={loading}
//           />
//         </div>

//         <div className="col-span-1 lg:col-span-2 p-6 bg-white rounded-lg shadow-lg">
//           <h2 className="text-lg font-semibold mb-4 text-indigo-700">Claim Analyzer</h2>
//           <button 
//             onClick={handleAnalyzeText} 
//             className="w-full mb-4 px-4 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 ease-in-out"
//             disabled={loading}
//           >
//             Analyze Claim
//           </button>
//           <p className="text-gray-700">{analysisResult}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TextExtractor;

//--------------------------------------------------

// Second launch version

// import React, { useState } from 'react';
// import axios from 'axios';

// const TextExtractor = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [extractedText, setExtractedText] = useState('');
//   const [userInput, setUserInput] = useState('');
//   const [analysisResult, setAnalysisResult] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [uploadStatus, setUploadStatus] = useState('');

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     setSelectedFile(file);

//     if (file) {
//       setUploadStatus(`Image "${file.name}" uploaded successfully`);
//     } else {
//       setUploadStatus('No image uploaded');
//     }
//   };

//   const handleExtractText = async () => {
//     if (selectedFile) {
//       setLoading(true);
//       const formData = new FormData();
//       formData.append('image', selectedFile);

//       try {
//         const response = await axios.post('http://localhost:5000/extract_text', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });

//         setExtractedText(response.data.text);
//       } catch (error) {
//         console.error('Error extracting text:', error);
//         setExtractedText('Failed to extract text');
//       } finally {
//         setLoading(false);
//       }
//     } else {
//       setUploadStatus('Please upload an image first');
//     }
//   };

//   const handleAnalyzeText = async () => {
//     if (extractedText && userInput) {
//       setLoading(true);

//       try {
//         const response = await axios.post('http://localhost:5000/claim_analyser', {
//           extractedText,
//           userInput,
//         });

//         setAnalysisResult(response.data.result);
//       } catch (error) {
//         console.error('Error analyzing text:', error);
//         setAnalysisResult('Failed to analyze text');
//       } finally {
//         setLoading(false);
//       }
//     }
//   };

//   return (
//     <div className="flex flex-col h-screen">

//       {/* Navigation Bar */}
//       <nav className="bg-white shadow-lg p-4">
//         <div className="container mx-auto flex justify-end">
//           <a href="#" className="text-green-600 font-semibold hover:text-green-800 mx-4">Learn Healthy</a>
//           <a href="#" className="text-green-600 font-semibold hover:text-green-800 mx-4">Products in News</a>
//         </div>
//       </nav>

//       <div className="flex flex-row flex-grow">
//         {/* Left Sidebar */}
//         <div className="bg-green-600 text-white p-6 w-1/4 flex flex-col">
//           <h1 className="text-3xl font-bold mb-6">Consume Wisely!</h1>

//           <div className="flex flex-col mb-6">
//             <label className="bg-white text-green-700 p-4 rounded-lg shadow-lg text-center cursor-pointer hover:bg-green-100 transition duration-300 ease-in-out">
//               Upload image
//               <input 
//                 type="file" 
//                 onChange={handleFileChange} 
//                 className="hidden"
//                 disabled={loading}
//               />
//             </label>
//             <button 
//               onClick={handleExtractText} 
//               className="mt-4 px-4 py-2 bg-green-400 text-green-800 rounded-lg shadow-lg hover:bg-green-500 transition duration-300 ease-in-out"
//               disabled={loading}
//             >
//               Extract label
//             </button>
//           </div>

//           <div className="bg-white text-gray-800 p-4 rounded-lg shadow-lg overflow-y-auto flex-grow">
//             <p>{extractedText || "Extracted label text with scrollbar"}</p>
//           </div>
//         </div>

//         {/* Main Content Area */}
//         <div className="bg-white flex-grow p-6 flex flex-col">
//           <div className="flex mb-6">
//             <input 
//               type="text" 
//               value={userInput} 
//               onChange={(e) => setUserInput(e.target.value)} 
//               className="flex-grow border border-green-400 p-4 rounded-l-lg shadow-lg"
//               placeholder="Enter the claim"
//               disabled={loading}
//             />
//             <button 
//               onClick={handleAnalyzeText} 
//               className="bg-green-600 text-white px-6 py-2 rounded-r-lg shadow-lg hover:bg-green-700 transition duration-300 ease-in-out"
//               disabled={loading}
//             >
//               Check
//             </button>
//           </div>

//           <div className="bg-gray-100 p-4 rounded-lg shadow-lg overflow-y-auto flex-grow">
//             <p>{analysisResult || "Scrollable bar with clean information"}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TextExtractor;

//////////---------------------------------------------------------------------------------------------------------//////////////////

// import React, { useState } from 'react';
// import axios from 'axios';

// const TextExtractor = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [extractedText, setExtractedText] = useState('');
//   const [userInput, setUserInput] = useState('');
//   const [productName, setProductName] = useState('');
//   const [analysisResult, setAnalysisResult] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [uploadStatus, setUploadStatus] = useState('');
//   const [newsStatus, setNewsStatus] = useState([]);

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     setSelectedFile(file);

//     if (file) {
//       setUploadStatus(`Image "${file.name}" uploaded successfully`);
//     } else {
//       setUploadStatus('No image uploaded');
//     }
//   };

//   const handleExtractText = async () => {
//     if (selectedFile) {
//       setLoading(true);
//       const formData = new FormData();
//       formData.append('image', selectedFile);

//       try {
//         const response = await axios.post('http://localhost:5000/extract_text', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });

//         setExtractedText(response.data.text);
//       } catch (error) {
//         console.error('Error extracting text:', error);
//         setExtractedText('Failed to extract text');
//       } finally {
//         setLoading(false);
//       }
//     } else {
//       setUploadStatus('Please upload an image first');
//     }
//   };

//   const handleAnalyzeText = async () => {
//     if (extractedText && userInput && productName) {
//       setLoading(true);

//       try {
//         const response = await axios.post('http://localhost:5000/claim_analyser', {
//           extractedText,
//           userInput,
//           productName,
//         });

//         setAnalysisResult(response.data.result);
//         setNewsStatus(Array.isArray(response.data.newsStatus) ? response.data.newsStatus : []); 
//       } catch (error) {
//         console.error('Error analyzing text:', error);
//         setAnalysisResult('Failed to analyze text');
//         setNewsStatus([]);
//       } finally {
//         setLoading(false);
//       }
//     }
//   };

//   return (
//     <div className="flex">
//       {/* Left Sidebar */}
//       <div className="bg-[#00bf63] text-white p-6 w-[25%] fixed top-0 left-0 h-full flex flex-col">

//           <img 
//           src="./ll.png" 
//           alt="Consume Wisely Logo" 
//           className="mb-6" 
//         />

//         <div className="flex flex-col mb-6">
//           <label className="bg-white text-green-700 p-4 rounded-lg shadow-lg text-center cursor-pointer hover:bg-green-100 transition duration-300 ease-in-out">
//             Upload image
//             <input 
//               type="file" 
//               onChange={handleFileChange} 
//               className="hidden"
//               disabled={loading}
//             />
//           </label>
//           <button 
//             onClick={handleExtractText} 
//             className="mt-4 px-4 py-2 bg-[#c1ff72] text-green-800 rounded-lg shadow-lg hover:bg-green-500 transition duration-300 ease-in-out"
//             disabled={loading}
//           >
//             Extract label
//           </button>
//         </div>

//         <div className="text-green-200 mb-4">
//           <p>{uploadStatus}</p>
//         </div>

//         <div className="bg-white text-gray-800 p-4 rounded-lg shadow-lg overflow-y-auto flex-grow">
//           {/* <p>{extractedText || "Extracted label text with scrollbar"}</p> */}
//           <p>{extractedText}</p>
//         </div>
//       </div>

//       {/* Main Content Area */}
//       <div className="ml-[25%] w-[75%] p-6">

//         {/* Navigation Bar */}
//         <nav className="bg-white shadow-lg p-4 mb-6">
//           <div className="container mx-auto flex justify-end">
//             <a href="#" className="text-green-600 font-semibold hover:text-green-800 mx-4">AI Experts</a>
//             <a href="#" className="text-green-600 font-semibold hover:text-green-800 mx-4">Learn Healthy</a>
//             <a href="#" className="text-green-600 font-semibold hover:text-green-800 mx-4">Products in News</a>
//           </div>
//         </nav>

//         {/* Input Section */}
//         <div className="flex items-center mb-6">
//           <input 
//             type="text" 
//             value={productName} 
//             onChange={(e) => setProductName(e.target.value)} 
//             className="border border-green-400 focus:border-[#c1ff72] focus:outline-none p-4 rounded-lg shadow-lg flex-grow mr-4"
//             placeholder="Product Name"
//             disabled={loading}
//           />
//           <input 
//             type="text" 
//             value={userInput} 
//             onChange={(e) => setUserInput(e.target.value)} 
//             className="border border-green-400 focus:border-[#c1ff72] focus:outline-none p-4 rounded-lg shadow-lg flex-grow mr-4"
//             placeholder="Enter the claim"
//             disabled={loading}
//           />
//           <button 
//             onClick={handleAnalyzeText} 
//             className="bg-green-600  text-white px-7 py-4 rounded-lg shadow-lg hover:bg-green-700 transition duration-300 ease-in-out"
//             disabled={loading}
//           >
//             Check
//           </button>
//         </div>

//         {/* Results Section */}
//         <div className="grid grid-cols-2 gap-4">
//           <div className="bg-gray-100 p-4 rounded-lg shadow-lg h-48 overflow-y-auto">
//             {/* <p>{analysisResult || "Scrollable bar with clean information"}</p> */}
//             <p>{analysisResult}</p>
//           </div>

//           <div className="bg-gray-100 p-4 rounded-lg shadow-lg h-48 overflow-y-auto">
//             {newsStatus.length > 0 ? (
//               <ul>
//                 {newsStatus.map((news, index) => (
//                   <li key={index}>{news}</li>
//                 ))}
//               </ul>
//             ) : (
//               <p>{newsStatus || "Was the product in news currently?"}</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TextExtractor;

//---------------------------------------------------//------------------------------------//----------------------------

// import React, { useState } from 'react';
// import axios from 'axios';

// const TextExtractor = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [extractedText, setExtractedText] = useState('');
//   const [userInput, setUserInput] = useState('');
//   const [productName, setProductName] = useState('');
//   const [analysisResult, setAnalysisResult] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [uploadStatus, setUploadStatus] = useState('');
//   const [newsStatus, setNewsStatus] = useState([]);

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     setSelectedFile(file);

//     if (file) {
//       setUploadStatus(`Image "${file.name}" uploaded successfully`);
//     } else {
//       setUploadStatus('No image uploaded');
//     }
//   };

//   const handleExtractText = async () => {
//     if (selectedFile) {
//       setLoading(true);
//       const formData = new FormData();
//       formData.append('image', selectedFile);

//       try {
//         const response = await axios.post('http://localhost:5000/extract_text', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });

//         setExtractedText(response.data.text);
//       } catch (error) {
//         console.error('Error extracting text:', error);
//         setExtractedText('Failed to extract text');
//       } finally {
//         setLoading(false);
//       }
//     } else {
//       setUploadStatus('Please upload an image first');
//     }
//   };

//   const handleAnalyzeText = async () => {
//     if (extractedText && userInput && productName) {
//       setLoading(true);

//       try {
//         const response = await axios.post('http://localhost:5000/claim_analyser', {
//           extractedText,
//           userInput,
//           productName,
//         });

//         setAnalysisResult(response.data.result);
//         setNewsStatus(Array.isArray(response.data.newsStatus) ? response.data.newsStatus : []); 
//       } catch (error) {
//         console.error('Error analyzing text:', error);
//         setAnalysisResult('Failed to analyze text');
//         setNewsStatus([]);
//       } finally {
//         setLoading(false);
//       }
//     } else {
//       setUploadStatus('Please provide extracted text, claim, and product name');
//     }
//   };

//   return (
//     <div className="flex">
//       {/* Left Sidebar */}
//       <div className="bg-[#00bf63] text-white p-6 w-[25%] fixed top-0 left-0 h-full flex flex-col">
//         <img 
//           src="./ll.png" 
//           alt="Consume Wisely Logo" 
//           className="mb-6" 
//         />

//         <div className="flex flex-col mb-6">
//           <label className="bg-white text-green-700 p-4 rounded-lg shadow-lg text-center cursor-pointer hover:bg-green-100 transition duration-300 ease-in-out">
//             Upload image
//             <input 
//               type="file" 
//               onChange={handleFileChange} 
//               className="hidden"
//               disabled={loading}
//             />
//           </label>
//           <button 
//             onClick={handleExtractText} 
//             className="mt-4 px-4 py-2 bg-[#c1ff72] text-green-800 rounded-lg shadow-lg hover:bg-green-500 transition duration-300 ease-in-out"
//             disabled={loading}
//           >
//             Extract label
//           </button>
//         </div>

//         <div className="text-green-200 mb-4">
//           <p>{uploadStatus}</p>
//         </div>

//         <div className="bg-white text-gray-800 p-4 rounded-lg shadow-lg overflow-y-auto flex-grow">
//           <p>{extractedText}</p>
//         </div>
//       </div>

//       {/* Main Content Area */}
//       <div className="ml-[25%] w-[75%] p-6">
//         {/* Navigation Bar */}
//         <nav className="bg-white shadow-lg p-4 mb-6">
//           <div className="container mx-auto flex justify-end">
//             <a href="#" className="text-green-600 font-semibold hover:text-green-800 mx-4">AI Experts</a>
//             <a href="#" className="text-green-600 font-semibold hover:text-green-800 mx-4">Learn Healthy</a>
//             <a href="#" className="text-green-600 font-semibold hover:text-green-800 mx-4">Products in News</a>
//           </div>
//         </nav>

//         {/* Input Section */}
//         <div className="flex items-center mb-6">
//           <input 
//             type="text" 
//             value={productName} 
//             onChange={(e) => setProductName(e.target.value)} 
//             className="border border-green-400 focus:border-[#c1ff72] focus:outline-none p-4 rounded-lg shadow-lg flex-grow mr-4"
//             placeholder="Product Name"
//             disabled={loading}
//           />
//           <input 
//             type="text" 
//             value={userInput} 
//             onChange={(e) => setUserInput(e.target.value)} 
//             className="border border-green-400 focus:border-[#c1ff72] focus:outline-none p-4 rounded-lg shadow-lg flex-grow mr-4"
//             placeholder="Enter the claim"
//             disabled={loading}
//           />
//           <button 
//             onClick={handleAnalyzeText} 
//             className="bg-green-600 text-white px-7 py-4 rounded-lg shadow-lg hover:bg-green-700 transition duration-300 ease-in-out"
//             disabled={loading}
//           >
//             Check
//           </button>
//         </div>

//         {/* Results Section */}
//         <div className="grid grid-cols-2 gap-4">
//           <div className="bg-gray-100 p-4 rounded-lg shadow-lg h-48 overflow-y-auto">
//             <p>{analysisResult}</p>
//           </div>

//           {/* News Section */}
//           <div className="bg-gray-100 p-4 rounded-lg shadow-lg h-48 overflow-y-auto">
//             {newsStatus.length > 0 ? (
//               <ul>
//                 {newsStatus.map((news, index) => (
//                   <li key={index} className="mb-2">
//                     <p className="font-semibold">{news.content}</p>
//                     <a href={news.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
//                       Read more
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <p>{newsStatus.length === 0 ? "No news found for this product" : "Loading news..."}</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TextExtractor;




//////////////////////////////////////////////////////////////////////////


// import React, { useState } from 'react';
// import axios from 'axios';

// // Spinner Component (Simple CSS Spinner)
// const Spinner = () => (
//   <div className="spinner border-t-4 border-green-600 border-solid rounded-full w-8 h-8 animate-spin"></div>
// );

// const TextExtractor = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [extractedText, setExtractedText] = useState('');
//   const [userInput, setUserInput] = useState('');
//   const [productName, setProductName] = useState('');
//   const [response, setResponse] = useState({
//     claim: "",
//     claimAccuracy: "",
//     ingredientReview: "",
//     nutritionalFactsReview: "",
//     overallObservation: "",
//     conclusion: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [uploadStatus, setUploadStatus] = useState('');
//   const [newsStatus, setNewsStatus] = useState([]);

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     setSelectedFile(file);

//     if (file) {
//       setUploadStatus(`Image "${file.name}" uploaded successfully`);
//     } else {
//       setUploadStatus('No image uploaded');
//     }
//   };

//   const handleExtractText = async () => {
//     if (selectedFile) {
//       setLoading(true);
//       const formData = new FormData();
//       formData.append('image', selectedFile);

//       try {
//         const response = await axios.post('http://localhost:5000/extract_text', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });

//         setExtractedText(response.data.text);
//       } catch (error) {
//         console.error('Error extracting text:', error);
//         setExtractedText('Failed to extract text');
//       } finally {
//         setLoading(false);
//       }
//     } else {
//       setUploadStatus('Please upload an image first');
//     }
//   };

//   const handleAnalyzeText = async () => {
//     if (extractedText && userInput && productName) {
//       setLoading(true);

//       try {
//         const result = await axios.post('http://localhost:5000/claim_analyser', {
//           extractedText,
//           userInput,
//           productName,
//         });

//         const analysis = result.data.analysis;

//         setResponse({
//           claim: analysis.claim || '',
//           claimAccuracy: analysis.claimAccuracy || '',
//           ingredientReview: analysis.ingredientReview || '',
//           nutritionalFactsReview: analysis.nutritionalFactsReview || '',
//           overallObservation: analysis.overallObservation || '',
//           conclusion: analysis.conclusion || '',
//         });

//         setNewsStatus(Array.isArray(result.data.newsStatus) ? result.data.newsStatus : []);
//       } catch (error) {
//         console.error('Error analyzing text:', error);
//         // setResponse({
//         //   claim: '',
//         //   claimAccuracy: '',
//         //   ingredientReview: '',
//         //   nutritionalFactsReview: '',
//         //   overallObservation: '',
//         //   conclusion: '',
//         // });
//         setNewsStatus([]);
//       } finally {
//         setLoading(false);
//       }
//     } else {
//       setUploadStatus('Please provide extracted text, claim, and product name');
//     }
//   };

//   // Determine if "Check" button should be disabled
//   const isCheckDisabled = !productName || !userInput || !extractedText || loading;

//   return (
    // <div className="flex">
    //   {/* Left Sidebar */}
    //   <div className="bg-[#00bf63] text-white p-6 w-[25%] fixed top-0 left-0 h-full flex flex-col">
    //     <img 
    //       src="./ll.png" 
    //       alt="Consume Wisely Logo" 
    //       className="mb-6" 
    //     />

//         <div className="flex flex-col mb-6">
//           <label className="bg-white text-green-700 p-4 rounded-lg shadow-lg text-center cursor-pointer hover:bg-green-100 transition duration-300 ease-in-out">
//             Upload image
//             <input 
//               type="file" 
//               onChange={handleFileChange} 
//               className="hidden"
//               disabled={loading}
//             />
//           </label>
//           <button 
//             onClick={handleExtractText} 
//             className="mt-4 px-4 py-2 bg-[#c1ff72] text-green-800 rounded-lg shadow-lg hover:bg-green-500 transition duration-300 ease-in-out"
//             disabled={loading}
//           >
//             {loading ? <Spinner /> : 'Extract label'}
//           </button>
//         </div>

//         <div className="text-green-200 mb-4">
//           <p>{uploadStatus}</p>
//         </div>

//         <div className="bg-white text-gray-800 p-4 rounded-lg shadow-lg overflow-y-auto flex-grow">
//           <p>{extractedText}</p>
//         </div>
//       </div>

//       {/* Main Content Area */}
//       <div className="ml-[25%] w-[75%] p-6">
//         {/* Navigation Bar */}
//         <nav className="bg-white shadow-lg p-4 mb-6">
//           <div className="container mx-auto flex justify-end">
//             <a href="#" className="text-green-600 font-semibold hover:text-green-800 mx-4">AI Experts</a>
//             <a href="#" className="text-green-600 font-semibold hover:text-green-800 mx-4">Learn Healthy</a>
//             <a href="#" className="text-green-600 font-semibold hover:text-green-800 mx-4">Products in News</a>
//           </div>
//         </nav>

//         {/* Input Section */}
//         <div className="flex items-center mb-6">
//           <input 
//             type="text" 
//             value={productName} 
//             onChange={(e) => setProductName(e.target.value)} 
//             className="border border-green-400 focus:border-[#c1ff72] focus:outline-none p-4 rounded-lg shadow-lg flex-grow mr-4"
//             placeholder="Product Name"
//             disabled={loading}
//           />
//           <input 
//             type="text" 
//             value={userInput} 
//             onChange={(e) => setUserInput(e.target.value)} 
//             className="border border-green-400 focus:border-[#c1ff72] focus:outline-none p-4 rounded-lg shadow-lg flex-grow mr-4"
//             placeholder="Enter the claim"
//             disabled={loading}
//           />
//           <button 
//             onClick={handleAnalyzeText} 
//             className={`bg-green-600 text-white px-7 py-4 rounded-lg shadow-lg transition duration-300 ease-in-out ${isCheckDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-700'}`}
//             disabled={isCheckDisabled}  // Disabled based on form validation
//           >
//             {loading ? <Spinner /> : 'Check'}
//           </button>
//         </div>

//         {/* Results Section */}
//         <div className="grid grid-cols-[3fr_2fr] gap-4">
//           {/* Analysis Section */}
//           <div className="bg-gray-100 p-6 rounded-lg shadow-lg h-95 overflow-y-auto space-y-4">
//             <h2 className="text-lg font-semibold mb-4">Analysis Result</h2>
//             <div className="space-y-3">
//               {/* Claim Section */}
//               <div>
//                 <h3 className="font-bold text-blue-600">🔍 Claim:</h3>
//                 <p className="text-gray-700">{response.claim || "No claim available"}</p>
//               </div>

//               {/* Claim Accuracy Section */}
//               <div>
//                 <h3 className="font-bold text-blue-600">🔍 Claim Accuracy:</h3>
//                 {/* <ul className="list-disc list-inside text-gray-700">
//                   {response.claimAccuracy?.length > 0 ? (
//                     response.claimAccuracy.map((item, index) => (
//                       <li key={index}>{item}</li>
//                     ))
//                   ) : (
//                     <li>No claim accuracy information available</li>
//                   )}
                  
//                 </ul>  */}
//               </div>

//               {/* Ingredient Review Section */}
//               <div>
//                 <h3 className="font-bold text-blue-600">🧪 Ingredient Review:</h3>
//                 <p className='text-gray-700'>{response.ingredientReview}</p>
//                 {/* <ul className="list-disc list-inside text-gray-700"> */}
//                   {/* {response.ingredientReview?.length > 0 ? (
//                     response.ingredientReview.map((item, index) => (
//                       <li key={index}>{item}</li>
//                     ))
//                   ) : (
//                     <li>No ingredient review available</li>
//                   )} */}
                  
//                 {/* </ul> */}
//               </div>

//               {/* Nutritional Facts Review Section */}
//               <div>
//                 <h3 className="font-bold text-blue-600">📊 Nutritional Facts Review:</h3>
//                 <p className='text-gray-700'>{response.nutritionalFactsReview  || "No nutritions Review"}</p>
//                 {/* <ul className="list-disc list-inside text-gray-700">
//                   {/* {response.nutritionalFactsReview?.length > 0 ? (
//                     response.nutritionalFactsReview.map((item, index) => (
//                       <li key={index}>{item}</li>
//                     ))
//                   ) : (
//                     <li>No nutritional facts review available</li>
//                   )} */}
                  
//                 {/* </ul> */}
//               </div>

//               {/* Overall Observation Section */}
//               <div>
//                 <h3 className="font-bold text-blue-600">📌 Overall Observation:</h3>
//                 <p className="text-gray-700">{response.overallObservation || "No overall observation available"}</p>
//               </div>

//               {/* Conclusion Section */}
//               <div>
//                 <h3 className="font-bold text-blue-600">💡 Conclusion:</h3>
//                 <p className="text-gray-700">{response.conclusion || "No conclusion available"}</p>
//               </div>
//             </div>
//           </div>

//           {/* News Section */}
//           <div className="bg-gray-100 p-6 rounded-lg shadow-lg h-95 overflow-y-auto">
//             <h2 className="text-lg font-semibold mb-4">Relevant News Articles</h2>
//             <ul className="list-inside text-gray-700 space-y-2">
//               {newsStatus.length > 0 ? (
//                 newsStatus.map((item, index) => (
//                   <li key={index}>
//                     <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
//                       {item.title}
//                     </a>
//                   </li>
//                 ))
//               ) : (
//                 <li>No relevant news articles available</li>
//               )}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TextExtractor;











import React, { useState } from 'react';
// import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [news, setNews] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
        const response = await fetch(`http://127.0.0.1:5000/api/search?query=${query}`);
      const data = await response.json();
      
      if (response.ok) {
        setNews(data.results);
        setError('');
      } else {
        setError(data.error);
        setNews([]);
      }
    } catch (err) {
      setError('Failed to fetch news');
    }
  };

  return (
    <div className="App">
      <h1>News Search</h1>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Enter a search term" 
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p className="error">{error}</p>}

      <div className="news-results">
        {news.map((item, index) => (
          <div key={index} className="news-item">
            <p>{item.content}</p>
            <a href={item.url} target="_blank" rel="noopener noreferrer">Read more</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
