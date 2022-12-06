import axios from "axios";
import {SERVER_URL} from "../configs/server";
import {toast } from 'react-toastify';

export const saveFormDataToTxt = async ({ formData, fileName }) => {
  try {
    const res = await axios.post(`${SERVER_URL}/forms/save`, {
      formData,
      fileName
    })
    const {status} = res.data

    if(status === 'success') {
      toast.success("Action is successful.", {
        autoClose: 2000,
      })
    }else {
      toast.error("Something went wrong. Please try again !!!", {
        autoClose: 2000,
      })
    }
  }catch(e) {
    console.log(e);
    toast.error("Something went wrong. Please try again !!!", {
      autoClose: 2000,
    })
  }
};
