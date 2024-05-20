import React from "react";
import type { SmallProps } from "@/types/typography";
import classNames from "classnames";

export default function Small({
  size = "base",
  as: Component = "small",
  className = "",
  weight = "font-normal",
  ...props
}: SmallProps): React.ReactElement {
  const textSizeLevel = {
    base: "text-sm",
    xs: "text-xs",
  };
  const textSizeClass = textSizeLevel[size];

  return (
    <Component
      {...props}
      className={classNames(`font-text`, textSizeClass, weight, className)}
    />
  );
}
