import Link from "next/link";

function Refferal({ t }) {
  return (
    <div>
      <div className="create_tariff grid md:grid-cols-[1fr,2fr] gap-4 my-[100px] bg-white rounded-[12px] border-solid border overflow-hidden">
        <div className="create_section bg-blue-500 p-8 py-8 text-white">
          <p className="text-[28px] mb-[30px] w-[80%]">{t["refferal_title"]}</p>
          <Link href={'/login'}>
            <button className="outliners mt-4">{t["refferal_button"]}</button>
          </Link>
        </div>
        <div className="flex flex-col p-4 gap-[20px] py-8 justify-end">
          <h1 className="text-[20px] font-[600]">{t["partner_title"]}</h1>
          <p className="text-[#ACACAC] text-[16px] leading-[22px] w-[90%]">
            {t["partner_text"]}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Refferal;
