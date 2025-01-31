import React, { useEffect, useRef, useState, Fragment } from "react";
import ButtonSelector from "./ButtonSelector";
import { Close, UploadIcon } from "./svgindex";
import { useTranslation } from "react-i18next";
import RemoveableTag from "./RemoveableTag";

const getRandomId = () => {
  return Math.floor((Math.random() || 1) * 139);
};

const getCitizenStyles = (value) => {
  let citizenStyles = {};
  if (value == "propertyCreate") {
    citizenStyles = {
      textStyles: {
        whiteSpace: "nowrap",
        width: "100%",
        overflow: "hidden",
        textOverflow: "ellipsis",
        width: "80%",
      },
      tagStyles: {
        width: "90%",
        flexWrap: "nowrap",
      },
      inputStyles: {
        width: "44%",
        minHeight: "2rem",
        maxHeight: "3rem",
        top: "20%",
      },
      buttonStyles: {
        height: "auto",
        minHeight: "2rem",
        width: "40%",
        maxHeight: "3rem",
      },
      tagContainerStyles: {
        width: "60%",
        display: "flex",
        marginTop: "0px",
      },
      closeIconStyles: {
        width: "20px",
      },
      containerStyles: {
        padding: "10px",
        marginTop: "0px",
      },
    };
  } else if (value == "IP") {
    citizenStyles = {
      textStyles: {
        whiteSpace: "nowrap",
        maxWidth: "250px",
        overflow: "hidden",
        textOverflow: "ellipsis",
      },
      tagStyles: {
        marginLeft: "-30px",
      },
      inputStyles: {},
      closeIconStyles: {
        position: "absolute",
        marginTop: "-12px",
      },
      buttonStyles: {},
      tagContainerStyles: {},
    };
  } else if (value == "OBPS") {
    citizenStyles = {
      containerStyles: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexWrap: "wrap",
        margin: "0px",
        padding: "0px",
      },
      tagContainerStyles: {
        margin: "0px",
        padding: "0px",
      },
      tagStyles: {
        height: "auto",
        padding: "5px",
        margin: 0,
        width: "100%",
        margin: "5px",
      },
      textStyles: {
        wordBreak: "break-all",
        height: "auto",
        lineHeight: "16px",
        overflow: "hidden",
        // minHeight: "35px",
        maxHeight: "34px",
        maxWidth: "100%",
      },
      inputStyles: {
        width: "42%",
        minHeight: "42px",
        maxHeight: "42px",
        top: "12px",
        left: "12px",
      },
      buttonStyles: {
        height: "auto",
        minHeight: "40px",
        width: "43%",
        maxHeight: "40px",
        margin: "5px",
        padding: "0px",
      },
      closeIconStyles: {
        width: "20px",
      },
      uploadFile: {
        minHeight: "40px",
        maxHeight: "42px",
        display: "flex",
        alignItems: "center",
      },
    };
  } else {
    citizenStyles = {
      textStyles: {},
      tagStyles: {},
      inputStyles: {},
      buttonStyles: {},
      tagContainerStyles: {},
    };
  }
  return citizenStyles;
};

