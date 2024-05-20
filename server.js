import express from "express";

const PORT = 5001;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello askdbakdbsakjs");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
