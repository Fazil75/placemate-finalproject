import React, { useState } from "react";
import { useForm, FormProvider, useFormContext, useFieldArray } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AI_RESUME_ENDPOINT = process.env.REACT_APP_AI_RESUME_ENDPOINT;

function PersonalSection() {
  const { register, formState: { errors } } = useFormContext();
  return (
    <section>
      <h3>Personal Info</h3>
      <input placeholder="First Name" {...register("firstName", { required: true })} />
      <p>{errors.firstName && "First name is required"}</p>
      <input placeholder="Last Name" {...register("lastName", { required: true })} />
      <p>{errors.lastName && "Last name is required"}</p>
      <input placeholder="Email" {...register("email", { required: true })} />
      <p>{errors.email && "Email is required"}</p>
      <input placeholder="Phone" {...register("phone")} />
    </section>
  );
}
function EducationSection() {
  const { register, control } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control, name: "education" });
  return (
    <section>
      <h3>Education</h3>
      {fields.map((field, idx) => (
        <div key={field.id}>
          <input placeholder="Degree" {...register(`education.${idx}.degree`, { required: true })} />
          <input placeholder="Institution" {...register(`education.${idx}.institution`, { required: true })} />
          <input placeholder="Year" type="number" {...register(`education.${idx}.year`, { required: true })} />
          <input placeholder="CGPA" type="number" step="0.01" {...register(`education.${idx}.cgpa`)} />
          {fields.length > 1 && (
            <button type="button" onClick={() => remove(idx)}>Remove</button>
          )}
        </div>
      ))}
      <button type="button" onClick={() => append({ degree: "", institution: "", year: "", cgpa: "" })}>Add Education</button>
    </section>
  );
}
function SkillsSection() {
  const { register, control } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control, name: "skills" });
  return (
    <section>
      <h3>Skills</h3>
      {fields.map((field, idx) => (
        <div key={field.id}>
          <input placeholder="Skill" {...register(`skills.${idx}`, { required: true })} />
          {fields.length > 1 && (
            <button type="button" onClick={() => remove(idx)}>Remove</button>
          )}
        </div>
      ))}
      <button type="button" onClick={() => append("")}>Add Skill</button>
    </section>
  );
}
function ProjectsSection() {
  const { register, control } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control, name: "projects" });
  return (
    <section>
      <h3>Projects</h3>
      {fields.map((field, idx) => (
        <div key={field.id}>
          <input placeholder="Title" {...register(`projects.${idx}.title`, { required: true })} />
          <input placeholder="Description" {...register(`projects.${idx}.description`, { required: true })} />
          <input placeholder="Technologies" {...register(`projects.${idx}.tech`, { required: true })} />
          {fields.length > 1 && (
            <button type="button" onClick={() => remove(idx)}>Remove</button>
          )}
        </div>
      ))}
      <button type="button" onClick={() => append({ title: "", description: "", tech: "" })}>Add Project</button>
    </section>
  );
}
function ExperienceSection() {
  const { register, control } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control, name: "experience" });
  return (
    <section>
      <h3>Experience</h3>
      {fields.map((field, idx) => (
        <div key={field.id}>
          <input placeholder="Company" {...register(`experience.${idx}.company`, { required: true })} />
          <input placeholder="Role" {...register(`experience.${idx}.role`, { required: true })} />
          <input placeholder="Duration" {...register(`experience.${idx}.duration`, { required: true })} />
          <input placeholder="Highlights" {...register(`experience.${idx}.bullets`)} />
          {fields.length > 1 && (
            <button type="button" onClick={() => remove(idx)}>Remove</button>
          )}
        </div>
      ))}
      <button type="button" onClick={() => append({ company: "", role: "", duration: "", bullets: "" })}>Add Experience</button>
    </section>
  );
}
function CertificationsSection() {
  const { register, control } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control, name: "certifications" });
  return (
    <section>
      <h3>Certifications</h3>
      {fields.map((field, idx) => (
        <div key={field.id}>
          <input placeholder="Certification" {...register(`certifications.${idx}`)} />
          {fields.length > 1 && (
            <button type="button" onClick={() => remove(idx)}>Remove</button>
          )}
        </div>
      ))}
      <button type="button" onClick={() => append("")}>Add Certification</button>
    </section>
  );
}

export default function ResumeGeneratePage() {
  const navigate = useNavigate();
  const defaultValues = {
    firstName: "", lastName: "", email: "", phone: "",
    education: [{ degree: "", institution: "", year: "", cgpa: "" }],
    skills: [""],
    projects: [{ title: "", description: "", tech: "" }],
    experience: [{ company: "", role: "", duration: "", bullets: "" }],
    certifications: [""],
  };
  const methods = useForm({ defaultValues });
  const { handleSubmit } = methods;
  const [template, setTemplate] = useState("modern");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      // Call backend AI resume generator
      const response = await fetch(AI_RESUME_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resumeData: data, templateType: template }),
      });
      const result = await response.json();
      if (!result.success) throw new Error("AI resume generation failed");
      // Pass the AI-generated resume text to the result page
      navigate("/resume-result", { state: { resumeData: data, templateType: template, aiResumeText: result.resumeText } });
    } catch (err) {
      alert("Failed to generate resume: " + err.message);
    }
    setLoading(false);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: 900, margin: "0 auto", padding: 20 }}>
        <PersonalSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationsSection />
        <div style={{ marginTop: 20, textAlign: "center" }}>
          <label>Template: </label>
          <select value={template} onChange={(e) => setTemplate(e.target.value)}>
            <option value="modern">Modern</option>
            <option value="simple">Simple</option>
            <option value="creative">Creative</option>
            <option value="ats">ATS-Friendly</option>
          </select>
        </div>
        <div style={{ marginTop: 24, textAlign: "center" }}>
          <button type="submit" disabled={loading}>{loading ? "Generating..." : "Generate Resume"}</button>
        </div>
      </form>
    </FormProvider>
  );
}