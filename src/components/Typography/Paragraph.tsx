import React from "react";
import type { ParagraphProps } from "@/types/typography";
import classNames from "classnames";

export default function Paragraph({
  size = "base",
  as: Component = "p",
  className = "",
  weight = "font-normal",
  ...props
}: ParagraphProps): React.ReactElement {
  const textSizeLevel = {
    lg: "text-lg",
    base: "text-base",
  };
  const textSizeClass = textSizeLevel[size];

  return (
    <Component
      {...props}
      className={classNames(`font-text`, textSizeClass, weight, className)}
    />
  );
}
