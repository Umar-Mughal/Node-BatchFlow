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
    ctgypurp,
    ctname,
    cdtracctname,
    ultmtDbtr_ctctdtls_nm,
    cdtr_ctctdtls_nm,
    rmtInf_ustrd,
    rmtInf_strd_addtlRmtInf,
    ultmtCdtr_ctname,
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
      <Input
        label={"ctgypurp"}
        name={"ctgypurp"}
        value={ctgypurp}
        onChange={handleOnChange}
        tooltipText={
          "Example from sample credit transfer xml:\n" +
          "\n" +
          "<ct:CtgyPurp>\n" +
          "\n" +
          "<ct:Cd>BONU</ct:Cd>\n" +
          "\n" +
          "</ct:CtgyPurp>"
        }
      />
      <Input
        label={"ctname"}
        name={"ctname"}
        value={ctname}
        onChange={handleOnChange}
        tooltipText={
          "Example from sample credit transfer xml:\n" +
          "\n" +
          "<ct:Cdtr>\n" +
          "\n" +
          "<ct:Nm>Test Name</ct:Nm>\n" +
          "\n" +
          "<ct:Cdtr>"
        }
      />
      <Input
        label={"cdtracctname"}
        name={"cdtracctname"}
        value={cdtracctname}
        onChange={handleOnChange}
        tooltipText={
          "Example from sample credit transfer xml:\n" +
          "\n" +
          "<ct:CdtrAcct>\n" +
          "\n" +
          "<ct:Nm>Test Name</ct:Nm>\n" +
          "\n" +
          "</ct:CdtrAcct>"
        }
      />
      <Input
        label={"ultmtDbtr_ctctdtls_nm"}
        name={"ultmtDbtr_ctctdtls_nm"}
        value={ultmtDbtr_ctctdtls_nm}
        onChange={handleOnChange}
        tooltipText={
          "Debtor Contact details XPath: Document/FIToFICstmrCdtTrf/CdtTrfTxInf/UltmtDbtr/CtctDtls/Nm"
        }
      />
      <Input
        label={"cdtr_ctctdtls_nm"}
        name={"cdtr_ctctdtls_nm"}
        value={cdtr_ctctdtls_nm}
        onChange={handleOnChange}
        tooltipText={
          "Creditor Contact details XPath: Document/FIToFICstmrCdtTrf/CdtTrfTxInf/Cdtr/CtctDtls/Nm"
        }
      />
      <Input
        label={"rmtInf_ustrd"}
        name={"rmtInf_ustrd"}
        value={rmtInf_ustrd}
        onChange={handleOnChange}
        tooltipText={
          "Remittance Information Unstructured XPath: Document/FIToFICstmrCdtTrf/CdtTrfTxInf/RmtInf/Ustrd"
        }
      />
      <Input
        label={"rmtInf_strd_addtlRmtInf"}
        name={"rmtInf_strd_addtlRmtInf"}
        value={rmtInf_strd_addtlRmtInf}
        onChange={handleOnChange}
        tooltipText={
          "Additional Remittance Information XPath: Document/FIToFICstmrCdtTrf/CdtTrfTxInf/RmtInf/Strd/AddtlRmtInf"
        }
      />
      <Input
        label={"ultmtCdtr_ctname"}
        name={"ultmtCdtr_ctname"}
        value={ultmtCdtr_ctname}
        onChange={handleOnChange}
        tooltipText={
          "Ultimate creditor XPath: Document/CdtrPmtActvtnReq/PmtInf/CdtTrfTx/UltmtCdtr/Nm"
        }
      />
    </>
  );
}
