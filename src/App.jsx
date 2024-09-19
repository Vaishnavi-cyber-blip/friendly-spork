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

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Homepage'; // Import HomePage component
import Try2 from './components/Try2'; // Import Try2 component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* HomePage is the default route */}
        <Route path="/try-toy" element={<Try2 />} /> {/* Try2 route */}
      </Routes>
    </Router>
  );
}

export default App;

