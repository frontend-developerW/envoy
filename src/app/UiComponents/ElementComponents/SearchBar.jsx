function SearchBar() {
  return (
    <div>
        <h1 className="text-center md:text-[55px] text-[32px] font-[400] mt-[40px]">Чем мы можем вам помочь?</h1>
      <div className="search_bar flex items-center gap-[10px] md:w-[55%]  mt-[60px] m-auto bg-white shadow-lg md:p-[4px] p-[8px] rounded-[15px]">
        <input
          type="text"
          placeholder="Поиск"
          className="outline-none md:p-[15px] p-[10px] md:px-[30px] px-[15px] w-[100%] text-[16px]"
        />
        <img src="/search.svg" className="md:w-[60px] w-[40px]" alt="" />
      </div>
    </div>
  );
}

export default SearchBar;
