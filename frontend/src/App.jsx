import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CompanyPage from "./pages/CompanyPage";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header>
        <Navigation></Navigation>
      </Header>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company/:ticker" element={<CompanyPage />} />
        </Routes>
      </Router>
      <Footer></Footer>
    </>
  );
}

export default App;
