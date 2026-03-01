// src/App.jsx
import React from "react";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: 0 }}>
      {/* Header */}
      <header
        style={{
          backgroundColor: "#1e1e1e",
          color: "white",
          padding: "20px 0",
          textAlign: "center",
        }}
      >
        <h1>Welcome to My Landing Page</h1>
      </header>

      {/* Hero Section */}
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "70vh",
          background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
          color: "#333",
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
          Hello From The Server
        </h2>
        <p style={{ fontSize: "1.2rem", maxWidth: "600px", marginBottom: "30px" }}>
          This is a simple landing page served from your Express backend using a Vite React build.
        </p>
        <button
          style={{
            padding: "12px 25px",
            fontSize: "1rem",
            color: "white",
            backgroundColor: "#333",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => alert("Button clicked!")}
        >
          Get Started
        </button>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#1e1e1e",
          color: "white",
          textAlign: "center",
          padding: "15px 0",
        }}
      >
        &copy; {new Date().getFullYear()} My Landing Page. All rights reserved.
      </footer>
    </div>
  );
}

export default App;