import React from "react";
import "./Phone.css";

export const PhoneMenu = props => {
  return (
    <div
      className={
        props.state.phoneHelpState.helperShow
          ? "helper-position-activated"
          : "helper-position"
      }
    >
      {props.state.phoneHelpState.loadError && (
        <div className="thanks" onClick={() => props.phoneHelperGone()}>
          <div className="arrow-left-thanks" />
          <div className="phone-help-question">Sorry :(</div>
          <div className="arrow-right-thanks" />
        </div>
      )}

      {!props.state.phoneHelpState.loadError && (
        <div className="phone-help-question-line">
          <div className="arrow-left-phone" />
          <div className="phone-help-question">Who do you want to phone?</div>
          <div className="arrow-right-phone" />
        </div>
      )}

      {props.state.phoneHelpState.helpersLoaded === true &&
      !props.state.phoneHelpState.loadError ? (
        <div className="helpers">
          {props.state.phoneHelpState.HelperNames.map((item, index) => {
            return (
              <div
                key={index}
                className={
                  props.state.phoneHelpState.HelperClicked === false
                    ? "helpers-line"
                    : props.state.phoneHelpState.HelperChoose === index
                    ? "helpers-line-chosen"
                    : "helpers-line-not-chosen"
                }
              >
                <img
                  className={
                    props.state.phoneHelpState.HelperClicked === true
                      ? "img-chosen"
                      : ""
                  }
                  src={props.state.phoneHelpState.HelpersImages[index]}
                  alt=""
                  onClick={() => props.helperClick(index)}
                />
                <div className="name-answer">
                  {props.state.phoneHelpState.HelperClicked === true
                    ? props.state.phoneHelpState.HelperAnswer
                    : item}
                </div>
                {props.state.phoneHelpState.HelperClicked === true && (
                  <div
                    className="thanks"
                    onClick={() => props.phoneHelperGone()}
                  >
                    <div className="arrow-left-thanks" />
                    <div className="phone-help-question">Thanks!</div>
                    <div className="arrow-right-thanks" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
