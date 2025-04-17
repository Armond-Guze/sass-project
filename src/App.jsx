import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CompaniesCard from "./components/CompaniesCard";
import PayrollCard from "./components/PayrollCard";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Header />
        <CompaniesCard />
        <PayrollCard />
      </BrowserRouter>
    </div>
  );
};

export default App;
