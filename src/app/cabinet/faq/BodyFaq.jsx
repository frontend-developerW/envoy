import React from "react";
import BlueBtn from "../Components/BlutBtn";
import Accordion from "../Components/Accordion";
const insideAccordions = [
  { title: "Section 1", content: "Content for section 1" },
  { title: "Section 2", content: "Content for section 2" },
  { title: "Section 3", content: "Content for section 3" },
];
const accordionItems = [
  {
    title: "Section 1",
    content: <Accordion items={insideAccordions} inside={true} />,
  },
  {
    title: "Section 2",
    content: <Accordion items={insideAccordions} inside={true} />,
  },
  {
    title: "Section 3",
    content: <Accordion items={insideAccordions} inside={true} />,
  },
];
function BodyProfile({ langs }) {
  const lang = langs.cabinet;
  return (
    <div className="md:p-[50px] p-[15px] py-[30px] w-full">
      <h1 className="text-[32px] font-bold mb-[30px]">{lang.faq_title}</h1>
      <Accordion items={accordionItems} />
    </div>
  );
}

export default BodyProfile;
