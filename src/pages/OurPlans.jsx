import React from "react";
import PlansCard from "../components/PlansCard";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import CarCrashIcon from "@mui/icons-material/CarCrash";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import HandshakeIcon from "@mui/icons-material/Handshake";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";

const OurPlans = () => {
  //   const handleLearnMoreClick = () => {
  //     console.log("Learn More button clicked!");
  //   };
  return (
    <>
      <div className="our-plans-container">
        <div className="plans-heading">
          <h1>Our Health Care Plans</h1>
        </div>
        <div className="cards-style">
          <PlansCard
            icon={CarCrashIcon}
            title="Accident Protector - Accident Coverage"
            description="Accident Protector is an excess medical expense coverage insurance plan, designed to help fill the gap of out-of-pocket expenses you may incur as a result of accidental bodily injury. The plan pays up to the selected excess medical expense amount after the applicable deductible is met."
            buttonText="Learn More"
            // onButtonClick={handleLearnMoreClick}
          />
          <PlansCard
            icon={RequestQuoteIcon}
            title="Income Protector - Accident Disability"
            description="Short Term Accident Disability Insurance can help you pay your bills if you become disabled due to a covered accident. If you become totally disabled due to a covered accident, Income Protector can pay you monthly benefits for up to 12 months. Primary's Benefit Level: $1,500.00 Benefit Payment Period: 3 Months Elimination Period: 14 Days"
          />
        </div>
        <div className="cards-style">
          <PlansCard
            icon={Diversity2Icon}
            title="Life Protector"
            description="Life Protector is a 10 year term life insurance plan that provides peace of mind for your family through valuable life insurance benefits in the event something unforeseen were to happen."
          />
          <PlansCard
            icon={HandshakeIcon}
            title="Association"
            description="Members of the American Independent Business Coalition automatically receive many privileges, discounts and benefits, all at no additional cost, including some of the more popular ones listed below:"
          />
        </div>
        <PlansCard
          icon={MedicalInformationIcon}
          title="MedGuard II"
          description="The MedGuard III Plan provides lump sum benefit payments to the insured to help offset any out of pocket healthcare expenses or other household expenses if a covered critical health incident occurs in the future. Additionally, even if a covered critical health incident does not occur, 100% of the Plan’s benefit amount is paid to the named beneficiary upon the insured’s death. This unique and valuable MedGuard III coverage is achieved by combining the Plan’s 5-year renewable term life benefit payable to the named beneficiary with a stated percentage of the Plan’s life benefit paid in lump sum to the insured for covered critical illnesses, injuries and surgeries. The Life benefit is reduced by the amount of lump sum benefits paid."
        />
      </div>
    </>
  );
};

export default OurPlans;
