import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CompanyPage from "./pages/CompanyPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header></Header>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company/:ticker" element={<CompanyPage />} />
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
