import Input from "../../html/Input";
import Select from "../../html/Select";
import {
  statusOptionsForAV,
  envOptions,
  bankTypeOptions,
} from "../../utils/creditTransferDownOptions";

export default function FormFieldsPain13({
  formData,
  fileName,
  handleOnChange,
}) {
  const {
    env,
    bankType,
    debtorBankCode,
    debtorIBAN,
    creditorBankCode,
    creditorIBAN,
    creditTransferCount,
    status,
    statusCode,
    prtry,
    prtry_id,
  } = formData;
  return (
    <>
      <Input label={"FileName"} name={"fileName"} value={fileName} disabled />
      <Select
        label={"Env"}
        name={"env"}
        value={env}
        onChange={handleOnChange}
        options={[...envOptions()]}
        tooltipText={"environment against which volume testing will be run."}
      />
      <Select
        label={"BankType"}
        name={"bankType"}
        value={bankType}
        onChange={handleOnChange}
        options={[...bankTypeOptions()]}
        tooltipText={
          "this indicates where creditor bank is test bank or real bank. if it is test bank then automation will send sign on, echo and status messages to the creditor bank.  Assumption is that debtor bank is always test bank, therefore sign on, echo messages are always sent to the debtor bank."
        }
      />
      <Input
        label={"DebtorBankCode"}
        name={"debtorBankCode"}
        value={debtorBankCode}
        onChange={handleOnChange}
        tooltipText={
          "any test bank code, example SASABB, . automation will capture SABB part to build message id such as transaction id etc..."
        }
      />
      <Input
        label={"DebtorBankIBAN"}
        name={"debtorIBAN"}
        value={debtorIBAN}
        onChange={handleOnChange}
        tooltipText={
          "debtor bank IBAN account number, example : SA0915000609128913370007. for successful transfers IBAN should be in correct format with correct number of valid characters"
        }
      />
      <Input
        label={"CreditorBankCode"}
        name={"creditorBankCode"}
        value={creditorBankCode}
        onChange={handleOnChange}
        tooltipText={
          "test or real bank code, depending on bankType. for example: SAICBK, will capture ICBK part to build message id such as transaction id etc..."
        }
      />
      <Input
        label={"CreditorBankIBAN"}
        name={"creditorIBAN"}
        value={creditorIBAN}
        onChange={handleOnChange}
        tooltipText={
          "creditor bank IBAN account number, example : SA9345000000162106637001. for successful transfers IBAN should be in correct format with correct number of valid characters. If creditor is real bank then IBAN should be correct number belonging to that bank. if it does not belong then creditor transfer processing might not be successful."
        }
      />
      <Input
        label={"Count"}
        name={"creditTransferCount"}
        value={creditTransferCount}
        onChange={handleOnChange}
        type={"number"}
        min="1"
        max="500"
        tooltipText={
          "Any number larger than one.  For example, 50. It will mean the automation will send 50 different account verification requests. We need to be careful to ensure that we do not generate un-necessary large requests"
        }
      />
      <Select
        label={"Status"}
        name={"status"}
        value={status}
        options={[...statusOptionsForAV()]}
        onChange={handleOnChange}
        tooltipText={`can be True or False. Ensure that cases are written exactly same way. <p4:Vrfctn>${status}</p4:Vrfctn> comes from this tag in XML`}
      />
      <Input
        label={"StatusCode"}
        name={"statusCode"}
        value={statusCode}
        onChange={handleOnChange}
        tooltipText={`<p4:Prtry>${statusCode}</p4:Prtry> comes from this tag in XML. if status is True then statusCode must be set to 0000.`}
      />
      <Input
        label={"Prtry"}
        name={"prtry"}
        value={prtry}
        onChange={handleOnChange}
        tooltipText={`Name of prtry field in xml document. <p3:Prxy>
<p3:Tp>
<p3:Prtry>${prtry}</p3:Prtry>`}
      />{" "}
      <Input
        label={"prtry_id"}
        name={"prtry_id"}
        value={prtry_id}
        onChange={handleOnChange}
        tooltipText={`<p3:Id>${prtry_id}</p3:Id>`}
      />
    </>
  );
}
