import React from "react";
import { NavigationDots, SocialMedia } from "../Components";
// HIGHER-ORDER-COMPONENT
const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <span id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />
        </div>
        <NavigationDots active={idName}/>
      </span>
    );
  };

export default AppWrap;
