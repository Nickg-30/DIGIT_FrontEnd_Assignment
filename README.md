
📌 Registration Flow

The registration flow allows users to sign up and verify their identity before accessing the platform. This flow includes multiple steps for user authentication and validation.

Note:

The Sign-in Screen and Choose Officer Screen (during registration) were not created as part of this implementation.

🚀 Steps in the Registration Flow

1️⃣ Mobile Input Screen – Users enter their mobile number to start registration.

2️⃣ OTP Screen – Users receive an OTP for verification.

3️⃣ Advocate Verification Screen – Verifies advocate details (if applicable).

4️⃣ Name Screen – Users enter their full name.

5️⃣ Address Screen – Users provide their address details.

6️⃣ Verify Identity Screen – Identity verification step before Aadhaar input.

7️⃣ Enter Aadhaar Screen – Users enter their Aadhaar number.

8️⃣ Aadhaar OTP Screen – Aadhaar OTP verification step.

9️⃣ Pending Verification Status Screen – Shown after successful submission, indicating verification is in progress.

🛠️ How to Use

Navigate to 'works-ui/citizen/register' to start the registration process.

Follow the step-by-step process to complete the verification.

PS:
Did not create the following screens.

1️⃣ Login Screen

2️⃣ Choose officer type Screen

3️⃣ Terms & Conditions Screen

4️⃣ Registered Successfully Screen


# DIGIT UI

A React App built on top of DIGIT UI Core.

# DIGIT

DIGIT eGovernance Platform Services

DIGIT (Digital Infrastructure for Governance, Impact & Transformation) is India's largest platform for governance services. Visit https://core.digit.org/ for more details.

DIGIT platform is microservices based API platform enabling quick rebundling of services as per specific needs. This is a repo that lays down the core platform on top of which other mission services depend.

# DIGIT UI

This repository contains source code for web implementation of the new Digit UI modules with dependencies and libraries.

Workbench module is used to Manage the master data (MDMS V2 Service) used across the DIGIT Services / Applications

It is also used to manage the Localisation data present in the system (Localisation service)

## Run Locally

Clone the project

```bash
  git clone https://github.com/egovernments/DIGIT-Frontend.git
```

Go to the Sub directory to run UI

```bash
    cd into micro-ui/web/micro-ui-internals
```

Install dependencies

```bash
  yarn install
```

Add .env file

```bash
    micro-ui/web/micro-ui-internals/example/.env
```

Start the server

```bash
  yarn start
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_PROXY_API` :: `{{server url}}`

`REACT_APP_GLOBAL` :: `{{server url}}`

`REACT_APP_PROXY_ASSETS` :: `{{server url}}`

`REACT_APP_USER_TYPE` :: `{{EMPLOYEE||CITIZEN}}`

`SKIP_PREFLIGHT_CHECK` :: `true`

[sample .env file](https://github.com/egovernments/Digit-Core/blob/workbench/frontend/micro-ui/web/micro-ui-internals/example/.env-unifieddev)

## Tech Stack

**Libraries:**

[React](https://react.dev/)

[React Hook Form](https://www.react-hook-form.com/)

[React Query](https://tanstack.com/query/v3/)

[Tailwind CSS](https://tailwindcss.com/)

[Webpack](https://webpack.js.org/)

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Author

- [@jagankumar-egov](https://www.github.com/jagankumar-egov)

## Documentation

[Documentation](https://https://core.digit.org/guides/developer-guide/ui-developer-guide/digit-ui)

## Support

For support, add the issues in https://github.com/egovernments/DIGIT-core/issues.

## Modules

    1. Core
    2. Workbench
    3. HRMS
    4. Dashboard
    5. Engagement
    6. Payment
    

## Starting with Digit-UI App (Impelmentation Teams) - MICRO-UI

Go to the Sub directory to run UI

```bash
    cd into micro-ui/web
```

```bash
  yarn install
```

Add .env file

```bash
    micro-ui/web/.env
```

Start the server

```bash
  yarn start
```

![Logo](https://s3.ap-south-1.amazonaws.com/works-dev-asset/mseva-white-logo.png)
