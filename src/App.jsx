import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Pricing from "./pages/PricePlans";
import PricingPlan from "./pages/SinglePricePlan";
import ContactUs from "./pages/ContactUs";
import Dashboard from "./pages/Dashboard";

function App() {
  // const basename = "/heath-insurance-parker";
  const [price, setPrice] = useState("");

  const handlePriceChange = (newPrice) => {
    setPrice(newPrice);
  };

  return (
    <>
      <BrowserRouter basename="/best-health-insurance">
        {/* basename={basename} */}
        {window.location.pathname !== "/pricing" &&
        window.location.pathname !== "/health-pricing" &&
        {
          /* window.location.pathname !== "/create-new-project" &&
      window.location.pathname !== "/brief-project" &&
      window.location.pathname !== "/book-call" &&
        window.location.pathname !== "/brief-project2" */
        } ? (
          <>
            <Navbar />
          </>
        ) : (
          ""
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route
            path="/"
            element={<ContactUs onPriceChange={handlePriceChange} />}
          /> */}
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/health-pricing" element={<PricingPlan />} />
          <Route path="/admin" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
