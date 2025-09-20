import React, { forwardRef } from "react";

const ClassicTemplate = ({ data }) => (
  <div>
    <h1>{data.firstName} {data.lastName}</h1>
    <p>Email: {data.email} | Phone: {data.phone}</p>
    <hr />
    <h2>Education</h2>
    <ul>
      {data.education?.map((edu, idx) => (
        <li key={idx}>
          <b>{edu.degree}</b> at {edu.institution} ({edu.year}) - CGPA: {edu.cgpa}
        </li>
      ))}
    </ul>
    {/* ...other sections... */}
  </div>
);

const ModernTemplate = ({ data }) => (
  <div style={{ border: "2px solid #007bff", borderRadius: 12, padding: 24 }}>
    <h1 style={{ color: "#007bff" }}>{data.firstName} {data.lastName}</h1>
    <p><b>Email:</b> {data.email} | <b>Phone:</b> {data.phone}</p>
    <h3 style={{ borderBottom: "1px solid #007bff" }}>Education</h3>
    <ul>
      {data.education?.map((edu, idx) => (
        <li key={idx}>
          <b>{edu.degree}</b> at {edu.institution} ({edu.year}) - CGPA: {edu.cgpa}
        </li>
      ))}
    </ul>
    {/* ...other sections styled differently... */}
  </div>
);

const ResumeTemplate = forwardRef(({ data, templateType }, ref) => {
  let TemplateComponent;
  switch (templateType) {
    case "modern":
      TemplateComponent = ModernTemplate;
      break;
    case "classic":
    default:
      TemplateComponent = ClassicTemplate;
      break;
  }
  return (
    <div ref={ref}>
      <TemplateComponent data={data} />
    </div>
  );
});

export default ResumeTemplate;