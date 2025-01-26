import React from 'react';
import Header from '../Components/header.jsx' // Import the Header component

const Home = () => {
  return (
    <div>
      {/* Render the Header component */}
      <Header />

      {/* Rest of your Home component content */}
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Home Page</h1>
        {/* Add other content for the Home page here */}
      </main>
    </div>
  );
};

export default Home;