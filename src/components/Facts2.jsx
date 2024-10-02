// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [facts, setFacts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     // Fetch 5 nutritional facts when the component mounts
//     const fetchFacts = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/generate-facts');
//         setFacts(response.data.facts);
//       } catch (err) {
//         setError('Failed to fetch nutritional facts. Please try again.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFacts();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex flex-col items-center justify-center py-10">
//       <div className="bg-white shadow-lg rounded-lg p-6 w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3">
//         <h1 className="text-3xl font-bold text-center mb-4 text-green-600">Nutritional Facts Generator</h1>
        
//         {loading && <p className="text-center text-gray-500">Loading facts...</p>}
//         {error && <p className="text-center text-red-500">{error}</p>}
        
//         <ul className="space-y-4">
//           {facts.map((fact, index) => (
//             <li key={index} className="bg-green-100 text-green-800 px-4 py-2 rounded-lg shadow">
//               {fact}
//             </li>
//           ))}
//         </ul>

//         <button 
//           onClick={() => window.location.reload()} 
//           className="mt-6 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors duration-300 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-50"
//         >
//           Generate More Facts
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;




import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [mythsFacts, setMythsFacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch 5 myth-fact pairs when the component mounts
    const fetchMythsFacts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/generate-myths-facts');
        setMythsFacts(response.data.myths_facts);
      } catch (err) {
        setError('Failed to fetch myth and fact pairs. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchMythsFacts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex flex-col items-center justify-center py-10">
      <div className="bg-white shadow-lg rounded-lg p-6 w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <h1 className="text-3xl font-bold text-center mb-4 text-green-600">Myth vs. Fact Generator</h1>
        
        {loading && <p className="text-center text-gray-500">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        
        <ul className="space-y-4">
          {mythsFacts.map((item, index) => (
            <li key={index} className="bg-green-100 px-4 py-2 rounded-lg shadow">
              <div className="flex justify-between">
                <div className="w-1/2 text-center bg-red-200 rounded-md p-2 m-1">
                  <h2 className="font-bold text-red-600">MYTH</h2>
                  <p>{item.myth}</p>
                </div>
                <div className="w-1/2 text-center bg-blue-200 rounded-md p-2 m-1">
                  <h2 className="font-bold text-blue-600">FACT</h2>
                  <p>{item.fact}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <button 
          onClick={() => window.location.reload()} 
          className="mt-6 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors duration-300 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-50"
        >
           Myth vs. Fact 
        </button>
      </div>
    </div>
  );
}

export default App;
