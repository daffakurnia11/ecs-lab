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
    1: "sm:text-6xl text-4xl",
    2: "sm:text-5xl text-3xl",
    3: "sm:text-4xl text-2xl",
    4: "sm:text-3xl text-xl",
    5: "sm:text-2xl text-xl",
    6: "sm:text-xl text-lg",
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
