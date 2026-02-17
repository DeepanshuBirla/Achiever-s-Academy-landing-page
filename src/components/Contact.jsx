import React, { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>Contact Us</h2>

      {submitted ? (
        <h3 style={{ color: "green" }}>
          Thank You for Submitting ✅
        </h3>
      ) : (
        <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
          <div style={{ marginBottom: "10px" }}>
            <input
              type="text"
              placeholder="Name"
              required
              style={{ padding: "8px", width: "250px" }}
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <input
              type="email"
              placeholder="Email"
              required
              style={{ padding: "8px", width: "250px" }}
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <input
              type="tel"
              placeholder="Phone Number"
              required
              style={{ padding: "8px", width: "250px" }}
            />
          </div>

          <button
            type="submit"
            style={{
              padding: "8px 20px",
              backgroundColor: "blue",
              color: "white",
              border: "none",
              cursor: "pointer"
            }}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
