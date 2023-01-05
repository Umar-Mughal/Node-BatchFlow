import axios from "axios";
import {SERVER_URL, SOCKET_URL} from "../configs/server";
import { toast } from "react-toastify";

import io from "socket.io-client";

const socket = io(SOCKET_URL);

export const saveFormDataToTxt = async ({
  formData,
  fileName,
  emitType,
  formName,
}) => {
  try {
    const res = await axios.post(`${SERVER_URL}/forms/save`, {
      formData,
      fileName,
      formName,
    });
    const { status } = res.data;

    if (status === "success") {
      console.log("triggering the socket again", emitType);
      socket.emit(emitType);
      toast.success("Action is successful.", {
        autoClose: 2000,
      });
    } else {
      toast.error("Something went wrong. Please try again !!!", {
        autoClose: 2000,
      });
    }
  } catch (e) {
    console.log(e);
    toast.error("Something went wrong. Please try again !!!", {
      autoClose: 2000,
    });
  }
};
