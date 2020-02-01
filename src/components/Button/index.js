import React from "react";

import { Btn } from "./styles";

export default function Button({
  leftIcon,
  rightIcon,
  children,
  large,
  ...rest
}) {
  return (
    <Btn
      {...rest}
      className={`btn waves-effect waves-light z-depth-0 ${large && "large"}`}
    >
      {leftIcon && <i className="material-icons right">{leftIcon}</i>}
      {children}
      {rightIcon && <i className="material-icons right">{rightIcon}</i>}
    </Btn>
  );
}
