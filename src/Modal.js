import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  // we are going to have element we are going to create and destroy
  // which is opening and un opening so we do not end up with a ton
  // of markup we are not using
  // use ref here will 'refer' to the same dom node
  const elRef = useRef(null);

  // if we do not have one assigned as the 'current' reference
  // we are going to make one, each re-render will point to the same one
  if (!elRef.current) {
    const elem = document.createElement("div");
    elRef.current = elem;
  }

  // when we render for the first time
  useEffect(() => {
    const modalRoute = document.getElementById("modal");
    modalRoute.appendChild(elRef.current);

    // if you return a function from a effect it is the clean up
    // function so it is like the un-mount
    return () => modalRoute.removeChild(elRef.current);
  }, []);
  // we pass second arg as no deps (empty array) so it only renders once
  // like the computed props in ember

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
