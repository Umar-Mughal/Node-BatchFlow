import Input from "../../html/Input";
import Select from "../../html/Select";
import {
  statusOptions,
  envOptions,
  bankTypeOptions,
} from "../../utils/creditTransferDownOptions";

export default function FormFieldsColumn1({
  formData,
  handleOnChange,
  fileName,
}) {
  const disableStatusCode = () => status === statusOptions()[0].value;

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
          "any test bank code, example SANBPA, . automation will capture NBPA part to build message id such as transaction id etc..."
        }
      />
      <Input
        label={"DebtorIBAN"}
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
          "test or real bank code, depending on bankType. for example: SANBPA, will capture NBPA part to build message id such as transaction id etc..."
        }
      />
      <Input
        label={"CreditorIBAN"}
        name={"creditorIBAN"}
        value={creditorIBAN}
        onChange={handleOnChange}
        tooltipText={
          "creditor bank IBAN account number, example : SA9345000000162106637001. for successful transfers IBAN should be in correct format with correct number of valid characters. If creditor is real bank then IBAN should be correct number belonging to that bank. if it does not belong then creditor transfer processing might not be successful."
        }
      />
      <Input
        label={"CreditTransferCount"}
        name={"creditTransferCount"}
        value={creditTransferCount}
        onChange={handleOnChange}
        type={"number"}
        min="1"
        max="500"
        tooltipText={
          "Any number larger than one.  For example, 50. It will mean the automation will send 50 different creditor transfers. We need to be careful to ensure that we do not generate un-necessary large credit transfers"
        }
      />
      <Select
        label={"Status"}
        name={"status"}
        value={status}
        onChange={handleOnChange}
        options={[...statusOptions()]}
        tooltipText={
          "pacs2 message status code such as ACTC, RJCT. This is needed only when we send to test banks. when creditor bank is real bank set this as NA"
        }
      />
      {!disableStatusCode() && (
        <Input
          label={"StatusCode"}
          name={"statusCode"}
          value={statusCode}
          onChange={handleOnChange}
          disabled={disableStatusCode()}
          tooltipText={"For txn status RJCT,  status, code is AC03."}
        />
      )}
    </>
  );
}
