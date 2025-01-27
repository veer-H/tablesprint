import React from 'react';

const Welcome = ({ userName }) => {
  return (
    <div className="text-center p-4">
      <h1 className="text-2xl font-bold">Welcome, {userName}!</h1>
      <p className="mt-2 text-gray-600">We are glad to have you here. Explore the application to manage your products efficiently.</p>
    </div>
  );
};

export default Welcome;