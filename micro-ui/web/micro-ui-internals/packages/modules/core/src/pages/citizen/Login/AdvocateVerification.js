import { FormComposerV2, Toast } from "@egovernments/digit-ui-react-components";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";

function AdvocateVerification({ config, t, onDocumentUpload, params, refreshPath, onFormValueChange }) {
  const [showErrorToast, setShowErrorToast] = useState(false);
  const history = useHistory();
  const validateFormData = (data) => {
    let isValid = true;
    config.forEach((curr) => {
      if (!isValid) return;
      if (!(curr.body[0].key in data) || !data[curr.body[0].key]) {
        isValid = false;
      }
      curr.body[0].populators.inputs.forEach((input) => {
        if (!isValid) return;
        if (input?.isMandatory && !(input.name in data[curr.body[0].key])) {
          isValid = false;
        }
      });
    });
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
    if (!params?.mobileNumber) {
      history.push(refreshPath);
    }
  }, [params, history]);

  return (
    <div className="advocate-additional-details upload-id">
      <FormComposerV2
        config={config}
        t={t}
        onSubmit={(data) => {
          if (!validateFormData(data)) {
            setShowErrorToast(!validateFormData(data));
          } else {
            onDocumentUpload(data);
          }
          return;
        }}
        onFormValueChange={onFormValueChange}
        noBoxShadow
        inline
        label={"Continue"}
        defaultValues={params?.advVerObj || {}}
        submitInForm
      ></FormComposerV2>
      {showErrorToast && <Toast error={true} label={"Please fill all the mandatory fields"} isDleteBtn={true} onClose={closeToast} />}
    </div>
  );
}
export default AdvocateVerification;
