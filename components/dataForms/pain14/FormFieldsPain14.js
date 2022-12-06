import Input from "../../html/Input";
import Select from "../../html/Select";
import {
  envOptions,
  bankTypeOptions,
} from "../../utils/creditTransferDownOptions";

export default function FormFieldsPain14({
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
    count,
    status,
    statusCode,
    orgnlPmtInfId,
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
        label={"OrgnlPmtInfId"}
        name={"orgnlPmtInfId"}
        value={orgnlPmtInfId}
        onChange={handleOnChange}
      />
      <Input
        label={"Count"}
        name={"count"}
        value={count}
        onChange={handleOnChange}
        type={"number"}
        min="1"
        max="500"
        tooltipText={
          "Any number larger than one.  For example, 50. It will mean the automation will send 50 different account verification requests. We need to be careful to ensure that we do not generate un-necessary large requests"
        }
      />
      <Input
        label={"Status"}
        name={"status"}
        value={status}
        onChange={handleOnChange}
        tooltipText={
          "<rp:TxInfAndSts>\n" +
          "<rp:TxSts>${status}</rp:TxSts> this field from pain14 xml file"
        }
      />
      <Input
        label={"StatusCode"}
        name={"statusCode"}
        value={statusCode}
        onChange={handleOnChange}
        tooltipText={"when status is rejected"}
      />
    </>
  );
}
