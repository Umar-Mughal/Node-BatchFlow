import FormFieldsPain13 from "./FormFieldsPain13";
import directoriesNames from "../../../constants/directoriesNames";
import { useState, useEffect } from "react";
import { saveFormDataToTxt } from "../../../apis/formApi";
import ProgressBar from "react-bootstrap/ProgressBar";
import io from "socket.io-client";
import { SERVER_URL, SOCKET_URL } from "../../../configs/server";

const socket = io(SOCKET_URL);

export default function Pain13Form() {
  const [Status, setStatus] = useState(0);
  const [progress, setprogress] = useState(0);
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
    saveFormDataToTxt({
      formData: { ...formData },
      fileName: `${directoriesNames.PAIN13}/${fileName}`,
      emitType: "progress_pain13",
      formName: "pain13",
    });

    setprogress(0);
    setStatus(1);
  };

  useEffect(() => {
    socket.on("progress_pain13", (e) => {
      if (e >= 100) {
        setprogress(100);
        setTimeout(() => {
          setStatus(2);
        }, 500);
      } else setprogress(e);
    });

    return () => {
      socket.off("progress_pain13");
    };
  }, []);

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
                href={`${SERVER_URL}/forms/download/pain13/validation_result.txt`}
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
