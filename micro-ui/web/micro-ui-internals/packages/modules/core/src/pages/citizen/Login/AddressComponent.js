import React, { useMemo } from "react";
import { CardLabel, TextInput, CardLabelError } from "@egovernments/digit-ui-react-components";
import CustomDropdown from "../../../../../../react-components/src/molecules/CustomDropdown";

const AddressComponent = ({ t, config, onSelect, formData = {}, errors }) => {
  const inputs = useMemo(() => config?.populators?.inputs, [config?.populators?.inputs]);

  console.debug("Form", formData?.[config.key], config.key)

  function setValue(value, input) {
    onSelect(config.key, { ...formData[config.key], [input]: value });
  }

  return (
    <div className="address-card-input">
      {inputs.map((input, index) => {
        let currentValue = formData?.[config.key]?.[input.name] || "";
        if (input.type === "text")
          return (
            <React.Fragment key={index}>
              {errors[input.name] && <CardLabelError>{t(input.error)}</CardLabelError>}
              <div className="field">
                <CardLabel className="card-label-smaller">{t(input.label)}</CardLabel>
                <TextInput
                  className="field desktop-w-full"
                  key={input.name}
                  value={formData?.[config.key]?.[input.name]}
                  onChange={(e) => {
                    setValue(e.target.value, input.name);
                  }}
                  disable={input.isDisabled}
                  defaultValue={undefined}
                  {...input.validation}
                />
                {currentValue &&
                  currentValue.length > 0 &&
                  input.validation &&
                  !currentValue.match(window?.Digit.Utils.getPattern(input.validation.patternType) || input.validation.pattern) && (
                    <CardLabelError>{t(input.validation?.errMsg || "CORE_COMMON_INVALID")}</CardLabelError>
                  )}
              </div>
            </React.Fragment>
          );

        if (input.type === "dropdown")
          return (
            <div className="field">
              <CardLabel className="card-label-smaller">{t(input.label)}</CardLabel>
              <CustomDropdown
                t={t}
                label={input?.label}
                type={"dropdown"}
                value={formData?.[config.key]?.[input.name]}
                onChange={(e) => {
                  setValue(e, input.name, input);
                }}
                config={input}
                disable={input?.disable}
                errorStyle={errors?.[input.name]}
              />
            </div>
          );
      })}
    </div>
  );
};

export default AddressComponent;