const UploadFile = (props) => {
  const { t } = useTranslation();
  const inpRef = useRef();
  const [hasFile, setHasFile] = useState(false);
  const [prevSate, setprevSate] = useState(null);
  const user_type = Digit.SessionStorage.get("userType");
  let extraStyles = {};
  const handleChange = () => {
    if (inpRef.current.files[0]) {
      setHasFile(true);
      setprevSate(inpRef.current.files[0]);
    } else setHasFile(false);
  };
  // for common aligmnent issues added common styles
  extraStyles = getCitizenStyles("OBPS");

  // if (window.location.href.includes("/obps") || window.location.href.includes("/noc")) {
  //   extraStyles = getCitizenStyles("OBPS");
  // } else {
  //   switch (props.extraStyleName) {
  //     case "propertyCreate":
  //       extraStyles = getCitizenStyles("propertyCreate");
  //       break;
  //     case "IP":
  //       extraStyles = getCitizenStyles("IP");
  //       break;
  //     case "OBPS":
  //       extraStyles = getCitizenStyles("OBPS");
  //     default:
  //       extraStyles = getCitizenStyles("");
  //   }
  // }

  const handleDelete = () => {
    inpRef.current.value = "";
    props.onDelete();
  };

  const handleReupload = () => {
    inpRef.current.click();
  };

  const handleEmpty = () => {
    if (inpRef.current.files.length <= 0 && prevSate !== null) {
      inpRef.current.value = "";
      props.onDelete();
    }
  };

  if (props.uploadMessage && inpRef.current.value) {
    handleDelete();
    setHasFile(false);
  }

  useEffect(() => handleEmpty(), [inpRef?.current?.files]);

  useEffect(() => {
    if (inpRef.current) {
      handleChange();
    }
  }, [inpRef.current?.files.length]);

  const showHint = props?.showHint || false;

  return (
    <Fragment>
      {showHint && <p className="cell-text">{t(props?.hintText)}</p>}
      <div
        className="upload-file-div-main"
        style={{ display: "flex", maxWidth: "540px", gap: "2%", alignItems: "center", justifyContent: "space-between" }}
      >
        <div className="upload-file-div-sub">
          <div
            className={`upload-file ${user_type === "employee" ? "" : "upload-file-max-width"} ${props.disabled ? " disabled" : ""}`}
            style={extraStyles?.uploadFile ? extraStyles?.uploadFile : {}}
          >
            <div style={extraStyles ? extraStyles?.containerStyles : null}>
              {props?.uploadedFiles?.map((file, index) => {
                const fileDetailsData = file[1];
                return (
                  <div className="tag-container" style={extraStyles ? extraStyles?.tagContainerStyles : null}>
                    <RemoveableTag
                      extraStyles={extraStyles}
                      key={index}
                      text={props?.displayName || file[0]}
                      onClick={(e) => props?.removeTargetedFile(fileDetailsData, e)}
                    />
                  </div>
                );
              })}
              {props?.uploadedFiles.length === 0 && <h2 className="file-upload-status">{props?.message}</h2>}
              {/* {!hasFile || props.error ? (
                <h2 className="file-upload-status">No files uploaded</h2>
              ) : (
                <div className="tag-container" style={extraStyles ? extraStyles?.tagContainerStyles : null}>
                  <div className="tag" style={extraStyles ? extraStyles?.tagStyles : null}>
                    <span className="text" style={extraStyles ? extraStyles?.textStyles : null}>
                      {typeof inpRef.current.files[0]?.name !== "undefined" && !props?.file ? inpRef.current.files[0]?.name : props.file?.name}
                    </span>
                    <span onClick={(e) => props?.removeTargetedFile(fileDetailsData, e)} style={extraStyles ? extraStyles?.closeIconStyles : null}>
                      <Close style={props.Multistyle} className="close" />
                    </span>
                  </div>
                </div>
              )} */}
            </div>
          </div>
        </div>
        <div
          className="upload-file-upload-button-div"
          style={{ height: "40px", border: "solid 1px #007E7E", display: "flex", alignItems: "center", position: "relative" }}
        >
          <input
            type="file"
            accept={props.accept}
            onChange={(e) => props.onUpload(e)}
            onClick={(event) => {
              if (props?.disabled) {
                event.preventDefault();
                return;
              }
              const { target = {} } = event || {};
              target.value = "";
            }}
            ref={inpRef}
            style={{ opacity: 0, maxWidth: "100%", minHeight: "40px" }}
          />
          <span
            style={{ minWidth: "100%", cursor: "pointer", alignItems: "center", display: "flex", justifyContent: "center", position: "absolute" }}
            onClick={handleReupload}
          >
            <span style={{ color: "#007E7E", display: "flex", flexDirection: "row", justifyContent: "center", padding: "8px 24px" }}>
              <span style={{ marginRight: "4px" }}>
                <UploadIcon />
              </span>
              Upload
            </span>
          </span>
        </div>
      </div>
      {props.iserror && <p style={{ color: "red" }}>{props.iserror}</p>}
      {props?.showHintBelow && <p className="cell-text">{t(props?.hintText)}</p>}
    </Fragment>
  );
};

export default UploadFile;
