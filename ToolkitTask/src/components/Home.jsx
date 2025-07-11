import React from 'react';

const Home = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Welcome to the React Test Toolkit App</h1>
      <p>Select a menu option from above to continue:</p>
      <ul style={{ listStyle: "none", lineHeight: "2em" }}>
        <li>➡ Counter App</li>
        <li>➡ Theme Change App</li>
        <li>➡ ToDo List App</li>
        <li>➡ Contact Us</li>
      </ul>
    </div>
  );
};

export default Home;
