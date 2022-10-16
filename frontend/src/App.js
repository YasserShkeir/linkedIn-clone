import "./App.css";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import LandingPage from "./pages/signin/LandingPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
