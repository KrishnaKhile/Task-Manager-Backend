const dotenv = require("dotenv").config();
const express = require("express");
const connectdb = require("./backend/config/connectdb.js");
const router = require("./backend/routes/taskRoutes.js");
const cors = require("cors")

const app = express();

// Middleware

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/tasks",router);
// const logger = (req, res, next) => {
//   console.log("Middleware run");
//   console.log(req.method);
//   next();
// };

// Routes

app.get("/", (req, res) => {
  res.send("Home page");
});






const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectdb();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
