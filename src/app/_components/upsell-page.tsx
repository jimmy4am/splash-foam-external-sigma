"use client";
import React from "react";
import { UpsellPageType } from "@/interfaces/upsellPage";
import { useUpsellPage } from "./upsell/hooks/useUpsellPage";
import UpsellCreditCardPop from "./upsell/upsell-credit-card-pop";
import LoadingState from "./upsell/upsell-loading-pop";
// import UpsellTemplate1 from "./upsell/upsell-template1";
import UpsellTemplate1Edit from "./upsell/upsell-template1-edit";
// import UpsellTemplate2 from "./upsell/upsell-template2";
import UpsellTemplate2Edit from "./upsell/upsell-template2-edit";
// import UpsellTemplate3 from "./upsell/upsell-template3";
import UpsellTemplate3Edit from "./upsell/upsell-template3-edit";
// import UpsellTemplate4 from "./upsell/upsell-template4";
import UpsellTemplate4Edit from "./upsell/upsell-template4-edit";
// import UpsellTemplate6 from "./upsell/upsell-template6";
import UpsellTemplate6Edit from "./upsell/upsell-template6-edit";
// import UpsellTemplate7 from "./upsell/upsell-template7";
import UpsellTemplate7Edit from "./upsell/upsell-template7-edit";
// import UpsellTemplate9 from "./upsell/upsell-template9";
import UpsellTemplate9Edit from "./upsell/upsell-template9-edit";
// import UpsellTemplate10 from "./upsell/upsell-template10";
import UpsellTemplate10Edit from "./upsell/upsell-template10-edit";
// import UpsellTemplate11 from "./upsell/upsell-template11";
import UpsellTemplate11Edit from "./upsell/upsell-template11-edit";
// import UpsellTemplate12 from "./upsell/upsell-template12";
import UpsellTemplate12Edit from "./upsell/upsell-template12-edit";
// import UpsellTemplate13 from "./upsell/upsell-template13";
import UpsellTemplate13Edit from "./upsell/upsell-template13-edit";
// import UpsellTemplate14 from "./upsell/upsell-template14";
import UpsellTemplate14Edit from "./upsell/upsell-template14-edit";
// import UpsellTemplate15 from "./upsell/upsell-template15";
import UpsellTemplate15Edit from "./upsell/upsell-template15-edit";
// import UpsellTemplate16 from "./upsell/upsell-template16";
import UpsellTemplate16Edit from "./upsell/upsell-template16-edit";

type Props = {
  info: UpsellPageType;
};

const UpsellPage = ({ info }: Props) => {
  const { nextStep, sessionData, loading, showCcPop, setShowCcPop } =
    useUpsellPage();

  const setCurrentUpsell = (info: UpsellPageType) => console.log('info', info);

  const renderTemplate = () => {
    switch (info.template) {
      case "1":
        return (
          // <UpsellTemplate1 info={info} nextStep={nextStep} sessionData={sessionData} />
          <UpsellTemplate1Edit info={info} setCurrentUpsell={setCurrentUpsell} />
        );
      case "2":
        return (
          // <UpsellTemplate2 info={info} nextStep={nextStep} sessionData={sessionData} />
          <UpsellTemplate2Edit info={info} setCurrentUpsell={setCurrentUpsell} />
        );
      case "3":
        return (
          // <UpsellTemplate3 info={info} nextStep={nextStep} sessionData={sessionData} />
          <UpsellTemplate3Edit info={info} setCurrentUpsell={setCurrentUpsell} />
        );
      case "4":
        return (
          // <UpsellTemplate4 info={info} nextStep={nextStep} sessionData={sessionData} />
          <UpsellTemplate4Edit info={info} setCurrentUpsell={setCurrentUpsell} />
        );
      case "6":
        return (
          // <UpsellTemplate6 info={info} nextStep={nextStep} sessionData={sessionData} />
          <UpsellTemplate6Edit info={info} setCurrentUpsell={setCurrentUpsell} />
        );
      case "7":
        return (
          // <UpsellTemplate7 info={info} nextStep={nextStep} sessionData={sessionData} />
          <UpsellTemplate7Edit info={info} setCurrentUpsell={setCurrentUpsell} sessionData={sessionData} />
        );
      case "9":
        return (
          // <UpsellTemplate9 info={info} nextStep={nextStep} sessionData={sessionData} />
          <UpsellTemplate9Edit info={info} setCurrentUpsell={setCurrentUpsell} sessionData={sessionData} />
        );
      case "10":
        return (
        // <UpsellTemplate10 info={info} nextStep={nextStep} sessionData={sessionData} />
        <UpsellTemplate10Edit info={info} setCurrentUpsell={setCurrentUpsell} />
        );
      case "11":
        return (
          // <UpsellTemplate11 info={info} nextStep={nextStep} sessionData={sessionData} />
          <UpsellTemplate11Edit info={info} setCurrentUpsell={setCurrentUpsell} />
        );
      case "12":
        return (
          // <UpsellTemplate12 info={info} nextStep={nextStep} sessionData={sessionData} />
          <UpsellTemplate12Edit info={info} setCurrentUpsell={setCurrentUpsell} nextStep={nextStep} sessionData={sessionData} />
        );
      case "13":
        return (
          // <UpsellTemplate13 info={info} nextStep={nextStep} sessionData={sessionData} />
          <UpsellTemplate13Edit info={info} setCurrentUpsell={setCurrentUpsell} />
        );
      case "14":
        return (
          // <UpsellTemplate14 info={info} nextStep={nextStep} sessionData={sessionData} />
          <UpsellTemplate14Edit info={info} setCurrentUpsell={setCurrentUpsell} />
        );
      case "15":
        return (
          // <UpsellTemplate15 info={info} nextStep={nextStep} sessionData={sessionData} />
          <UpsellTemplate15Edit info={info} setCurrentUpsell={setCurrentUpsell} />
        );
      case "16":
        return (
          // <UpsellTemplate16 info={info} nextStep={nextStep} sessionData={sessionData} />
          <UpsellTemplate16Edit info={info} setCurrentUpsell={setCurrentUpsell} />
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative">
      <LoadingState loading={loading} />
      {showCcPop && <UpsellCreditCardPop setShowCcPop={setShowCcPop} />}
      {renderTemplate()}
    </div>
  );
};

export default UpsellPage;
