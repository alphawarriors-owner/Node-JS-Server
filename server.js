
import express from "express";

const app = express();

app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "Node.js server is running!",
    hosting: "Render"
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "online"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
