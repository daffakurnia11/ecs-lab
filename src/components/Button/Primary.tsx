import React from "react";
import classNames from "classnames";
import { ButtonProps } from "@/types/button";

export default function Primary({
  as: Component = "button",
  size = "base",
  type = "default",
  htmlType = "button",
  prefix,
  suffix,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <Component
      {...props}
      type={htmlType}
      className={classNames(
        className,
        "button",
        `button-${type}`,
        `button-${size}`,
        prefix ? `button-${size}-with-prefix` : null,
        suffix ? `button-${size}-with-suffix` : null
      )}
    >
      {prefix && (
        <span
          className={classNames(
            size === "lg" ? "text-lg" : size === "sm" ? "text-sm" : "text-base",
            "font-text"
          )}
        >
          {prefix}
        </span>
      )}
      <span
        className={classNames(
          size === "lg" ? "text-lg" : size === "sm" ? "text-sm" : "text-base",
          "font-text font-bold"
        )}
      >
        {children}
      </span>
      {suffix && (
        <span
          className={classNames(
            size === "lg" ? "text-lg" : size === "sm" ? "text-sm" : "text-base",
            "font-text"
          )}
        >
          {suffix}
        </span>
      )}
    </Component>
  );
}
