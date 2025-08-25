import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());

app.get("/api/data", (req, res) => {
  res.json({message: "Welcome to EduSphare"});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
