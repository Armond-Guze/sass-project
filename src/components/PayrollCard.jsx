import React from "react";
import payrollPicture from "../assets/payroll.webp";

const PayrollCard = () => {
  return (
    <div className="bg-gradient-to-br from-blue-500 mt-24 via-blue-600 to-blue-400 text-white w-full py-20 px-10 flex flex-col items-center">
      
      {/* Header */}
      <div className="text-center max-w-3xl mb-16">
        <h1 className="text-4xl font-bold mb-6">
          Everything you need to run your books.
        </h1>
        <h2 className="text-lg">
          Well everything you need if you aren't that picky about minor details
          like tax compliance.
        </h2>
      </div>

      {/* Content: List + Image */}
      <div className="flex flex-row w-full max-w-7xl justify-between gap-10">
        
        {/* Left - List */}
        <ul className="flex flex-col space-y-10 flex-1">
          <li>
            <h3 className="text-xl font-semibold">Payroll</h3>
            <p className="mt-2 text-sm">
              Keep track of everyone's salaries and whether or not they've been paid.
              <br /> Direct deposit not included.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">Claim expenses</h3>
            <p className="mt-2 text-sm">
              All of your receipts organized into one place. <br />
              As long as you don't mind typing the data in by hand.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">VAT handling</h3>
            <p className="mt-2 text-sm">
              We only sell our software to companies who don't deal with VAT at all,
              <br /> so technically we do all the VAT stuff they need.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">Reporting</h3>
            <p className="mt-2 text-sm">
              Easily export your data into an Excel spreadsheet <br />
              where you can do whatever the hell you want with it.
            </p>
          </li>
        </ul>

        {/* Right - Image */}
        <div className="flex items-start justify-end">
          <img
            src={payrollPicture}
            alt="Payroll Illustration"
            className="w-[1000px] h-auto -mx-30 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default PayrollCard;