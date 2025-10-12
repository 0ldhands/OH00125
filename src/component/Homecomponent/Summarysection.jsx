import { memo, useContext, useState } from "react";
import { Usercontext } from "../../Context/Context";

const SummarySection = () =>{

  const{theme,setTheme}=useContext(Usercontext)

  return (
  <div className={`${theme ? "border-violet-300 ":"border-gray-600 "} m-5 border-1 rounded-3xl`}>
    <div className="m-3">
      <h3 className={theme ? `text-3xl font-semibold` :`text-3xl font-semibold text-gray-50`}>Summary</h3>
    </div>
    <div className="m-3">
      <p className={theme?`text-gray-600 leading-relaxed` :`text-gray-300 leading-relaxed` }>
        I am a senior-level finance professional with over 15 years of experience in the banking
        industry, specializing in credit analysis and risk management. I have a proven track record
        in driving revenue growth and improving operational efficiency. My skills extend to
        customer relationship management and business development, contributing to sustained growth
        and profitability in my current role at DBS Bank India Ltd. My leadership abilities have
        facilitated the successful setup of new branches and the retention of high-value clients.
      </p>
    </div>
  </div>
);
}

export default memo(SummarySection);
