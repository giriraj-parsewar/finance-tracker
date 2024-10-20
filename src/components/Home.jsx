import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Finance Tracker App</h1>
      <p>Please sign in or sign up to get started.</p>
      <div className="home-links">
        <Link to="/signin" className="home-link">Sign In</Link>
        <Link to="/signup" className="home-link">Sign Up</Link>
      </div>
    </div>
  );
};

export default Home;

// import React from "react";
// import { Link } from "react-router-dom"; // Import Link for navigation

// const Home = () => {
//   return (
//     <div className="home-container">
//       <h1>Welcome to the Finance Tracker App</h1>
//       <p>Please sign in or sign up to get started.</p>
//       <div className="home-links">
//         <Link to="/signin" className="home-link">Sign In</Link>
//         <Link to="/signup" className="home-link">Sign Up</Link>
//       </div>
//     </div>
//   );
// };

// export default Home;
