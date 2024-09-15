import React from 'react';

const HomePage = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to TaskMaster Pro</h1>
        <a href="/dashboard" className="text-xl bg-blue-500 text-white px-4 py-2 rounded">
          Go to Dashboard
        </a>
      </div>
    </div>
  );
};

export default HomePage;

