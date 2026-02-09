import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";
import Header from "./components/Header";

export default function App() {
  //changing the paths so default is home, adding /results to URL goes to results page
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#fcddec]">
        {/*Header shown on every page!*/}
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}