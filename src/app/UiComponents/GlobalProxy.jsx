import Link from "next/link";
import { globalCn } from "./components/constatns.js";

function GlobalProxy({ t }) {
  return (
    <div className="grid md:grid-cols-[1fr,2fr] border-solid border my-[100px] rounded-[12px] overflow-hidden ">
      <div className="create_section p-8  text-[#ffff] bg-[#F4A900] ">
        <h4 className="text-xl font-semibold mb-2 text-[24px]">
          {t["global_p_title"]}
        </h4>
        <p className="text-[#fff] text-[20px] my-[20px]">
          {t["global_p_subtitle"]}
        </p>
        <Link href={"/register"}>
          <button className="outliners mt-4">{t["start_now"]}</button>
        </Link>
      </div>
      <div className="create_map grid md:grid-cols-3 md:gap-4 gap-8 p-8 py-16">
        {globalCn.map((item, index) => (
          <div className="proxy_item flex items-center gap-2" key={index}>
            <img src={item.img} alt="" />
            <div className="column">
              <p className="text-sm">{item.name}</p>
              <b className="text-sm">{item.sub}</b>
            </div>
          </div>
        ))}
        <div className="proxy_item flex items-center gap-2">
          <img src={"/world.svg"} alt="" />
          <div className="column">
            <p className="text-sm">+ 190 {t["countries"]}</p>
            <Link href="/proxy-countries" className="text-sm">
              {t["see_all_location"]}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GlobalProxy;
