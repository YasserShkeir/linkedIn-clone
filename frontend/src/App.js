import "./App.css";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import SignInPage from "./pages/signin/SignInPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<SignInPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
