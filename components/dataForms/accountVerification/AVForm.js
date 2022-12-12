import { useState, useEffect } from "react";
import { saveFormDataToTxt } from "../../../apis/formApi";
import FormFieldsAV from "./FormFieldsAV";
import directoriesNames from "../../../constants/directoriesNames";
import ProgressBar from "react-bootstrap/ProgressBar";
import io from "socket.io-client";
import { SERVER_URL, SOCKET_URL } from "../../../configs/server";

const socket = io(SOCKET_URL);

export default function AVForm() {
  const [Status, setStatus] = useState(0);
  const [progress, setprogress] = useState(0);
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
    setprogress(0);
    saveFormDataToTxt({
      formData: { ...formData },
      fileName: `${directoriesNames.ACCOUNT_VERIFICATION}/${fileName}`,
      emitType: "progress_account",
      formName: "account_verification",
    });
    setStatus(1);
  };

  useEffect(() => {
    console.log("checking progress");
    socket.on("progress_account", (e) => {
      console.log("got a trigger");
      if (e >= 100) {
        setprogress(100);
        setTimeout(() => {
          setStatus(2);
        }, 500);
      } else setprogress(e);
    });
  }, []);

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
                href={`${SERVER_URL}/forms/download/account_verification/validation_result.txt`}
                download
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
