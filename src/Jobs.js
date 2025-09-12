import React, { useState, useEffect } from "react";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [newJob, setNewJob] = useState({ title: "", company: "", criteria: "" });
  const [externalJobs, setExternalJobs] = useState([]); // Jobs from API

  // ✅ Fetch jobs from external API (placeholder)
  useEffect(() => {
  fetch("http://localhost:5000/api/jobs")
    .then((res) => res.json())
    .then((data) => setJobs(data))
    .catch((err) => console.error("Error fetching jobs:", err));
}, []);

  const handleAddJob = (e) => {
    e.preventDefault();
    setJobs([...jobs, newJob]);
    setNewJob({ title: "", company: "", criteria: "" });
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Inter, sans-serif" }}>
      <h2 style={{ color: "#6366f1" }}>🏢 Company & Job Management</h2>

      {/* Form to add internal job postings */}
      <form
        onSubmit={handleAddJob}
        style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}
      >
        <input
          placeholder="Job Title"
          value={newJob.title}
          onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
        />
        <input
          placeholder="Company Name"
          value={newJob.company}
          onChange={(e) => setNewJob({ ...newJob, company: e.target.value })}
        />
        <textarea
          placeholder="Eligibility Criteria"
          value={newJob.criteria}
          onChange={(e) => setNewJob({ ...newJob, criteria: e.target.value })}
        />
        <button type="submit">Add Job</button>
      </form>

      {/* Internal Job Listings */}
      <h3>📋 Job Listings (Added by Placement Cell)</h3>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            <b>{job.title}</b> at {job.company} <br />
            Eligibility: {job.criteria}
          </li>
        ))}
      </ul>

      {/* External Job Vacancies */}
      <h3>🌐 External Job Vacancies (from APIs)</h3>
      <ul>
        {externalJobs.length > 0 ? (
          externalJobs.map((job, index) => (
            <li key={index}>
              <b>{job.title}</b> at {job.company} <br />
              Location: {job.location} <br />
              <a href={job.link} target="_blank" rel="noreferrer">
                Apply Now
              </a>
            </li>
          ))
        ) : (
          <p>Loading external job vacancies...</p>
        )}
      </ul>
    </div>
  );
}

export default Jobs;
