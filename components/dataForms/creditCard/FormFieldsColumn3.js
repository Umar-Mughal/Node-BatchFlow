import Input from "../../html/Input";
import Select from "../../html/Select";
import {
  statusOptions,
  envOptions,
  bankTypeOptions,
} from "../../utils/creditTransferDownOptions";

export default function FormFieldsColumn3({ formData, handleOnChange }) {
  const {
    ultmtDbtr_nm,
    cdtr_adrline,
    dbtr_adrline,
    ultmtcdtr_adrline,
    ultmtdbtr_adrline,
    cdtr_strtnm,
    dbtr_strtnm,
    ultmtcdtr_strtnm,
    ultmrdbtr_strtnm,
    dbtr_name,
  } = formData;
  return (
    <>
      <Input
        label={"ultmtDbtr_nm"}
        name={"ultmtDbtr_nm"}
        value={ultmtDbtr_nm}
        onChange={handleOnChange}
        tooltipText={
          "Ultimate debtor XPath: Document/FIToFICstmrCdtTrf/CdtTrfTxInf/UltmtDbtr/Nm. format of name is ${bankCode} ${ultmtDbtr_nm}"
        }
      />
      <Input
        label={"cdtr_adrline"}
        name={"cdtr_adrline"}
        value={cdtr_adrline}
        onChange={handleOnChange}
        tooltipText={
          "creditor address line XPath: Document/FIToFICstmrCdtTrf/CdtTrfTxInf/Cdtr/PstlAdr/AdrLine"
        }
      />
      <Input
        label={"dbtr_adrline"}
        name={"dbtr_adrline"}
        value={dbtr_adrline}
        onChange={handleOnChange}
        tooltipText={
          "debtor address line XPath: Document/FIToFIPmtStsRpt/TxInfAndSts/OrgnlTxRef/Dbtr/PstlAdr/AdrLine"
        }
      />
      <Input
        label={"ultmtcdtr_adrline"}
        name={"ultmtcdtr_adrline"}
        value={ultmtcdtr_adrline}
        onChange={handleOnChange}
        tooltipText={
          "Ultimate creditor address line XPath: Document/CdtrPmtActvtnReq/PmtInf/CdtTrfTx/UltmtCdtr/PstlAdr/AdrLine"
        }
      />
      <Input
        label={"ultmtdbtr_adrline"}
        name={"ultmtdbtr_adrline"}
        value={ultmtdbtr_adrline}
        onChange={handleOnChange}
        tooltipText={
          "Ultimate debtor address line XPath: Document/FIToFICstmrCdtTrf/CdtTrfTxInf/UltmtDbtr/PstlAdr/AdrLine"
        }
      />
      <Input
        label={"cdtr_strtnm"}
        name={"cdtr_strtnm"}
        value={cdtr_strtnm}
        onChange={handleOnChange}
        tooltipText={
          "creditor street name XPath: Document/FIToFICstmrCdtTrf/CdtTrfTxInf/Cdtr/PstlAdr/StrtNm"
        }
      />
      <Input
        label={"dbtr_strtnm"}
        name={"dbtr_strtnm"}
        value={dbtr_strtnm}
        onChange={handleOnChange}
        tooltipText={
          "debtor street name XPath: Document/FIToFIPmtStsRpt/TxInfAndSts/OrgnlTxRef/Dbtr/PstlAdr/StrtNm"
        }
      />
      <Input
        label={"ultmtcdtr_strtnm"}
        name={"ultmtcdtr_strtnm"}
        value={ultmtcdtr_strtnm}
        onChange={handleOnChange}
        tooltipText={
          "Ultimate creditor street name XPath: Document/CdtrPmtActvtnReq/PmtInf/CdtTrfTx/UltmtCdtr/PstlAdr/StrtNm"
        }
      />
      <Input
        label={"ultmrdbtr_strtnm"}
        name={"ultmrdbtr_strtnm"}
        value={ultmrdbtr_strtnm}
        onChange={handleOnChange}
        tooltipText={
          "Ultimate debtor street name XPath: Document/FIToFICstmrCdtTrf/CdtTrfTxInf/UltmtDbtr/PstlAdr/StrtNm"
        }
      />
      <Input
        label={"dbtr_name"}
        name={"dbtr_name"}
        value={dbtr_name}
        onChange={handleOnChange}
        tooltipText={
          "Debtor name XPath: Document/FIToFIPmtStsRpt/TxInfAndSts/OrgnlTxRef/Dbtr/Nm. format of name is <ct:Nm>${bankCode} ${dbtr_name}</ct:Nm>"
        }
      />
    </>
  );
}
