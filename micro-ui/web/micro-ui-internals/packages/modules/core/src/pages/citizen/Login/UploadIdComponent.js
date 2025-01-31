import React, { useMemo, useState } from "react";
import { LabelFieldPair, CardLabel, TextInput, CardLabelError, CustomDropdown } from "@egovernments/digit-ui-react-components";
import MultiUploadWrapper from "../../../../../../react-components/src/molecules/MultiUploadWrapper";
import DocViewerWrapper from "./DocViewerWrapper";

const UploadIdComponent = ({ t, config, onSelect, formData = {}, errors }) => {
  const [removeFile, setRemoveFile] = useState();
  const [fileStoreId, setFileStoreID] = useState();
  const [fileName, setFileName] = useState();
  const [showDoc, setShowDoc] = useState(false);
  const inputs = useMemo(() => config?.populators?.inputs, [config?.populators?.inputs]);

  function setValue(value, name, input) {
    onSelect(config.key, { ...formData[config.key], [name]: value }, { shouldValidate: true });
  }

  function getFileStoreData(filesData, input) {
    if (!filesData.length) {
      setShowDoc(false);
      return;
    }

    const mockFileStoreId = `mock-${Date.now()}`;

    filesData[0][1].fileStoreId = { fileStoreId: mockFileStoreId };

    setFileName(filesData[0][0]);
    setFileStoreID(mockFileStoreId);
    setShowDoc(true);

    setValue(filesData, input.name, input);
  }

  const yes = (form, key, inp) => {
    console.debug(form, key, inp.name, form[key][inp.name][0][1]);
    return true;
  };

  return (
    <div className="select-user-type-component">
      {inputs?.map((input, index) => {
        return (
          <React.Fragment key={index}>
            <LabelFieldPair style={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
              <CardLabel className="card-label-smaller" style={{ display: "flex", width: "100%" }}>
                {t(input.label)}
              </CardLabel>
              <div className="field" style={{ width: "100%" }}>
                {input?.type === "dropdown" && (
                  <CustomDropdown
                    t={t}
                    label={input?.label}
                    type={"dropdown"}
                    value={formData?.[config.key]?.[input.name]}
                    onChange={(e) => {
                      setValue(e, input.name, input);
                    }}
                    config={input}
                    errorStyle={errors?.[input.name]}
                  />
                )}
                {input?.type === "text" && (
                  <TextInput
                    className="field desktop-w-full"
                    key={input.name}
                    value={formData?.[config.key]?.[input.name]}
                    onChange={(e) => {
                      setValue(e.target.value, input.name, input);
                    }}
                    errorStyle={errors?.[input.name]}
                    defaultValue={undefined}
                    {...input.validation}
                  />
                )}
                {input?.type === "documentUpload" && (
                  <MultiUploadWrapper
                    t={t}
                    module="works"
                    tenantId={window?.Digit.ULBService.getCurrentTenantId()}
                    getFormState={(fileData) => getFileStoreData(fileData, input)}
                    showHintBelow={input?.showHintBelow ? true : false}
                    setuploadedstate={formData?.[config.key]?.[input.name] || []}
                    allowedFileTypesRegex={input.allowedFileTypes}
                    allowedMaxSizeInMB={input.allowedMaxSizeInMB || "5"}
                    hintText={input.hintText}
                    maxFilesAllowed={input.maxFilesAllowed || "1"}
                    extraStyleName={{ padding: "0.5rem" }}
                    customClass={input?.customClass}
                    containerStyles={{ ...input?.containerStyles }}
                    requestSpecifcFileRemoval={removeFile}
                  />
                )}
                {showDoc && input?.type === "documentUpload" && formData[config.key]?.ID_Proof && yes(formData, config.key, input) && (
                  <div>
                    <div className="documentDetails_row_items" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <DocViewerWrapper uploadedFile={formData[config.key]?.[input.name]?.[0]?.[1]?.file} />
                    </div>
                  </div>
                )}

                {errors[input.name] && (
                  <CardLabelError style={{ width: "70%", marginLeft: "30%", fontSize: "12px" }}>
                    {errors[input.name]?.message ? errors[input.name]?.message : t(errors[input.name]) || t(input.error)}
                  </CardLabelError>
                )}
              </div>
            </LabelFieldPair>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default UploadIdComponent;
