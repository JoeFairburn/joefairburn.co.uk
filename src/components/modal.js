import React, { useCallback, useState, useEffect } from "react";
import { useSpring, animated as a } from "react-spring";

import { useMediaPredicate } from "react-media-hook";

import VisitProject from "./visitproject";

function Modal(props) {
  const [modalHiddenState, setModalHiddenState] = useState(false);

  const isUsingMobile = useMediaPredicate("(max-width: 450px)");

  const escFunction = useCallback(
    event => {
      if (event.keyCode === 27 && !modalHiddenState) {
        setModalHiddenState(true);
      }
    },
    [modalHiddenState]
  );

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  const modalBackgroundAnimation = useSpring({
    config: { duration: 200 },
    opacity: props.modalIsHidden ? 0 : 1,
    from: { opacity: 0 },
    reverse: modalHiddenState,
    onRest: () => {
      if (modalHiddenState === true) {
        setModalHiddenState(false);
        props.closeModal();
      }
    },
  });

  const modalAnimation = useSpring({
    config: { mass: 1, tension: 210, friction: 23 },
    reset: true,
    from: { top: 2000, height: "0%", width: "0%" },
    to: !props.modalIsHidden && {
      top: 0,
      height: isUsingMobile ? "95%" : "90%",
      width: isUsingMobile ? "98%" : "70%",
    },
    reverse: modalHiddenState,
    // immediate: isUsingMobile,
  });

  const clickToClose = () => setModalHiddenState(true);

  return !props.modalIsHidden ? (
    <div className={"modal-container"}>
      <a.div
        id="modal"
        className="modal"
        style={modalAnimation}
        role="dialog"
        aria-modal="true"
      >
        <div className="modal-header">
          <div className="modal-title-container">
            <h2 className="modal-title">{props.title}</h2>
            {props.url && <VisitProject url={props.url} />}
          </div>
          <div className="modal-x-container">
            <button
              className="modal-x"
              onClick={clickToClose}
              onKeyDown={clickToClose}
              tabIndex="0"
              name="close"
            />
          </div>
        </div>
        <div className="modal-body">{props.children}</div>
      </a.div>
      <a.div
        className={"modal-background"}
        style={modalBackgroundAnimation}
        onClick={clickToClose}
      />
    </div>
  ) : (
    <div></div>
  );
}

export default Modal;
