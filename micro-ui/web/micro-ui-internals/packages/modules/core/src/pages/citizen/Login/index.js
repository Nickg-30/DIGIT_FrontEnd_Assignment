import { Toast } from "@egovernments/digit-ui-react-components";
import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Route, Switch, useHistory, useLocation, useRouteMatch } from "react-router-dom";
import { loginSteps } from "./config";
import SelectMobileNumber from "./SelectMobileNumber";
import SelectName from "./SelectName";
import SelectOtp from "./SelectOtp";
import SelectAddress from "./SelectAddress";
import AdvocateVerification from "./AdvocateVerification";
import SelectId from "./SelectIdType";
import EnterAadhaar from "./EnterAadhaar";
import PendingVerification from "./PendingVerification";
import SelectIdType from "./SelectIdType";

const TYPE_REGISTER = { type: "register" };
const TYPE_LOGIN = { type: "login" };
const DEFAULT_USER = "digit-user";
const DEFAULT_REDIRECT_URL = `/${window?.contextPath}/citizen`;

/* set citizen details to enable backward compatiable */
const setCitizenDetail = (userObject, token, tenantId) => {
  let locale = JSON.parse(sessionStorage.getItem("Digit.initData"))?.value?.selectedLanguage;
  localStorage.setItem("Citizen.tenant-id", tenantId);
  localStorage.setItem("tenant-id", tenantId);
  localStorage.setItem("citizen.userRequestObject", JSON.stringify(userObject));
  localStorage.setItem("locale", locale);
  localStorage.setItem("Citizen.locale", locale);
  localStorage.setItem("token", token);
  localStorage.setItem("Citizen.token", token);
  localStorage.setItem("user-info", JSON.stringify(userObject));
  localStorage.setItem("Citizen.user-info", JSON.stringify(userObject));
};

const getFromLocation = (state, searchParams) => {
  return state?.from || searchParams?.from || DEFAULT_REDIRECT_URL;
};

