import React from 'react';
import { Link } from 'react-router-dom'; // For navigation

function Homepage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar with enhanced shadow and centered layout */}
      <nav className="flex justify-center items-center p-2 bg-[#00bf63] shadow-lg z-10 sticky top-0">
        <div className="flex w-full max-w-6xl justify-between items-center">
          <div className="flex items-center">
            <img src="/ll.png" alt="Website Logo" className="w-16 h-16 md:w-20 md:h-10" /> {/* Adjusted logo size */}
          </div>
          <div className="flex space-x-8">
            <a href="#why-this" className="text-white hover:underline text-lg">Why this?</a>
            <a href="#how-it-works" className="text-white hover:underline text-lg">How it works</a>
          </div>
        </div>
      </nav>

      {/* First Section */}
      <div className="flex justify-center p-10 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center">
          <div className="text-left md:w-1/3"> {/* Adjusted text container */}
            <h1 className="text-[#00bf63] text-2xl md:text-4xl font-bold leading-tight mb-1 md:mb-2">
              Get the Truth Behind <br /> Every Product Label {/* Breaking the heading into two lines */}
            </h1>
            <p className="text-green-400 text-base md:text-lg mb-2 md:mb-4">
              Empowering Consumers with AI-Powered <br /> Label Insights
            </p>
            <Link to="/try-toy">
              <button className="bg-[#00bf63] text-[#c1ff72] font-bold italic px-6 py-2 rounded-lg shadow-md transition duration-300 hover:bg-green-600 text-sm md:text-base">
                Version-1
              </button>
            </Link>
            <Link to="/toy-image">
              <button className="bg-[#00bf63] text-[#c1ff72] font-bold italic px-6 py-2 rounded-lg shadow-md transition duration-300 hover:bg-green-600 text-sm md:text-base">
                Version-2
              </button>
            </Link>
          </div>
          <div className="w-full md:w-1/3 flex justify-center md:justify-center py-10 mt-4 md:mt-0"> {/* Adjusted positioning */}
            <img src="/Designer.jpeg" alt="AI Product Insights" className="w-60 md:w-80 h-auto rounded-lg shadow-lg" /> {/* Updated alt text */}
          </div>
        </div>
      </div>

      {/* Second Section: How It Works */}
      <div id="how-it-works" className="flex flex-col md:flex-row justify-between items-center p-8 bg-gray-50">
        <div className="w-full md:w-1/3 flex justify-center md:justify-center mb-6 md:mb-0">
          <img src="/Designer (1).jpeg" alt="Steps for How It Works" className="w-60 md:w-80 h-auto rounded-lg shadow-sm" />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-green-600 text-2xl md:text-3xl font-bold mb-2">How It Works (Quick Steps):</h2>
          <ul className="text-green-500 space-y-2 mb-6">
            <li>Step 1: Enter the claim made and the ingredients.</li>
            <li>Step 2: Our AI analyzes the claims and ingredients.</li>
            <li>Step 3: Receive a detailed, easy-to-understand report.</li>
          </ul>
          <a href="https://www.youtube.com/embed/7tLJ-uOa53E?si=wwWGuHyBj025WQEM" target="_blank" rel="noopener noreferrer">
            <button className="bg-[#00bf63] text-[#c1ff72] font-bold italic px-6 py-3 rounded-lg shadow-md transition duration-300 hover:bg-green-600">
              DEMO VIDEO
            </button>
          </a>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="text-center mt-12">
        <p className="text-green-500 font-bold italic mb-2">Share your feedback and suggestions.</p>
        <p>
          <a href="https://x.com/Vaishna84783419?t=U2jBH-f4Ecs8YgzECYSRIw&s=03" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
          Feel free to drop me a message on X.
          </a>
        </p>
      </div>

      {/* Embedded Demo Video */}
      <div className="flex justify-center mt-12 mb-16">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/7tLJ-uOa53E?si=wwWGuHyBj025WQEM" // Replace with your video link
          title="Demo Video"
          className="rounded-lg shadow-lg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Why This Section with Image */}
      <div id="why-this" className=" flex justify-center p-10 bg-gray-100"> {/* Background color change for distinction */}
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 flex justify-center md:justify-center mb-6 md:mb-0">
            <img src="/food-claims.jpeg" alt="Why This Image" className="w-60 md:w-80 h-auto rounded-lg shadow-lg" /> {/* Adjusted image size */}
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-green-600 text-3xl md:text-4xl font-bold mb-4">Why This?</h2>
            <p className="text-[#00bf63] text-base md:text-base mb-4 leading-relaxed">
              In today's world, consumers are bombarded with information about products. Often, this information is confusing, misleading, or incomplete. Our AI-powered solution aims to bridge that gap by providing consumers with easy-to-understand insights into product labels. We empower you to make informed decisions about the products you buy, ensuring transparency and trust.
            </p>
            <p className="text-[#00bf63] text-base md:text-base leading-relaxed">
              With this app, you can finally decode complex product labels, discover hidden ingredients, and make choices that align with your values and needs. It's time to take control of what you consume with confidence.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#00bf63] p-4 text-center text-white mt-auto">
        <p>Contact me via email: <a href="mailto:vaishnaviy502@gmail.com" className="underline">vaishnaviy502@gmail.com</a></p>
        <p>
          Share suggestions on <a href="https://x.com/Vaishna84783419?t=U2jBH-f4Ecs8YgzECYSRIw&s=03" target="_blank" rel="noopener noreferrer" className="underline">Twitter</a>
        </p>
      </footer>
    </div>
  );
}

export default Homepage;
