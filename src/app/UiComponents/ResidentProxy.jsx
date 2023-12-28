function ResidentProxy({ t }) {
  return (
    <div>
      <div className="create_tariff grid md:grid-cols-[1fr,2fr] gap-4 my-[100px] bg-white rounded-[12px] border-solid border overflow-hidden">
        <div className="create_section bg-blue-500 p-8 py-8 text-white">
          <p className="text-[28px] mb-[30px] w-[80%]">{t["proxy"]}</p>
          <button className="outliners mt-4">{t["create"]}</button>
        </div>
        <div className="flex flex-col p-4 gap-[20px] py-8 justify-end">
          <div className="flex gap-[10px]">
            <div className="p-[10px] rounded-[10px] bg-[#F3F7FE] flex items-center gap-[10px]">
              <img src="/fast_star.svg" alt="" />
              <p>10 млн. IP адресов</p>
            </div>
            <div className="p-[10px] rounded-[10px] bg-[#F3F7FE] flex items-center gap-[10px]">
              <img src="/rocket.svg" alt="" />
              <p>99.99% Бесперебойной работы</p>
            </div>
            <div className="p-[10px] rounded-[10px] bg-[#F3F7FE] flex items-center gap-[10px]">
              <img src="/guest.svg" alt="" />
              <p>Полная анонимность</p>
            </div>  
          </div>
          <h1 className="text-[20px] font-[600]">{t["create_tarif_1"]}</h1>
          <p className="text-[#ACACAC] text-[16px] leading-[22px] w-[90%]">
            {t["resident_proxy_text"]}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ResidentProxy;
