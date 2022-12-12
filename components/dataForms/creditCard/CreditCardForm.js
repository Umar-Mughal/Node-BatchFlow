import { useState, useEffect } from "react";
import { SERVER_URL, SOCKET_URL } from "../../../configs/server";
import ProgressBar from "react-bootstrap/ProgressBar";

import FormFieldsColumn1 from "./FormFieldsColumn1";
import FormFieldsColumn2 from "./FormFieldsColumn2";
import FormFieldsColumn3 from "./FormFieldsColumn3";
import { statusOptions } from "../../utils/creditTransferDownOptions";
import { saveFormDataToTxt } from "../../../apis/formApi";
import directoriesNames from "../../../constants/directoriesNames";
import io from "socket.io-client";

const socket = io(SOCKET_URL);

export default function CreditCardForm() {
  const [Status, setStatus] = useState(0);
  const [progress, setprogress] = useState(0);
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

    setprogress(0);

    saveFormDataToTxt({
      formData: newFormData,
      fileName: `${directoriesNames.CREDIT_TRANSFER}/${fileName}`,
      emitType: "progress_credit",
      formName: "credit_transfer",
    });

    setStatus(1);
  };

  useEffect(() => {
    socket.on("progress_credit", (e) => {
      if (e >= 100) {
        setprogress(100);
        setTimeout(() => {
          setStatus(2);
        }, 500);
      } else setprogress(e);
    });

    return () => {
      socket.off("progress_credit");
    };
  }, []);

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
          {Status == 1 ? (
            <>
              <div class="progress" style={{ width: "70%" }}>
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  style={{ width: progress + "%", height: "15px" }}
                >
                  <p className="text-center  text-[1.4rem] text-white">
                    {progress}%
                  </p>
                </div>
              </div>
            </>
          ) : (
            <button
              className="bg-[#559284] text-[1.4rem] hover:bg-[#3E8474] text-white font-bold py-3 px-8 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={downloadData}
            >
              Run
            </button>
          )}
        </div>
        {Status == 2 ? (
          <>
            <div className="flex items-center justify-center nter mt-10">
              <a
                className="bg-[#559284] text-[1.4rem] hover:bg-[#3E8474] text-white font-bold py-3 px-8 rounded focus:outline-none focus:shadow-outline ml-5"
                type="button"
                href={`${SERVER_URL}/forms/download/credit_transfer/validation_result.txt`}
                target="_blank"
              >
                Download Validation Results
              </a>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
