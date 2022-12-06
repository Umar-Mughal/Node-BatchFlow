import CreditCardForm from "../dataForms/creditCard/CreditCardForm";
import Pain13Form from "../dataForms/pain13/Pain13Form";
import Pain14Form from "../dataForms/pain14/Pain14Form";
import AVForm from "../dataForms/accountVerification/AVForm";

export default function FormTabsContent() {
  return (
    <div className="tab-content" id="tabs-tabContentJustify">
      {/*content-tab-1*/}
      <div
        className="tab-pane fade show active"
        id="tabs-credit-transfer"
        role="tabpanel"
        aria-labelledby="tabs-home-tabJustify"
      >
        <CreditCardForm />
      </div>
      {/*content-tab-2*/}
      <div
        className="tab-pane fade"
        id="tabs-pain13"
        role="tabpanel"
        aria-labelledby="tabs-pain13-tabJustify"
      >
        <Pain13Form />
      </div>
      {/*content-tab-3*/}
      <div
        className="tab-pane fade"
        id="tabs-pain14"
        role="tabpanel"
        aria-labelledby="tabs-pain14-tabJustify"
      >
        <Pain14Form />
      </div>
      {/*content-tab-4*/}
      <div
        className="tab-pane fade"
        id="tabs-account-verification"
        role="tabpanel"
        aria-labelledby="tabs-account-verification-tabJustify"
      >
        <AVForm />
      </div>
    </div>
  );
}
