import React, { useEffect } from "react";
import { CardHeader, CardText } from "@egovernments/digit-ui-react-components";
import Card from "../../../../../../react-components/src/atoms/Card";
import { HourGlass } from "../../../../../../react-components/src/atoms/svgindex";
import ActionBar from "../../../../../../react-components/src/atoms/ActionBar";
import SubmitBar from "../../../../../../react-components/src/atoms/SubmitBar";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const PendingVerification = ({ params, refreshPath }) => {
  const history = useHistory();

  useEffect(() => {
    if (!params?.aadhaarOtp) {
      history.push(refreshPath);
    }
  }, [params, history]);

  return (
    <div className="pending-verification">
      <HourGlass />
      <Card>
        <CardHeader>Your registration is waiting approval</CardHeader>
        <CardText>Your registration (ID: XXXXXXXXX) is in progress. It takes 2-3 days for verification. You'll get an SMS when it's done.</CardText>
      </Card>
      <SubmitBar label={"View My Application"} submit="submit" disabled={true} />
    </div>
  );
};

export default PendingVerification;
