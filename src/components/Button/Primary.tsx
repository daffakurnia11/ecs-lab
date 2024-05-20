import React from "react";
import classNames from "classnames";

type Props = {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  style?: React.CSSProperties;
  size?: "lg" | "base" | "sm";
  type?: "default" | "outline" | "text";
  htmlType?: "submit" | "button" | "reset" | any;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  disabled?: boolean;
};

export default function Primary({
  as: Component = "button",
  size = "base",
  type = "default",
  htmlType = "button",
  prefix,
  suffix,
  className,
  ...props
}: Props) {
  return (
    <Component
      type={htmlType}
      {...props}
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
          "font-text"
        )}
      >
        Primary
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
