import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import StudentRegisterPage from './StudentRegisterPage';
import StaffRegisterPage from './StaffRegisterPage';
import ForgotPasswordPage from './ForgotPasswordPage';
import HomePage from './HomePage';
import StudentDashboard from './StudentDashboard';
import MockInterview from './MockInterview';
import AptitudeQuiz from './AptitudeQuiz';
import PlacementDashboard from "./PlacementDashboard";
import Jobs from "./Jobs";
import Eligibility from "./Eligibility";
import Shortlisting from "./Shortlisting";
import ResumeFilter from "./ResumeFilter";
import Ranking from "./Ranking";
import Reports from "./Reports";
import CareerGuidanceDashboard from './CareerGuidanceDashboard';
import ExamNotifications from "./ExamNotifications";
import HigherStudies from "./HigherStudies";
import InternshipUpdates from "./InternshipUpdates";
import DepartmentDashboard from  './DepartmentDashboard';
import DepartmentRegisterPage from './DepartmentRegisterPage';
import PlacementReadinessPage from './PlacementReadinessPage';
import DepartmentNoticesPage from './DepartmentNoticesPage';
import ManageStudentsPage from './ManageStudentsPage';  
import ResumeGeneratePage from './ResumeGeneratePage';
import ResumeResultPage from './ResumeResultPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register-student" element={<StudentRegisterPage />} />
          <Route path="/register-staff" element={<StaffRegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />

          <Route path="/mock-interview" element={<MockInterview />} />
          <Route path="/aptitude-quiz" element={<AptitudeQuiz />} />
          <Route path="/placement-dashboard" element={<PlacementDashboard />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/eligibility" element={<Eligibility />} />
          <Route path="/shortlisting" element={<Shortlisting />} />
          <Route path="/resume-filter" element={<ResumeFilter />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/career-guidance-dashboard" element={<CareerGuidanceDashboard />} />
          <Route path="/exam-notifications" element={<ExamNotifications />} />
          <Route path="/higher-studies" element={<HigherStudies />} />
          <Route path="/internship-updates" element={<InternshipUpdates />} />
          <Route path="/register-department" element={<DepartmentRegisterPage />} />
          <Route path="/department-dashboard" element={<DepartmentDashboard />} />
          <Route path="/placement-readiness" element={<PlacementReadinessPage />} />
          <Route path="/department-notices" element={<DepartmentNoticesPage />} />
          <Route path="/manage-students" element={<ManageStudentsPage />} />
          <Route path="/resume-generate" element={<ResumeGeneratePage />} />
          <Route path="/resume-result" element={<ResumeResultPage />} />

          {/* Add dashboards as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
