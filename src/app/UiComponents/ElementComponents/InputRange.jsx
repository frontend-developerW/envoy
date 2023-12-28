// components/RangeInput.js
"use client"

import { useState } from "react";
const RangeInput = ({gb}) => {
  const [value, setValue] = useState(50); // Initial value

  const handleInputChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    setValue(newValue);
  };

  return (
    <div className="outliners input_range">
      <p>{value}-{gb}</p>
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
