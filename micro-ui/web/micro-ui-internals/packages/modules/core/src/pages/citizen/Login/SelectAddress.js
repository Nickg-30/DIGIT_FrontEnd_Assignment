import { FormComposerV2, Toast } from "@egovernments/digit-ui-react-components";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { FormComposer } from "../../../../../../react-components/src/hoc/FormComposerV2";

const SelectAddress = ({ config, onSelect, t, params, refreshPath }) => {
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
    if (!params?.name) {
      history.push(refreshPath);
    }
  }, [params, history]);

  return (
    <div className="user-address">
      <FormComposer
        config={config}
        t={t}
        onSubmit={(data) => {
          if (!validateFormData(data)) {
            setShowErrorToast(!validateFormData(data));
          } else {
            onSelect(data);
          }
          return;
        }}
        noBoxShadow
        inline
        label={"Continue"}
        buttonStyle={{ backgroundColor: "#007e7e" }}
        onSecondayActionClick={() => {}}
        cardStyle={{ padding: 40, flexDirection: "column" }}
        submitInForm
        // onFormValueChange={onFormValueChange}
        // isDisabled={isDisabled}
        defaultValues={params?.address || {}}
      ></FormComposer>
      {showErrorToast && <Toast error={true} label={"Please fill all the mandatory fields"} isDleteBtn={true} onClose={closeToast} />}
    </div>
  );
};

export default SelectAddress;
