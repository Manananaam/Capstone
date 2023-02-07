//react & redux
import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Router
import { BrowserRouter as Router, Route } from "react-router-dom";
import CousreScreen from "./screen/CourseScreen";
import CourseStudentScreen from "./screen/CourseStudentScreen";
import CourseAssessmentsScreen from "./screen/CourseAssessmentsScreen";

// Screen
import StudentReportScreen from "./screen/StudentReportScreen";
import MainDashboardScreen from "./screen/MainDashboardScreen";
import HomeScreen from "./screen/HomeScreen";
import LogInScreen from "./screen/LogInScreen";
import SignUpScreen from "./screen/SignUpScreen";
import AssessmentsScreen from "./screen/AssessmentsScreen";
import EditAssessmentScreen from "./screen/EditAssessmentScreen";
import CreateAssessmentScreen from "./screen/CreateAssessmentScreen";
import { selectAuthState } from "./store/slices/authSlice";

export default function Routes() {
  const { user } = useSelector(selectAuthState);

  return (
    <>
      {/* <Route path="/dashboard" element={<MainDashboardScreen />} /> */}
      <Route path="/" element={<MainDashboardScreen />} />

      <Route path="/courses" element={<CousreScreen />} />
      <Route
        path="/courses/:courseId/students"
        element={<CourseStudentScreen />}
      />
      <Route
        path="/courses/:courseId/assessments"
        element={<CourseAssessmentsScreen />}
      />

      <Route path="/assessments" element={<AssessmentsScreen />}>
        <Route
          path="/assessments/create"
          element={<CreateAssessmentScreen />}
        ></Route>
        <Route
          path="/assessments/:assessmentId"
          element={<EditAssessmentScreen />}
        />
      </Route>
      <Route path="/report/students" element={<StudentReportScreen />} />

      <Route path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LogInScreen />} />
      <Route path="/signup" element={<SignUpScreen />} />

      <Route
        path={"/*"}
        element={
          <h1 className="text-center text-warning mt-4">404: Not Found</h1>
        }
      />
    </>
  );
}