import { useState } from "react";
import FormFieldsColumn1 from "./FormFieldsColumn1";
import FormFieldsColumn2 from "./FormFieldsColumn2";
import FormFieldsColumn3 from "./FormFieldsColumn3";
import { statusOptions } from "../../utils/creditTransferDownOptions";
import { saveFormDataToTxt } from "../../../apis/formApi";
import directoriesNames from "../../../constants/directoriesNames";

export default function CreditCardForm() {
  const [formData, setFormData] = useState({
    // column1
    env: "preprod",
    bankType: "test",
    debtorBankCode: "SAINMA",
    debtorIBAN: "SA0915000609128913370007",
    creditorBankCode: "SANBOB",
    creditorIBAN: "SA9345000000162106637001",
    creditTransferCount: "1",
    status: "ACTC",
    statusCode: "AC03",
    // column2
    statusTxt: "accepted",
    amount: "25",
  });
  const fileName = "testdata.txt";
  const handleOnChange = (e) => {
    const filedName = e.target.name;
    const fieldValue = e.target.value;

    setFormData({
      ...formData,
      [filedName]: fieldValue,
    });
  };

  const disableStatusCode = () => status === statusOptions()[0].value;

  const downloadData = () => {
    let newFormData = { ...formData };
    if (disableStatusCode()) {
      delete newFormData.statusCode;
    }
    saveFormDataToTxt({ formData: newFormData, fileName: `${directoriesNames.CREDIT_TRANSFER}/${fileName}` });
  };

  return (
    <div className={"flex justify-center items-center"}>
      <div className="bg-white shadow-md rounded pl-[3rem] pr-[3rem] pt-[3rem] pb-[4rem]">
        {/*column-1*/}
        <div className={"flex justify-center"}>
          <div className={`w-[25rem]`}>
            <FormFieldsColumn1
              formData={formData}
              fileName={fileName}
              handleOnChange={handleOnChange}
            />
          </div>
          <div className={`w-[25rem] pl-[3rem]`}>
            <FormFieldsColumn2
              formData={formData}
              handleOnChange={handleOnChange}
            />
          </div>
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
