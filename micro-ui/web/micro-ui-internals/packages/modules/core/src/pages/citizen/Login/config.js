export const loginSteps = [
  {
    texts: {
      header: "Please enter your mobile number",
      cardText: "You will use this as your log in. We will send you an OTP to verify.",
      nextText: "Continue", //"CS_COMMONS_NEXT",
      submitBarLabel: "Continue", //"CS_COMMONS_NEXT",
    },
    inputs: [
      {
        label: "Mobile No",
        type: "text",
        name: "mobileNumber",
        error: "ERR_HRMS_INVALID_MOB_NO",
        validation: {
          required: true,
          minlength: 10,
          maxlength: 10,
        },
      },
    ],
  },
  {
    texts: {
      header: "Verify your Mobile Number",
      cardText: "Enter the OTP sent to",
      nextText: "CS_COMMONS_NEXT",
      submitBarLabel: "CS_COMMONS_NEXT",
    },
  },
  {
    heading: "Enter your name as per official documents",
    text: "This is to ensure seamless verification and maintain compliance with official records",
    body: [
      {
        type: "text",
        label: "First Name",
        isMandatory: true,
        populators: {
          name: "firstName",
          error: "Required",
          validation: {
            pattern: {
              message: "Please enter a valid input",
              value: /^[^{0-9}^\$\"<>?\\\\~!@#$%^()+={}\[\]*,/_:;“”‘’]{1,50}$/i,
            },
            title: "",
            patternType: "Name",
          },
        },
      },
      {
        type: "text",
        label: "Middle Name",
        populators: {
          name: "middleName",
          error: "Please enter a valid input",
          validation: {
            pattern: {
              message: "Please enter a valid input",
              value: /^[^{0-9}^\$\"<>?\\\\~!@#$%^()+={}\[\]*,/_:;“”‘’]{1,50}$/i,
            },
            title: "",
            patternType: "Name",
          },
        },
      },
      {
        type: "text",
        label: "Last Name",
        isMandatory: true,
        populators: {
          name: "lastName",
          error: "Required",
          validation: {
            pattern: {
              message: "Please enter a valid input",
              value: /^[^{0-9}^\$\"<>?\\\\~!@#$%^()+={}\[\]*,/_:;“”‘’]{1,50}$/i,
            },
            title: "",
            patternType: "Name",
            minLength: 1,
          },
        },
      },
    ],
  },
  {
    head: "Enter your address",
    body: [
      {
        type: "component",
        component: "AddressComponent",
        key: "addressDetails",
        withoutLabel: true,
        populators: {
          inputs: [
            {
              label: "Pincode",
              type: "text",
              name: "pincode",
              validation: {
                minlength: 6,
                maxlength: 6,
                patternType: "Pincode",
                pattern: "[0-9]+",
                max: "9999999",
                errMsg: "Enter a valid pincode",
                isRequired: true,
                title: "",
              },
              isMandatory: true,
            },
            {
              label: "State",
              type: "dropdown",
              name: "state",
              styles: { marginBottom: "0px" },
              options: ["State A", "State B", "State C", "State D", "State E"],
              validation: {
                isRequired: true,
                pattern: /^[^{0-9}^\$\"<>?\\\\~!@#$%^()+={}\[\]*,/_:;“”‘’]{1,50}$/i,
                errMsg: "Select a valid state",
                patternType: "Name",
                title: "",
              },
              isMandatory: true,
            },
            {
              label: "District",
              type: "dropdown",
              name: "district",
              styles: { marginBottom: "0px" },
              options: ["District A", "District B", "District C", "District D", "District E"],
              validation: {
                isRequired: true,
                pattern: /^[^{0-9}^\$\"<>?\\\\~!@#$%^()+={}\[\]*,/_:;“”‘’]{1,50}$/i,
                errMsg: "select a valid district",
                patternType: "Name",
                title: "",
              },
              isMandatory: true,
            },
            {
              label: "City / town",
              type: "dropdown",
              name: "city",
              options: ["City A", "City B", "City C", "City D", "City E"],
              styles: { marginBottom: "0px" },
              validation: {
                isRequired: true,
              },
              isMandatory: true,
            },
            {
              label: "Locality / Street name / Area",
              type: "text",
              name: "locality",
              validation: {
                isRequired: true,
                minlength: 2,
                maxlength: 256,
              },
              isMandatory: true,
            },
            {
              label: "Door number",
              type: "text",
              name: "doorNo",
              validation: {
                errMsg: "Enter a valid door no",
                pattern: /^[^\$\"'<>?~`!@$%^={}\[\]*:;“”‘’]{0,100}$/i,
                minlength: 1,
                maxlength: 16,
                title: "",
              },
            },
          ],
          validation: {},
        },
      },
    ],
  },
  {
    head: "Advocate Verification",
    subHead: "To ensure the authenticity of your profile, please provide the following details for us to verify",
    body: [
      {
        type: "component",
        component: "UploadIdComponent",
        key: "UploadIdComponent",
        withoutLabel: true,
        populators: {
          inputs: [
            {
              label: "State of registration",
              type: "dropdown",
              name: "State_of_reg",
              options: ["State A", "State B", "State C", "State D", "State E"],
              isMandatory: true,
              optionsCustomStyle: {
                top: "40px",
              },
            },
            {
              label: "BAR registration number",
              type: "text",
              name: "BAR_regNo",
              validation: {
                isRequired: true,
                minlength: 2,
              },
              isMandatory: true,
            },
            {
              label: "Upload BAR council ID",
              type: "documentUpload",
              name: "ID_Proof",
              allowedFileTypes: /(.*?)(png|jpg|pdf|jpeg)$/i,
              isMandatory: true,
              errorMessage: "CUSTOM_DOCUMENT_ERROR_MSG",
              disableFormValidation: false,
            },
          ],
          validation: {},
        },
      },
    ],
  },
  {
    body: [
      {
        type: "component",
        component: "CustomRadioCard",
        key: "IdVerification",
        withoutLabel: true,
        populators: {
          inputs: [
            {
              label: "Verify your identity",
              subLabel: "Before diving in, we'll need to verify your identity for account setup",
              type: "radioButton",
              name: "selectIdType",
              optionsKey: "name",
              error: "CORE_REQUIRED_FIELD_ERROR",
              validation: {},
              clearFields: { aadharNumber: "" },
              isMandatory: true,
              disableMandatoryFieldFor: ["aadharNumber"],
              disableFormValidation: false,
              optionsCustomStyle: {
                top: "40px",
              },
              options: [
                {
                  name: "Aadhaar (Recommended)",
                  subText: "An instant verification that will provide a verified status against your profile",
                  code: "AADHAR"
                },
                {
                  name: "Other ID",
                  subText: "Manual verification by uploading government ID",
                  code: "Other"
                },
              ],
              styles: { flexDirection: "column" },
            },
          ],
          validation: {},
        },
      },
    ],
  },
  {
    head: "Enter your Aadhaar Number",
    subHead: "Please enter your 12 Digit Aadhaar number",
    body: [
      {
        type: "component",
        component: "AadhaarInput",
        key: "AadhaarInput",
        withoutLabel: true,
        populators: {
          inputs: [
            {
              label: "ENTER_AADHAR_NUMBER",
              type: "text",
              name: "aadharNumber",
              validation: {
                minlength: 12,
                maxlength: 12,
                patternType: "AadharNo",
                pattern: "[0-9]+",
                errMsg: "AADHAR_NUMBER_INVALID",
                title: "",
              },
              clearFields: { ID_Proof: [], selectIdTypeType: "" },
              clearFieldsType: { ID_Proof: "documentUpload" },
              disableMandatoryFieldFor: ["ID_Proof", "selectIdTypeType"],
              isMandatory: true,
            },
          ],
          validation: {},
        },
      },
    ],
  },
  {
    heading: "Terms and Conditions",
    text: "This is to ensure seamless verification and maintain compliance with official records",
    body: [
      {
        type: "paragraph",
        label: "First Name",
        populators: {
          name: "firstName",
        },
      },
      {
        type: "paragraph",
        label: "Middle Name",
        populators: {
          name: "middleName",
        },
      },
      {
        type: "paragraph",
        label: "Last Name",
        populators: {
          name: "lastName",
        },
      },
    ],
  },
];
