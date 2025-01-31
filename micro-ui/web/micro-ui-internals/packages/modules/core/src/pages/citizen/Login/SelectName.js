import React, { useEffect } from "react";
import FormStep from "../../../../../../react-components/src/molecules/FormStep";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { FormComposer } from "../../../../../../react-components/src/hoc/FormComposerV2";

const SelectName = ({ config, onSubmit, params, refreshPath, t }) => {
  const history = useHistory();

  useEffect(() => {
    if (!params?.advVerObj) {
      history.push(refreshPath);
    }
  }, [params, history]);

  const onFormValueChange = (setValue, formData, formState) => {
    console.debug(formData, params)
    const formDataCopy = structuredClone(formData);
    for (const key in formDataCopy) {
      if (Object.hasOwnProperty.call(formDataCopy, key)) {
        const oldValue = formDataCopy[key];
        let value = oldValue;
        if (typeof value === "string") {
          let updatedValue = value
            .replace(/[^a-zA-Z\s]/g, "")
            .trimStart()
            .replace(/ +/g, " ");
          if (updatedValue !== oldValue) {
            const element = document.querySelector(`[name="${key}"]`);
            const start = element?.selectionStart;
            const end = element?.selectionEnd;
            setValue(key, updatedValue);
            setTimeout(() => {
              element?.setSelectionRange(start, end);
            }, 0);
          }
        }
      }
    }
  };

  return (
    <div className="registration-select-name">
      <FormComposer
        heading={config[0].heading}
        text={config[0].text}
        config={config}
        t={t}
        noBoxShadow
        inline={false}
        label={"Continue"}
        onSecondayActionClick={() => {}}
        onFormValueChange={onFormValueChange}
        onSubmit={(props) => onSubmit(props)}
        defaultValues={params?.name || {}}
        submitInForm
      ></FormComposer>
    </div>
  );
};

export default SelectName;
