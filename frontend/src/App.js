import "./App.css";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import LandingPage from "./pages/signin/LandingPage";
import EmployerPage from "./pages/employer/EmployerPage";
import CreateJobPage from "./pages/employer/CreateJobPage";
import EmployeePage from "./pages/employee/EmployeePage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/employer" element={<EmployerPage />} />
        <Route path="/employer/createJob" element={<CreateJobPage />} />
        <Route path="/employee" element={<EmployeePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
