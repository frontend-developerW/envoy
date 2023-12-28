import { countries } from "./components/constatns.js";
import { useSelector, useDispatch } from 'react-redux'

function ProxyCountries({ t }) {

    const currentLocale = useSelector((state) => state.counter.lang)
    return (
    <div className="grid md:grid-cols-[1fr,2fr] border-solid border my-[100px] rounded-[12px] overflow-hidden md:relative md:-left-[5%] md:w-[110%]">
      <div className="create_section p-8  text-[#ffff] bg-[#F4A900] ">
        <h4 className="text-xl font-semibold mb-2 text-[24px]">
          {t["global_p_title"]}
        </h4>
        <p className="text-[#fff] text-[20px] my-[20px]">
          {t["global_p_subtitle"]}
        </p>
        <button className="outliners mt-4">{t["start_now"]}</button>
      </div>
      <div className="create_map grid md:grid-cols-3 md:gap-4 gap-8 p-8 py-16">
        <div className="flex flex-col">
          {countries[0][currentLocale].map((item, index) => (
            <p key={index}>{item}</p>
          ))}
          <br />
          {countries[1][currentLocale].map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <div className="flex flex-col">
          {countries[2][currentLocale].map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <div className="flex flex-col">
          {countries[3][currentLocale].map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProxyCountries;
