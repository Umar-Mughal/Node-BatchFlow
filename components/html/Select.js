import { useState } from "react";
import Tooltip from "../misc/Tooltip";

export default function Select({
  label,
  options,
  value,
  onChange,
  name,
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
      <select
        value={value}
        onChange={onChange}
        name={name}
        className="form-select cursor-pointer appearance-none
      block
      w-full
      px-3
      py-[0.44rem]
      text-[1.4rem]

      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        aria-label="Default select example"
      >
        {options.map((o) => (
          <option value={o.value}>{o.label}</option>
        ))}
      </select>
    </div>
  );
}
