import { useState } from "react";
import { downloadFormDataToTxt } from "../../utils/helpers";
import FormFieldsPain13 from "./FormFieldsPain13";

export default function Pain13Form() {
  const [formData, setFormData] = useState({
    env: "preprod",
    bankType: "test",
    debtorBankCode: "SASABB",
    debtorIBAN: "SA0915000609128913370007",
    creditorBankCode: "SAICBK",
    creditorIBAN: "SA9345000000162106637001",
    count: "1",
    status: "RCVD",
    statusCode: "AC03",
  });

  const fileName = "testdata-pain13.txt";

  const handleOnChange = (e) => {
    const filedName = e.target.name;
    const fieldValue = e.target.value;

    setFormData({
      ...formData,
      [filedName]: fieldValue,
    });
  };

  const downloadData = () => {
    downloadFormDataToTxt({
      formData: { ...formData },
      fileName,
    });
  };

  return (
    <div className={"flex justify-center items-center"}>
      <div className="bg-white shadow-md rounded pl-[3rem] pr-[3rem] pt-[3rem] pb-[4rem]">
        {/*column-1*/}
        <div className={"w-[33rem]"}>
          <FormFieldsPain13
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
            Download
          </button>
        </div>
      </div>
    </div>
  );
}
