import Input from "../../html/Input";
import Select from "../../html/Select";
import {
  statusOptions,
  envOptions,
  bankTypeOptions,
} from "../../utils/creditTransferDownOptions";

export default function FormFieldsColumn2({ formData, handleOnChange }) {
  const {
    statusTxt,
    amount,
  } = formData;
  return (
    <>
      <Input
        label={"StatusTxt"}
        name={"statusTxt"}
        value={statusTxt}
        onChange={handleOnChange}
        tooltipText={
          "pacs2 message expected response status text, such as ACCEEPTED, REJECTED"
        }
      />
      <Input
        label={"Amount"}
        name={"amount"}
        value={amount}
        onChange={handleOnChange}
        type={"number"}
        tooltipText={
          "IntrBkSttlmAmt and TtlIntrBkSttlmAmt amounts. same amount is used for both fields"
        }
      />
    </>
  );
}
