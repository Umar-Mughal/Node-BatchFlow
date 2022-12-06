import { useState } from "react";
import {saveFormDataToTxt} from "../../utils/helpers";
import FormFieldsPain14 from "./FormFieldsPain14";
import directoriesNames from "../../../constants/directoriesNames";

export default function Pain14Form() {
  const [formData, setFormData] = useState({
    env: "preprod",
    bankType: "test",
    debtorBankCode: "SADEUT",
    debtorIBAN: "SA0915000609128913370007",
    creditorBankCode: "SANBOB",
    creditorIBAN: "SA9345000000162106637001",
    orgnlPmtInfId: "20220605SADEUTDEUT6BNC010840267388",
    count: "1",
    status: "RCVD",
    statusCode: "AC03",
  });

  const fileName = "testdata-pain14.txt";

  const handleOnChange = (e) => {
    const filedName = e.target.name;
    const fieldValue = e.target.value;

    setFormData({
      ...formData,
      [filedName]: fieldValue,
    });
  };

  const downloadData = () => {
    saveFormDataToTxt({
      formData: { ...formData },
      fileName: `${directoriesNames.PAIN14}/${fileName}`
    });
  };

  return (
    <div className={"flex justify-center items-center"}>
      <div className="bg-white shadow-md rounded pl-[3rem] pr-[3rem] pt-[3rem] pb-[4rem]">
        {/*column-1*/}
        <div className={"w-[33rem]"}>
          <FormFieldsPain14
            formData={formData}
            fileName={fileName}
            handleOnChange={handleOnChange}
          />
        </div>

        <div className="flex items-center justify-center mt-10">
          <button
            className="bg-[#559284] text-[1.4rem] hover:bg-[#3E8474] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={downloadData}
          >
            Run
          </button>
        </div>
      </div>
    </div>
  );
}
