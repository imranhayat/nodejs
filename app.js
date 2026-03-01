const express = require("express");
const path = require("path");

const app = express();
const PORT = 5500;

// API route
app.use("/test", (req, res) => {
  res.json({ message: "Server is running" });
});

// Serve Vite build folder
app.use(express.static(path.join(__dirname, "dist")));

// Handle React routing (SPA fallback)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "../frontend/test/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});