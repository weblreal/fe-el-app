import React, { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type ClientOnlyPortalProps = { selector: string; children: ReactNode };

const ClientOnlyPortal: React.FC<ClientOnlyPortalProps> = ({
  children,
  selector,
}) => {
  const ref = useRef<any>();

  useEffect(() => {
    ref.current = document.querySelector(selector);
  }, [selector]);

  return ref.current ? createPortal(children, ref.current) : null;
};
export default ClientOnlyPortal;
