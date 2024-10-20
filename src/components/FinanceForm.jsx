import React, { useState } from "react";
import { db } from "../firebase"; // Ensure this path is correct
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router

const FinanceForm = () => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // To navigate to another page

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await addDoc(collection(db, "transactions"), {
        amount: parseFloat(amount),
        description,
        timestamp: new Date(),
      });
      alert("Transaction Added Successfully!");
      setAmount("");
      setDescription("");
      
      // Redirect to transaction history page after submission
      navigate("/transactions");
      
    } catch (error) {
      setError("Error adding transaction: " + error.message);
    }
  };

  return (
    <div className="form-container">
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit} className="transaction-form">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          required
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        />
        <button type="submit">Add Transaction</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default FinanceForm;

// import React, { useState } from "react";
// import { db } from "../firebase"; // Ensure this path is correct
// import { addDoc, collection } from "firebase/firestore";

// const FinanceForm = () => {
//   const [amount, setAmount] = useState("");
//   const [description, setDescription] = useState("");
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
   

//     e.preventDefault();
    
//     try {
//       await addDoc(collection(db, "transactions"), {
//         amount: parseFloat(amount),
//         description,
//         timestamp: new Date(),
//       });
     
//       alert("Transaction Added Successfully!");
//       setAmount("");
//       setDescription("");
//     } catch (error) {
//       setError("Error adding transaction: " + error.message);
//     }
//   };
  
//   return (
//     <div className="form-container">
//       <h2>Add Transaction</h2>
//       <form onSubmit={handleSubmit} className="transaction-form">
//         <input
//           type="number"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//           placeholder="Amount"
//           required
//         />
//         <input
//           type="text"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           placeholder="Description"
//           required
//         />
//         <button type="submit">Add Transaction</button>
//       </form>
//       {error && <p className="error-message">{error}</p>}
//     </div>
//   );
// };

// export default FinanceForm;
