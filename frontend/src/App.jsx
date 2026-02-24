import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  //changing the paths so default is home, adding /results to URL goes to results page
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#fcddec]">
        {/*Header shown on every page!*/}
        <Header/>

        <div className = "flex-1">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Results />} />
        </Routes>
        </div>
  
        <Footer />
      </div>
    </BrowserRouter>
  );
}