import React from "react";
import { AiFillAlert, AiFillDownSquare, AiFillBuild, AiFillCode, AiFillDashboard, AiFillFund } from "react-icons/ai";

const CompaniesCard = () => {
  return (
    <div className="flex flex-col mt-32 items-center">
      <h1>Trusted by these six commpanies so far</h1>
      <div className="flex flex-col items-center">
        <ul className="grid grid-cols-3 gap-y-10 space-x-10 opacity-70 text-center mt-8 text-2xl list-none">
          <li className="flex items-center justify-center">
            <AiFillAlert className="h-12 w-12" />
            Transistor
          </li>
          <li className="flex items-center justify-center font-semibold">
            <AiFillDownSquare className="h-12 w-12" />
            TUPLE
          </li>
          <li className="flex items-center justify-center font-semibold">
            <AiFillBuild className="h-12 w-12"/>
            StaticKit
          </li>
          <li className="flex items-center justify-center">
          <AiFillCode className="h-12 w-12"/>
            Mirage</li>
          <li className="flex items-center justify-center">
          <AiFillDashboard className="h-12 w-12" />
          Laravel</li>
          <li className="flex items-center justify-center font-semibold">
          <AiFillFund className="h-12 w-12" />
          statamic</li>
        </ul>
      </div>
    </div>
  );
};

export default CompaniesCard;
