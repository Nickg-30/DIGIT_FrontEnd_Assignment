import { FormComposerV2, Toast } from "@egovernments/digit-ui-react-components";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const EnterAadhaar = ({ t, onSelect, config, params, refreshPath }) => {
  const history = useHistory();
  const [showErrorToast, setShowErrorToast] = useState(false);
  const validateFormData = (data) => {
    let isValid = true;
    if (!(data?.AadhaarInput?.aadharNumber.length === 12)) {
      isValid = false;
    }

    return isValid;
  };

  const closeToast = () => {
    setShowErrorToast(false);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      closeToast();
    }, 2000);

    return () => clearTimeout(timer);
  }, [closeToast]);
  
  useEffect(() => {
    if (!params?.idType) {
      history.push(refreshPath);
    }
  }, [params, history]);

  return (
    <div className="enter-addhar">
      <FormComposerV2
        config={config}
        t={t}
        noBoxShadow
        inline
        label={"Get OTP"}
        onSecondayActionClick={() => { }}
        onSubmit={(data) => {
          if (!validateFormData(data)) {
            setShowErrorToast(!validateFormData(data));
          } else {
            onSelect(data?.AdhaarInput?.aadharNumber);
          }
          return;
        }}
        defaultValues={{ AdhaarInput: { aadharNumber: params?.adhaarNumber } }}
        submitInForm
      ></FormComposerV2>

      {showErrorToast && <Toast error={true} label={t("INVALID_AADHAAR_ERROR_MESSAGE")} isDleteBtn={true} onClose={closeToast} />}
    </div>
  );
};

export default EnterAadhaar;
