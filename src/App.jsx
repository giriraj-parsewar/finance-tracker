import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";
import FinanceForm from "./components/FinanceForm.jsx";
import Transactions from "./components/Transactions.jsx";
import Home from "./components/Home.jsx";
import { auth } from "./firebase"; // Ensure the path is correct
import './App.css'; // Import the main CSS file
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>; // Show loading while auth is being checked
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Handle potential auth errors
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Finance Tracker</h1>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          {!user ? (
            <>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </>
          ) : (
            <>
              <Route path="/financeform" element={<FinanceForm />} />
              <Route path="/transactions" element={<Transactions />} />
            </>
          )}
        </Routes>
        <footer className="App-footer">
          <p>© 2024 Finance Tracker. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;