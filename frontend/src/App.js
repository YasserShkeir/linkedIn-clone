import "./App.css";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import LandingPage from "./pages/signin/LandingPage";
import EmployerPage from "./pages/employer/EmployerPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/employer" element={<EmployerPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
