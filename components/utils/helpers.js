import axios from "axios";
import {SERVER_URL} from "../../configs/server";

export const downloadFormDataToTxt = ({ formData, fileName }) => {
  const formDataKeys = Object.keys(formData).join(",");
  const formDataValues = Object.values(formData).join(",");

  let pom = document.createElement("a");

  pom.setAttribute(
    "href",
    `data:text/plain;charset=utf-8,${formDataKeys}\n${formDataValues}`
  );

  pom.setAttribute("download", fileName);
  pom.style.display = "none";
  document.body.appendChild(pom);
  pom.click();
  document.body.removeChild(pom);
};


export const saveFormDataToTxt = async ({ formData, fileName }) => {
  try {
    const res = await axios.post(`${SERVER_URL}/forms/credit_transfer`, {
      formData,
      fileName
    })
    const {statusCode} = res.data
    console.log("Status code is is success =====", statusCode)
  }catch(e) {
    console.log(e);
  }
};
