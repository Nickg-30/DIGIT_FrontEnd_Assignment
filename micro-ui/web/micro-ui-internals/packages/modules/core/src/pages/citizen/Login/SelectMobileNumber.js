import React from "react";
import FormStep from "../../../../../../react-components/src/molecules/FormStep";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const SelectMobileNumber = ({ t, onSelect, showRegisterLink, isRegister, mobileNumber, onMobileChange, config, canSubmit }) => {
  return (
    <div className="login-form register">
      <FormStep
        isDisabled={!(mobileNumber.length === 10 && mobileNumber.match(window?.Digit.Utils.getPattern("MobileNo")) && canSubmit)}
        onSelect={onSelect}
        config={config}
        t={t}
        componentInFront="+91"
        onChange={onMobileChange}
        value={mobileNumber}
      ></FormStep>
      {!isRegister && (
        <h3>
          Don’t have an account?
          <span className="link">
            <Link to={"/works-ui/citizen/register"}>Register here</Link>
          </span>
        </h3>
      )}
    </div>
  );
};

export default SelectMobileNumber;
