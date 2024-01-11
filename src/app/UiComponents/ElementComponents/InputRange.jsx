// components/RangeInput.js
"use client";
const RangeInput = ({ gb, value, setValue }) => {
  const handleInputChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    setValue(newValue);
  };

  return (
    <div className="outliners input_range">
      <p>
        {value}-{gb}
      </p>
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default RangeInput;
