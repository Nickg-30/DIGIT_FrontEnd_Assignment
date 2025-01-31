import React, { useMemo, useState } from "react";
import { Loader, LabelFieldPair, CardLabelError, CardText, CardHeader } from "@egovernments/digit-ui-react-components";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import _ from "lodash";
import RadioButtons from "../../../../../../react-components/src/atoms/RadioButtons";

const CustomRadioCard = ({ t, config, onSelect, formData = {}, errors, label }) => {
  const Digit = window.Digit || {};
  const history = useHistory();
  const inputs = useMemo(() => config?.populators?.inputs, [config?.populators?.inputs]);
  const [isRejected, setIsRejcted] = useState(history.location.state?.isRejected || "");
  function setValue(value, name, input) {
    onSelect(config.key, { ...formData[config.key], [name]: value });
  }
  return (
    <div>
      {inputs?.map((input, index) => {
        let currentValue = (formData && formData[config.key] && formData[config.key][input.name]) || "";

        return (
          <React.Fragment key={index}>
            {errors[input.name] && <CardLabelError>{t(input.error)}</CardLabelError>}

            <LabelFieldPair style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <CardHeader style={{ fontSize: "30px" }} className="card-label-smaller">
                {t(input.label)}
              </CardHeader>

              <CardText style={{ fontWeight: 200 }} className="card-label-smaller">
                {t(input.subLabel)}
              </CardText>

              <div className="field" style={{ width: "50%" }}>
                <RadioButtons
                  style={{ display: "flex", justifyContent: "flex-start", gap: "3rem", ...input.styles }}
                  options={input?.options || []}
                  key={input.name}
                  optionsKey={input?.optionsKey}
                  value={formData && formData[config.key] ? formData[config.key][input.name] : undefined}
                  onSelect={(e) => {
                    setValue(e, input.name, input);
                  }}
                  selectedOption={formData && formData[config.key] ? formData[config.key][input.name] : undefined}
                  defaultValue={formData && formData[config.key] ? formData[config.key][input.name] : undefined}
                  t={t}
                  errorStyle={errors?.[input.name]}
                  disabled={isRejected ? true : false}
                  isRejected={isRejected}
                />
              </div>
            </LabelFieldPair>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default CustomRadioCard;
