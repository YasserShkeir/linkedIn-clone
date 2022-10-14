import "./App.css";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import SignInPage from "./pages/signin/SignInPage";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path={"/"} element={<SignInPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
