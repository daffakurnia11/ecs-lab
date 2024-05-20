import React from "react";
import type { HeadingProps } from "@/types/typography";
import classNames from "classnames";

export default function Heading({
  level = 1,
  as = "h1",
  className,
  weight = "font-normal",
  ...props
}: HeadingProps): React.ReactElement {
  const textSizeLevel = {
    1: "text-6xl",
    2: "text-5xl",
    3: "text-4xl",
    4: "text-3xl",
    5: "text-2xl",
    6: "text-xl",
  };
  const textSizeClass = textSizeLevel[level];

  const Component =
    as ||
    (level === 1
      ? "h1"
      : level === 2
      ? "h2"
      : level === 3
      ? "h3"
      : level === 4
      ? "h4"
      : level === 5
      ? "h5"
      : "h6");

  return (
    <Component
      {...props}
      className={classNames(`font-text`, textSizeClass, weight, className)}
    />
  );
}
