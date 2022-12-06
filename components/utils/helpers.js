import axios from "axios";
import {SERVER_URL} from "../../configs/server";

export const saveFormDataToTxt = async ({ formData, fileName }) => {
  try {
    const res = await axios.post(`${SERVER_URL}/forms/save`, {
      formData,
      fileName
    })
    const {statusCode} = res.data
    console.log("Status code is is success =====", statusCode)
  }catch(e) {
    console.log(e);
  }
};
