import { useState } from "react";
import Tooltip from "../misc/Tooltip";

export default function Input({
  label,
  name,
  value,
  placeholder,
  onChange,
  disabled = false,
  type = "text",
  classes,
  ref = null,
  min,
  max,
  tooltipText,
}) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="mb-[2rem]"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover && tooltipText && <Tooltip label={tooltipText} />}

      <label className="block text-[1.2rem] mb-[0.5rem] leading-[2rem] text-gray-700 font-bold">
        {label}
      </label>
      <input
        className={`shadow appearance-none text-[1.4rem] leading-[2rem] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${classes}`}
        name={name}
        value={value}
        disabled={disabled}
        type={type}
        placeholder={label}
        onChange={onChange}
        min={min}
        max={max}
      />
    </div>
  );
}
