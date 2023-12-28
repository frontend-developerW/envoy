import React from "react";
import Accordion from "./ElementComponents/Accordion";
import { faq_examples }  from "./components/constatns.js";

function Faq({t}) {

  return (
    <div>
      <h1 className="text-[32px] font-bold my-12 mt-[100px] md:text-center">
         {t['faq_title']}
      </h1>
      <Accordion items={faq_examples} />
    </div>
  ); 
}

export default Faq;
