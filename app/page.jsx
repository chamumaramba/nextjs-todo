'use client'
import React, { useState } from 'react';
import { Button } from '@nextui-org/react';
import AuthForm from './components/AuthForm'; // Import your AuthForm component

const Home = () => {
  const [showAuthForm, setShowAuthForm] = useState(false); // State to manage the visibility of AuthForm

  // Function to toggle the visibility of AuthForm
  const toggleAuthForm = () => {
    setShowAuthForm(!showAuthForm);
  };

  return (
    <main className="login-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '85vh' }}>
      <div style={{ width: '80%', maxWidth: '800px', padding: '10px', margin: '40px 0', borderRadius: '10px', backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '10px', fontWeight: 'bold', fontSize: 20 }}>Stay Organized and Achieve More</h1>
        <p style={{ textAlign: 'center', marginBottom: '10px' }}>
          Welcome to Task Master, your ultimate productivity companion. 
          Effortlessly manage your tasks, set priorities, and accomplish your goals with ease.
          Whether you’re planning your day, managing a project, or tracking personal goals, 
          Task Master has got you covered.
        </p>
        <ul style={{ paddingLeft: '20px', textAlign: 'center', fontWeight: 'bold', marginTop: '10px', marginBottom: '10px' }}>
          <li>Simple and Intuitive: Easy-to-use interface designed for everyone.</li>
          <li>Stay on Track: Set deadlines to never miss a task.</li>
          <li>Achieve More: Prioritize your tasks and focus on what matters most.</li>
          <li>Anywhere, Anytime: Access your to-do list from any device.</li>
        </ul>
        <Button
          radius="sm"
          fullWidth={true}
          className="bg-gradient-to-tr from-orange-500 to-blue-500 text-white shadow-lg"
          style={{ width: '100%', marginTop: '10px', height: '35px', borderRadius: '10px' }}
          onClick={toggleAuthForm} 
        >
          Click here to get started and transform the way you organize your life!
        </Button>
        {/* Render AuthForm only if showAuthForm is true */}
        {showAuthForm && (
          <div className="flex justify-center">
            <AuthForm />
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
