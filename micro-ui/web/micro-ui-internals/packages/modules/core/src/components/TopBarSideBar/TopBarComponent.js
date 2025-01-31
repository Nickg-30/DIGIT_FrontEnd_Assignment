import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useLocation, useHistory } from "react-router-dom";
// import BackButton from "./BackButton";
import { Dropdown, Hamburger, NotificationBell } from "@egovernments/digit-ui-react-components";
import { EmblemLogo } from "../../../../../react-components/src/atoms/svgindex";

const TopBarComponent = ({
  img,
  isMobile,
  toggleSidebar,
  logoUrl,
  userDetails,
  notificationCount,
  notificationCountLoaded,
  cityOfCitizenShownBesideLogo,
  onNotificationIconClick,
  hideNotificationIconOnSomeUrlsWhenNotLoggedIn,
  changeLanguage,
}) => {
  const { pathname } = useLocation();
  const history = useHistory();
  const token = window.localStorage.getItem("token");
  const isUserLoggedIn = Boolean(token);
  // const showHaburgerorBackButton = () => {
  //   if (pathname === "/digit-ui/citizen" || pathname === "/digit-ui/citizen/" || pathname === "/digit-ui/citizen/select-language") {
  //     return <Hamburger handleClick={toggleSidebar} />;
  //   } else {
  //     return <BackButton className="top-back-btn" />;
  //   }
  // };
  const emblemBigImageLink = window?.globalConfigs?.getConfig("EMBLEM_BIG");
  const onCourtsImageLink = window?.globalConfigs?.getConfig("ON_COURTS_LOGO");

  return (
    <div className="navbar" style={{ zIndex: "999" }}>
      <div className="center-container back-wrapper">
        <div className="hambuger-back-wrapper">
          <div
            style={{ display: "flex", gap: "16px", cursor: "pointer" }}
            onClick={() => {
              const pathUnwind = pathname.split("/").slice(0, 3).join("/") + (isUserLoggedIn ? "/home/home-pending-task" : "/dristi");
              history.push(pathUnwind);
            }}
          >
            <EmblemLogo />
          </div>
        </div>

        {/* <div className="RightMostTopBarOptions">
          {!hideNotificationIconOnSomeUrlsWhenNotLoggedIn ? (
            <div className="EventNotificationWrapper" onClick={onNotificationIconClick}>
              {notificationCountLoaded && notificationCount ? (
                <span>
                  <p>{notificationCount}</p>
                </span>
              ) : null}
              <NotificationBell />
            </div>
          ) : null}
          {userDetails?.access_token && (
            <div className="left">
              <Dropdown
                option={userOptions}
                optionKey={"name"}
                select={handleUserDropdownSelection}
                showArrow={true}
                freeze={true}
                style={mobileView ? { right: 0 } : {}}
                optionCardStyles={{ overflow: "revert", display: "table" }}
                topbarOptionsClassName={"topbarOptionsClassNameCitizen"}
                customSelector={
                  profilePic == null ? (
                    <TextToImg name={userDetails?.info?.name || userDetails?.info?.userInfo?.name || "Citizen"} />
                  ) : (
                    <img src={profilePic} alt="profile" style={{ height: "48px", width: "48px", borderRadius: "50%", color: "#5B2448" }} />
                  )
                }
              />
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
};

TopBarComponent.propTypes = {
  img: PropTypes.string,
};

TopBarComponent.defaultProps = {
  img: undefined,
};

export default TopBarComponent;
