import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase"; // Ensure the firebase config is correctly exported
import { Link, useNavigate } from "react-router-dom";
import "./SignIn.css"; // Import the CSS file for styling

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Google Provider
  const provider = new GoogleAuthProvider();

  // Function to handle sign in with email and password
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Signed in Successfully!");
      navigate("/financeform"); // Redirect to your app after sign in
    } catch (error) {
      setError(error.message);
    }
  };

  // Function to handle Google Sign-In
  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert("Signed in with Google Successfully!");
      navigate("/financeform"); // Redirect to your app after sign in
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="signin-container">
        <h2>Sign In</h2>
        <form onSubmit={handleSignIn} className="auth-form">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit">Sign In</button>
        </form>

        {error && <p className="error-message">{error}</p>}

        <button onClick={handleGoogleSignIn} className="google-signin-button">
          Sign In with Google
        </button>

        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
// import React, { useState } from "react";
// import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { auth } from "../firebase"; // Ensure the firebase config is correctly exported
// import { Link, useNavigate } from "react-router-dom";

// const SignIn = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   // Google Provider
//   const provider = new GoogleAuthProvider();

//   // Function to handle sign in with email and password
//   const handleSignIn = async (e) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       alert("Signed in Successfully!");
//       navigate("/financeform"); // Redirect to your app after sign in
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   // Function to handle Google Sign-In
//   const handleGoogleSignIn = async () => {
//     try {
//       await signInWithPopup(auth, provider);
//       alert("Signed in with Google Successfully!");
//       navigate("/financeform"); // Redirect to your app after sign in
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>Sign In</h2>
//       <form onSubmit={handleSignIn} className="auth-form">
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//           required
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//           required
//         />
//         <button type="submit">Sign In</button>
//       </form>
//       {error && <p className="error-message">{error}</p>}
      
//       <button onClick={handleGoogleSignIn} className="google-signin-button">
//         Sign In with Google
//       </button>

//       <p>
//         Don't have an account? <Link to="/signup">Sign Up</Link>
//       </p>
//     </div>
//   );
// };

// export default SignIn;
// // import React, { useState } from 'react';
// // import { signInWithEmailAndPassword } from "firebase/auth";
// // import { auth } from "../firebase"; // Ensure this path is correct
// // import { Link, useNavigate } from "react-router-dom"; // Import Link for navigation

// // const SignIn = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState(null);
// //   const navigate = useNavigate(); // Hook for navigation

// //   const handleSignIn = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await signInWithEmailAndPassword(auth, email, password);
// //       alert("Signed in Successfully!");
// //       navigate("/financeform"); // Redirect after successful login
// //     } catch (error) {
// //       setError(error.message);
// //     }
// //   };

// //   return (
// //     <div className="auth-container">
// //       <h2>Sign In</h2>
// //       <form onSubmit={handleSignIn} className="auth-form">
// //         <input
// //           type="email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //           placeholder="Email"
// //           required
// //         />
// //         <input
// //           type="password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           placeholder="Password"
// //           required
// //         />
// //         <button type="submit">Sign In</button>
// //       </form>
// //       {error && <p className="error-message">{error}</p>}
// //       <p>
// //         Don't have an account? <Link to="/signup">Sign Up</Link>
// //       </p>
// //     </div>
// //   );
// // };

// // export default SignIn;

// // // import React from 'react';
// // // import { useState } from "react";
// // // import { signInWithEmailAndPassword } from "firebase/auth";
// // // import { auth } from "../firebase"; // Ensure this path is correct
// // // import { Link, useNavigate } from "react-router-dom"; // Import Link for navigation

// // // const SignIn = () => {
// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const [error, setError] = useState(null);
// // //   const navigate = useNavigate(); // Hook for navigation

// // //   const handleSignIn = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       await signInWithEmailAndPassword(auth, email, password);
// // //       alert("Signed in Successfully!");
// // //       navigate("/financeform"); // Redirect after successful login
// // //     } catch (error) {
// // //       setError(error.message);
// // //     }
// // //   };

// // //   return (
// // //     <div className="auth-container">
// // //       <h2>Sign In</h2>
// // //       <form onSubmit={handleSignIn} className="auth-form">
// // //         <input
// // //           type="email"
// // //           value={email}
// // //           onChange={(e) => setEmail(e.target.value)}
// // //           placeholder="Email"
// // //           required
// // //         />
// // //         <input
// // //           type="password"
// // //           value={password}
// // //           onChange={(e) => setPassword(e.target.value)}
// // //           placeholder="Password"
// // //           required
// // //         />
// // //         <button type="submit">Sign In</button>
// // //       </form>
// // //       {error && <p className="error-message">{error}</p>}
// // //       <p>
// // //         Don't have an account?{" "}
// // //         <Link to="/signup">Sign Up</Link>
// // //       </p>
// // //     </div>
// // //   );
// // // };

// // // export default SignIn;
