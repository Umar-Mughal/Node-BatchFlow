import TooltipPackage from "rc-tooltip";
export default function Tooltip({ label }) {
  return (
    <div className={"relative"}>
      <div className={"absolute top-[7rem] z-10"}>
        <TooltipPackage placement="right" trigger={["click"]}>
          <p className={"bg-black text-[1.2rem] text-white p-[1rem]"}>
            {label}
          </p>
        </TooltipPackage>
      </div>
    </div>
  );
}
