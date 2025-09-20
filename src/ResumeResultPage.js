import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import ResumeTemplate from "./ResumeTemplate";

// ---------------- AI Resume Generator Function ----------------
async function generateAiResume(data, template) {
  const endpoint = process.env.REACT_APP_AI_RESUME_ENDPOINT;
  if (!endpoint || endpoint.includes("<your-region>")) {
    // Mocked AI resume for development/testing
    return `
      ${data.firstName} ${data.lastName}
      Email: ${data.email}
      Phone: ${data.phone}
      Education: ${data.education.map(e => `${e.degree} at ${e.institution} (${e.year})`).join(", ")}
      Skills: ${data.skills.join(", ")}
      Projects: ${data.projects.map(p => `${p.title}: ${p.description}`).join("; ")}
      Experience: ${data.experience.map(exp => `${exp.role} at ${exp.company} (${exp.duration})`).join("; ")}
      Certifications: ${data.certifications.filter(Boolean).join(", ")}
      Format: ${template}
    `;
  }
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ resumeData: data, templateType: template }),
  });
  const result = await response.json();
  if (result.success) return result.resume;
  throw new Error("AI resume generation failed");
}

export default function ResumeResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { resumeData, templateType, aiResumeText } = location.state || {};
  const componentRef = useRef();

  const handleDownload = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `${resumeData?.firstName || "resume"}_resume`,
  });

  useEffect(() => {
    if (!resumeData || !templateType) {
      navigate("/resume-generate");
      return;
    }
    (async () => {
      try {
        await generateAiResume(resumeData, templateType);
      } catch (err) {
        // setAiResume("Error generating resume.");
      }
      // setLoading(false);
    })();
  }, [resumeData, templateType, navigate]);

  if (!resumeData || !templateType) return null;

  return (
    <div style={{ background: "#f5f5f5", minHeight: "100vh", padding: 24 }}>
      <div style={{ maxWidth: 900, margin: "0 auto", background: "#fff", padding: 32 }}>
        {aiResumeText ? (
          <pre ref={componentRef} style={{ whiteSpace: "pre-wrap", fontFamily: "inherit" }}>{aiResumeText}</pre>
        ) : (
          <ResumeTemplate ref={componentRef} data={resumeData} templateType={templateType} />
        )}
      </div>
      <div style={{ textAlign: "center", marginTop: 24 }}>
        <button onClick={handleDownload}>Download as PDF</button>
        <button style={{ marginLeft: 16 }} onClick={() => navigate("/resume-generate")}>Edit Resume</button>
      </div>
    </div>
  );
}