const Login = ({ stateCode, isUserRegistered = true }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const { path, url } = useRouteMatch();
  const history = useHistory();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isOtpValid, setIsOtpValid] = useState(true);
  const [tokens, setTokens] = useState(null);
  const [params, setParmas] = useState(isUserRegistered ? {} : location?.state?.data);
  const [{ showOtpModal, isAadhaar }, setState] = useState({ showOtpModal: false, isAadhaar: false });
  const [errorTO, setErrorTO] = useState(null);
  const searchParams = Digit.Hooks.useQueryParams();
  const [canSubmitName, setCanSubmitName] = useState(false);
  const [canSubmitOtp, setCanSubmitOtp] = useState(true);
  const [canSubmitAadhaarOtp, setCanSubmitAadhaarOtp] = useState(true);
  const [canSubmitNo, setCanSubmitNo] = useState(true);

  useEffect(() => {
    let errorTimeout;
    if (error) {
      if (errorTO) {
        clearTimeout(errorTO);
        setErrorTO(null);
      }
      errorTimeout = setTimeout(() => {
        setError("");
      }, 5000);
      setErrorTO(errorTimeout);
    }
    return () => {
      errorTimeout && clearTimeout(errorTimeout);
    };
  }, [error]);

  useEffect(() => {
    if (!user) {
      return;
    }
    Digit.SessionStorage.set("citizen.userRequestObject", user);
    Digit.UserService.setUser(user);
    setCitizenDetail(user?.info, user?.access_token, stateCode);
    const redirectPath = location.state?.from || DEFAULT_REDIRECT_URL;
    if (!Digit.ULBService.getCitizenCurrentTenant(true)) {
      history.replace(`/${window?.contextPath}/citizen/select-location`, {
        redirectBackTo: redirectPath,
      });
    } else {
      history.replace(redirectPath);
    }
  }, [user]);

  const stepItems = useMemo(() =>
    loginSteps.map(
      (step) => {
        const texts = {};
        for (const key in step.texts) {
          texts[key] = t(step.texts[key]);
        }
        return { ...step, texts };
      },
      [loginSteps]
    )
  );

  const getUserType = () => Digit.UserService.getType();

  const handleOtpChange = (otp) => {
    setParmas({ ...params, otp });
  };

  const handleAadhaarOtpChange = (aadhaarOtp) => {
    setParmas({ ...params, aadhaarOtp });
  };

  const handleMobileChange = (event) => {
    const { value } = event.target;
    setParmas({ ...params, mobileNumber: value?.replace(/[^0-9]/g, "") });
  };

  const selectMobileNumber = async (mobileNumber) => {
    setCanSubmitNo(false);
    setParmas({ ...params, ...mobileNumber });
    const data = {
      ...mobileNumber,
      tenantId: stateCode,
      userType: getUserType(),
    };
    if (isUserRegistered) {
      const [res, err] = await sendOtp({ otp: { ...data, ...TYPE_LOGIN } });
      if (!err) {
        setCanSubmitNo(true);
        history.replace(`${path}/otp`, { from: getFromLocation(location.state, searchParams), role: location.state?.role });
        return;
      } else {
        setCanSubmitNo(true);
        if (!(location.state && location.state.role === "FSM_DSO")) {
          history.push(`/${window?.contextPath}/citizen/register/name`, { from: getFromLocation(location.state, searchParams), data: data });
        }
      }
      if (location.state?.role) {
        setCanSubmitNo(true);
        setError(location.state?.role === "FSM_DSO" ? t("ES_ERROR_DSO_LOGIN") : "User not registered.");
      }
    } else {
      // const [res, err] = await sendOtp({ otp: { ...data, ...TYPE_REGISTER } });
      // if (!err) {
      //   setCanSubmitNo(true);
      //   setState((prev) => ({
      //     ...prev,
      //     showOtpModal: true,
      //   }));
      //   return;
      // }
      setState((prev) => ({
        ...prev,
        showOtpModal: true,
      }));
      setCanSubmitNo(true);
    }
  };

  const selectName = async (name) => {
    setParmas({ ...params, name });
    history.push(`${path}/user-address`);
    // const data = {
    //   ...params,
    //   tenantId: stateCode,
    //   userType: getUserType(),
    //   ...name,
    // };
    // setParmas({ ...params, ...name });
    // setCanSubmitName(true);
    // const [res, err] = await sendOtp({ otp: { ...data, ...TYPE_REGISTER } });
    // if (res) {
    //   setCanSubmitName(false);
    //   history.replace(`${path}/otp`, { from: getFromLocation(location.state, searchParams) });
    // } else {
    //   setCanSubmitName(false);
    // }
  };

  const handleAddressSave = (address) => {
    setParmas({ ...params, address });
    history.push(`${path}/id-verification`);
  };

  const selectOtp = async () => {
    try {
      setIsOtpValid(true);
      setCanSubmitOtp(false);
      const { mobileNumber, otp, name } = params;
      if (isUserRegistered) {
        const requestData = {
          username: mobileNumber,
          password: otp,
          tenantId: stateCode,
          userType: getUserType(),
        };
        const { ResponseInfo, UserRequest: info, ...tokens } = await Digit.UserService.authenticate(requestData);

        if (location.state?.role) {
          const roleInfo = info.roles.find((userRole) => userRole.code === location.state.role);
          if (!roleInfo || !roleInfo.code) {
            setError(t("ES_ERROR_USER_NOT_PERMITTED"));
            setTimeout(() => history.replace(DEFAULT_REDIRECT_URL), 5000);
            return;
          }
        }
        if (window?.globalConfigs?.getConfig("ENABLE_SINGLEINSTANCE")) {
          info.tenantId = Digit.ULBService.getStateId();
        }

        setUser({ info, ...tokens });
      } else if (!isUserRegistered) {
        const requestData = {
          name,
          username: mobileNumber,
          otpReference: otp,
          tenantId: stateCode,
        };

        // const { ResponseInfo, UserRequest: info, ...tokens } = await Digit.UserService.registerUser(requestData, stateCode);

        // if (window?.globalConfigs?.getConfig("ENABLE_SINGLEINSTANCE")) {
        //   info.tenantId = Digit.ULBService.getStateId();
        // }

        // setUser({ info, ...tokens });
        setState((prev) => ({
          ...prev,
          showOtpModal: false,
        }));
        history.push(`${path}/adv-verification`)
      }
    } catch (err) {
      setCanSubmitOtp(true);
      setIsOtpValid(false);
    }
  };

  const aadhaarOtpSelect = () => {
    setCanSubmitAadhaarOtp(false);
    setState((prev) => ({
      ...prev,
      showOtpModal: false,
      isAdhaar: false,
    }));
    history.replace(`${path}/success`);
    setCanSubmitAadhaarOtp(true);
  };

  const resendOtp = async () => {
    const { mobileNumber } = params;
    const data = {
      mobileNumber,
      tenantId: stateCode,
      userType: getUserType(),
    };
    if (!isUserRegistered) {
      const [res, err] = await sendOtp({ otp: { ...data, ...TYPE_REGISTER } });
    } else if (isUserRegistered) {
      const [res, err] = await sendOtp({ otp: { ...data, ...TYPE_LOGIN } });
    }
  };

  const sendOtp = async (data) => {
    try {
      const res = await Digit.UserService.sendOtp(data, stateCode);
      return [res, null];
    } catch (err) {
      return [null, err];
    }
  };

  const onDocumentUpload = (data) => {
    const advVerObj = {
      UploadIdComponent: {
        regNo: data?.UploadIdComponent?.BAR_regNo,
        state: data?.UploadIdComponent?.State_of_reg,
        uploadedFile: data?.UploadIdComponent?.ID_Proof,
      },
    };
    setParmas({ ...params, advVerObj: advVerObj });
    history.push(`${path}/user-name`);
  };

  const handleIdType = (idType) => {
    setParmas({ ...params, idType });
    idType.IdVerification.selectIdType.code === "AADHAR"
      ? history.push(`${path}/enter-aadhaar`, { comingFrom: "Aadhaar" })
      : history.push(`${path}/upload-id`, { comingFrom: "otherId" });
  };

  const handleAadhaarChange = (aadhaarNumber) => {
    setParmas({ ...params, aadhaarNumber });
    setIsOtpValid(false);
    setState((prev) => ({
      ...prev,
      showOtpModal: true,
      isAadhaar: true,
    }));
  };

  console.debug("par", params)

  return (
    <div className="citizen-form-wrapper">
      <Switch>
        <React.Fragment>
          <Route path={`${path}`} exact>
            <SelectMobileNumber
              onSelect={selectMobileNumber}
              config={stepItems[0]}
              mobileNumber={params?.mobileNumber || ""}
              onMobileChange={handleMobileChange}
              isRegister={!isUserRegistered}
              canSubmit={canSubmitNo}
              showRegisterLink={isUserRegistered && !location.state?.role}
              t={t}
            />
          </Route>
          {showOtpModal && (
            <SelectOtp
              config={stepItems[1]}
              onOtpChange={isAadhaar ? handleAadhaarOtpChange : handleOtpChange}
              onResend={resendOtp}
              onSelect={isAadhaar ? aadhaarOtpSelect : selectOtp}
              mobileNumber={params?.mobileNumber || ""}
              otp={isAadhaar ? params?.aadhaarOtp : params?.otp}
              error={isOtpValid}
              canSubmit={isAadhaar ? canSubmitAadhaarOtp : canSubmitOtp}
              t={t}
              isAadhaar={isAadhaar}
              setState={setState}
              params={params}
              setParams={setParmas}
            />
          )}
          <Route path={`${path}/adv-verification`}>
            <AdvocateVerification t={t} config={[stepItems[4]]} refreshPath={path} onDocumentUpload={onDocumentUpload} params={params} />
          </Route>
          <Route path={`${path}/user-name`}>
            <SelectName config={[stepItems[2]]} params={params} refreshPath={path} onSubmit={selectName} t={t} isDisabled={canSubmitName} />
          </Route>
          <Route path={`${path}/user-address`}>
            <SelectAddress config={[stepItems[3]]} t={t} params={params} refreshPath={path} onSelect={handleAddressSave} />
          </Route>
          <Route path={`${path}/id-verification`}>
            <SelectIdType t={t} config={[stepItems[5]]} params={params} refreshPath={path} onSelect={handleIdType} />
          </Route>
          <Route path={`${path}/enter-aadhaar`}>
            <EnterAadhaar
              t={t}
              config={[stepItems[6]]}
              onSelect={handleAadhaarChange}
              refreshPath={path}
              params={params}
              adhaarNumber={params?.adhaarNumber}
            />
          </Route>
          <Route path={`${path}/success`}>
            <PendingVerification params={params} refreshPath={path} />
          </Route>
          {error && <Toast error={true} label={error} onClose={() => setError(null)} />}
        </React.Fragment>
      </Switch>
    </div>
  );
};

export default Login;
