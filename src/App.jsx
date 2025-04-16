import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CompaniesCard from "./components/CompaniesCard";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <CompaniesCard />
    </div>
  );
};

export default App;
