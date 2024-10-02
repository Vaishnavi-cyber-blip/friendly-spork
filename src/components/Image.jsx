
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [imageFile, setImageFile] = useState(null);
  const [extractedText, setExtractedText] = useState('');
  const [claimInput, setClaimInput] = useState('');
  const [productName, setProductName] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [newsStatus, setNewsStatus] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isExtracting, setIsExtracting] = useState(false);
  const [textCollapsed, setTextCollapsed] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
    setIsUploading(true);

    setTimeout(() => {
      setIsUploading(false);
    }, 1000);
  };

  const handleExtractText = async () => {
    if (!imageFile) {
      alert('Please select an image file.');
      return;
    }
    const formData = new FormData();
    formData.append('image', imageFile);

    setIsExtracting(true);

    try {
      const response = await axios.post('https://consume-8n19.onrender.com/extract_text', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setExtractedText(response.data.text);
    } catch (error) {
      console.error('Error extracting text:', error);
    } finally {
      setIsExtracting(false);
    }
  };

  const handleAnalyzeClaim = async () => {
    if (!extractedText || !claimInput) {
      alert('Please provide both extracted text and a claim for analysis.');
      return;
    }

    setLoading(true); 

    try {
      const response = await axios.post('https://consume-8n19.onrender.com/claim_analyser', {
        extractedText,
        userInput: claimInput,
        productName,
      });
      setAnalysis(response.data.analysis);
      setNewsStatus(response.data.newsStatus);
    } catch (error) {
      console.error('Error analyzing claim:', error);
    }
    finally {
      setLoading(false); // Stop loading spinner
    }
  };

  return (
    <div className="min-h-screen bg-[#00bf63] flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="md:w-1/4 w-full p-6 bg-[#00bf63] text-white flex flex-col items-center space-y-4">
        <img 
          src="/ll.png" 
          alt="Consume Wisely Logo" 
          className="mb-4 w-60 h-auto" 
        />

        {/* Image Upload Section */}
        <div className="w-full">
          <label className="w-full block bg-white text-green-700 font-semibold px-4 py-2 rounded-lg cursor-pointer text-center hover:bg-green-100 transition duration-300 shadow-md">
            Upload image
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
          
          {/* Product Image Display */}
          {imageFile && (
            <img 
              src={URL.createObjectURL(imageFile)} 
              alt="Product" 
              className="w-24 h-24 mt-4 mx-auto rounded-md border-2 border-white shadow-lg"
            />
          )}

          <button
            onClick={handleExtractText}
            className="w-full mt-4 px-4 py-2 bg-[#c1ff72] text-green-800 font-bold rounded-lg shadow-lg hover:bg-green-400 transition duration-300"
          >
            Extract label
          </button>

          {isExtracting && (
            <div className="flex items-center justify-center mt-2 space-x-2">
              <div className="w-6 h-6 border-4 border-green-200 border-t-green-600 rounded-full animate-spin"></div>
              <span className="text-white font-semibold text-sm">Extracting...</span>
            </div>
          )}
        </div>

        {/* Extracted Text Display with Collapsible Option */}
        <div className="bg-white text-gray-800 rounded-lg p-4 w-full shadow-lg">
          <div 
            onClick={() => setTextCollapsed(!textCollapsed)} 
            className="flex justify-between items-center cursor-pointer"
          >
            <h2 className="text-gray-500 text-sm">Extracted label text </h2>
            <span className="text-green-500">{textCollapsed ? '▼' : '▲'}</span>
          </div>
          {!textCollapsed && (
            <div className="mt-2 max-h-60 overflow-y-scroll">
              <p>{extractedText || "No text extracted yet."}</p>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="md:w-3/4 w-full p-6 bg-white">
        {/* Header Links */}
        <div className="flex justify-end space-x-6 mb-6">
          
          <a href="https://friendly-spork-2.onrender.com/facts" className="text-green-600">AI Experts</a>
          <a href="https://friendly-spork-2.onrender.com/chat" className="text-green-600">Learn Healthy</a>
          {/* <a href="#" className="text-green-600">Products in News</a> */}
        </div>

        {/* Claim Analysis Input Section */}
        <div className="flex items-center space-x-4 mb-6">
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Product Name"
            className="w-1/4 px-3 py-2 border border-green-600 rounded"
          />
          <input
            type="text"
            value={claimInput}
            onChange={(e) => setClaimInput(e.target.value)}
            placeholder="Enter the claim"
            className="w-3/4 px-3 py-2 border border-green-600 rounded"
          />
          <button
            onClick={handleAnalyzeClaim}
            className="px-4 py-2 bg-green-500 text-white rounded flex items-center justify-center space-x-2"
            disabled={loading} // Disable button while loading
          >
            {loading ? (
              <div className="w-4 h-4 border-2 border-t-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Check"
            )}
      </button>
        </div>

        {/* Scrollable Analysis Results Section */}
        <div className="flex space-x-3  ">
          <div className="w-2/3 flex-col p-4 border border-green-600 rounded">
            <h2 className="text-gray-500">Analysis Results</h2>
            {analysis ? (
              <div>
                <p><strong>🔍Claim:</strong> {analysis.claim}</p>
                <p><strong>Claim Accuracy:</strong> {analysis.claimAccuracy}</p>
                <p><strong>Ingredient Review:</strong> {analysis.ingredientReview}</p>
                <p><strong>Nutritional Facts Review:</strong> {analysis.nutritionalFactsReview}</p>
                <p><strong>Overall Observation:</strong> {analysis.overallObservation}</p>
                <p><strong>Conclusion:</strong> {analysis.conclusion}</p>
              </div>
            ) : (
              <p className="text-gray-500 text-left">No analysis available</p>
            )}
          </div>

          {/* Display News Results */}
          {newsStatus && newsStatus.length > 0 ? (
            <div className="w-1/3 flex flex-col p-4 border border-green-600 rounded-lg shadow-md bg-white overflow-y-auto">
              <h2 className="text-lg font-semibold text-green-600 border-b pb-2 mb-4">Related News</h2>
              {newsStatus.map((newsItem, index) => (
                <div key={index} className="p-3 mb-3 bg-gray-100 rounded-lg border border-gray-200">
                  <p className="text-gray-800 mb-2">{newsItem.content}</p>
                  <a href={newsItem.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    Read more
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-1/3 flex flex-col p-4 border border-green-600 rounded">
              <h2 className="text-gray-500 text-left mt-0 ml-3">Related News</h2>
              <p className="text-gray-500 text-left ml-3">No news available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
