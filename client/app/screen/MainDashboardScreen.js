//react
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//screens
import Sidebar from "../components/Sidebar";
import CousreScreen from "./CourseScreen";
import CourseStudentScreen from "./CourseStudentScreen";
import CourseAssessmentsScreen from "./CourseAssessmentsScreen";
import StudentReportScreen from "./StudentReportScreen";
import AssessmentsScreen from "./AssessmentsScreen";
import EditAssessmentScreen from "./EditAssessmentScreen";
import CreateAssessmentScreen from "./CreateAssessmentScreen";
import AssessmentReportScreen from "./AssessmentReportScreen";
import CourseReportScreen from "./CourseReportScreen";
import StudentViewScreen from "./StudentViewScreen";
import DashHome from "./DashHome";

const MainDashboardScreen = () => {
  return (
    <Container>
      <Row>
        <Col xs={3} id="sidebar-wrapper">
          <Sidebar />
        </Col>
        <Col xs={9} id="page-content-wrapper">
          <Routes>
            <Route path="/" element={<DashHome />} />

            {/**Courses **/}
            <Route path="/courses" element={<CousreScreen />} />
            <Route
              path="/courses/:courseId/students"
              element={<CourseStudentScreen />}
            />
            <Route
              path="/courses/:courseId/assessments"
              element={<CourseAssessmentsScreen />}
            />

            {/**Assessments **/}
            <Route path="/assessments" element={<AssessmentsScreen />} />
            <Route
              path="/assessments/create"
              element={<CreateAssessmentScreen />}
            />
            <Route
              path="/assessments/:assessmentId"
              element={<EditAssessmentScreen />}
            />
            {/**Reports **/}
            <Route path="/report/students" element={<StudentReportScreen />} />
            <Route
              path="/report/assessments"
              element={<AssessmentReportScreen />}
            />
            <Route path="/report/courses/" element={<CourseReportScreen />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
};

export default MainDashboardScreen;
