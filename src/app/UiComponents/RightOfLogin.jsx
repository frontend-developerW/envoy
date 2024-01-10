import { clients_logo } from "./components/constatns.js";

function RighOfLogin({ t, type }) {
  return (
    <div className="p-[40px] w-full md:flex hidden flex-col justify-between ">
      <div className="flex justify-between w-full">
        <h1 className="w-[50%] text-[32px] font-[600]">{t[type]}</h1>
        <div className="flex flex-col items-end">
          <h1 className="w-[100%] text-[32px] font-[600] text-right mb-[50px]">
            {t["login_title"]}
          </h1>
          <img src="/login_icon.svg" alt="" />
        </div>
      </div>
      <div className="fixed top-[20px] left-[20px]">
        {/* <LanguageChanger /> */}
      </div>

      <div className="clients">
        <p className="title_clients my-8 text-[20px]">{t["more1500"]}</p>
        <div className="grid_clients grid md:grid-cols-5 grid-cols-2 gap-10 mt-4">
          {clients_logo.map((item, index) => {
            return (
              <div key={index} className="logo flex items-center gap-2">
                <img src={item.img} alt={item.name} className="w-10 h-10" />
                <p>{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RighOfLogin;
