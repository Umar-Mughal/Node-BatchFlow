import { useState } from "react";
import {saveFormDataToTxt} from "../../../apis/formApi";
import FormFieldsAV from "./FormFieldsAV";
import directoriesNames from "../../../constants/directoriesNames";

export default function AVForm() {
  const [formData, setFormData] = useState({
    env: "preprod",
    bankType: "test",
    debtorBankCode: "SANBOP",
    debtorIBAN: "SA0915000609128913370007",
    creditorBankCode: "SABSFR",
    creditorIBAN: "SA416161FGH0032474004977611616",
    creditTransferCount: "1",
    status: "True",
    statusCode: "0000",
    prtry: "NATID",
    prtry_id: "1122334455667",
  });

  const fileName = "testdata-av.txt";

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
      fileName: `${directoriesNames.ACCOUNT_VERIFICATION}/${fileName}`
    });
  };

  return (
    <div className={"flex justify-center items-center"}>
      <div className="bg-white shadow-md rounded pl-[3rem] pr-[3rem] pt-[3rem] pb-[4rem]">
        {/*column-1*/}
        <div className={"w-[33rem]"}>
          <FormFieldsAV
            formData={formData}
            fileName={fileName}
            handleOnChange={handleOnChange}
          />
        </div>

        <div className="flex items-center justify-center mt-10">
          <button
            className="bg-[#559284] text-[1.4rem] hover:bg-[#3E8474] text-white font-bold py-3 px-8 rounded focus:outline-none focus:shadow-outline"
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
