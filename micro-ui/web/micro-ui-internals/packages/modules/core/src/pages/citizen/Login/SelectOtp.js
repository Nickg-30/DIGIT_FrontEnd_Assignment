import { CardHeader, CardLabelError, CardText, OTPInput } from "@egovernments/digit-ui-react-components";
import React, { Fragment, useState } from "react";
import useInterval from "../../../hooks/useInterval";
import Modal from "../../../../../../react-components/src/hoc/Modal";
import FormStep from "../../../../../../react-components/src/molecules/FormStep";
import { CloseIconWhite } from "../../../../../../react-components/src/atoms/svgindex";

const SelectOtp = ({
  config,
  otp,
  onOtpChange,
  onResend,
  onSelect,
  mobileNumber,
  t,
  isAadhaar,
  error,
  userType = "citizen",
  canSubmit,
  setState,
  params,
  setParams,
}) => {
  const [timeLeft, setTimeLeft] = useState(30);

  useInterval(
    () => {
      setTimeLeft(timeLeft - 1);
    },
    timeLeft > 0 ? 1000 : null
  );

  const onCancel = () => {
    setState((prev) => ({
      ...prev,
      showOtpModal: false,
    }));
    setParams({
      ...params,
      otp: "",
      aadharOtp: "",
      adhaarNumber: "",
    });
  };
  const Heading = (props) => {
    return (
      <h1 style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }} className="heading-m">
        {props.label}
      </h1>
    );
  };

  const CloseBtn = (props) => {
    return (
      <div onClick={props?.onClick}>
        <div className={"icon-bg-secondary"} style={{ backgroundColor: "#505A5F" }}>
          {" "}
          <CloseIconWhite />
        </div>
      </div>
    );
  };

  const handleResendOtp = () => {
    onResend();
    setTimeLeft(2);
  };

  if (userType === "employee") {
    return (
      <Fragment>
        <OTPInput length={6} onChange={onOtpChange} value={otp} />
        {timeLeft > 0 ? (
          <CardText>{`${t("CS_RESEND_ANOTHER_OTP")} ${timeLeft} ${t("CS_RESEND_SECONDS")}`}</CardText>
        ) : (
          <p className="card-text-button resend-otp" onClick={handleResendOtp}>
            {t("CS_RESEND_OTP")}
          </p>
        )}
        {!error && <CardLabelError>{t("CS_INVALID_OTP")}</CardLabelError>}
      </Fragment>
    );
  }

  const onModalSubmit = () => {
    onSelect();
  };

  return (
    <Modal
      headerBarEnd={<CloseBtn onClick={onCancel} />}
      actionSaveLabel={"Verify"}
      actionSaveOnSubmit={onModalSubmit}
      isDisabled={!(otp?.length === 6 && canSubmit)}
      formId="modal-action"
      headerBarMain={
        <React.Fragment>
          <Heading label={isAadhaar ? "Verify your Aadhaar" : "Verify your Mobile Number"} />
          <CardText>{`${config.texts?.cardText}${mobileNumber ? " +91****" + mobileNumber.slice(-4) : ""}`}</CardText>
        </React.Fragment>
      }
      className={"otp-modal-class"}
    >
      <FormStep onSelect={onSelect} t={t} isDisabled={!(otp?.length === 6 && canSubmit)} cardStyle={{ minWidth: "100%", alignItems: "center" }}>
        <OTPInput length={6} onChange={onOtpChange} value={otp} />
        <div className="message">
          <p>
            {timeLeft > 0 ? <span className="time-left">{`Request a new OTP in ${timeLeft} seconds`} </span> : ""}
            <span className={`resend-link ${timeLeft > 0 ? "disabled" : ""}`} onClick={handleResendOtp}>
              Resend OTP
            </span>
          </p>
        </div>
        {error && <CardLabelError>{error}</CardLabelError>}
      </FormStep>
    </Modal>
  );
};

export default SelectOtp;
