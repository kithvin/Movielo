import React from "react";

const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-blue-600">Hello, Tailwind CSS!</h1>
        <p className="text-gray-700 mt-2">This is a simple React component styled with Tailwind.</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
          Click Me
        </button>
      </div>
    </div>
  );
};

export default App;
