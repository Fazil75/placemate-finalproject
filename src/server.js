// backend/server.js
import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());

// Example: Fetch jobs from RapidAPI (Indeed-style)
app.get("/api/jobs", async (req, res) => {
  try {
    const response = await axios.get("https://jsearch.p.rapidapi.com/search", {
      params: { query: "Software Engineer", page: "1", num_pages: "1" },
      headers: {
        "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY", // 🔑 put your key here
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      },
    });

    const jobs = response.data.data.map((job) => ({
      title: job.job_title,
      company: job.employer_name,
      location: job.job_city,
      link: job.job_apply_link,
    }));

    res.json(jobs);
  } catch (err) {
    console.error("Error fetching jobs:", err.message);
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
});

app.listen(PORT, () => console.log(`✅ Backend running on http://localhost:${PORT}`));
