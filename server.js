const express = require("express");
const sequelize = require("./config/db");
const { router: authRoutes, authMiddleware } = require("./routes/auth");

const app = express();
app.use(express.json());

// Routes
app.use("/auth", authRoutes);

// Example protected route
app.get("/protected", authMiddleware, (req, res) => {
  res.json({ message: "You have access!" });
});

// Start server
sequelize.sync().then(() => {
  app.listen(5000, () => console.log("Server running on port 5000"));
});
