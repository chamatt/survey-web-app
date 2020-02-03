import React from "react";

import { Btn } from "./styles";

export default function Button({
  leftIcon,
  rightIcon,
  children,
  large,
  block,
  disabled,
  className,
  ...rest
}) {
  return (
    <Btn
      {...rest}
      block={block}
      className={`btn waves-effect waves-light z-depth-0 ${large &&
        "btn-large"} ${disabled && "disabled"} ${className}`}
    >
      {leftIcon && <i className="material-icons left">{leftIcon}</i>}
      {children}
      {rightIcon && <i className="material-icons right">{rightIcon}</i>}
    </Btn>
  );
}
