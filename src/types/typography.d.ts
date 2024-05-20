export interface TypographyProps {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  style?: React.CSSProperties;
  weight?: "font-bold" | "font-semibold" | "font-normal";
}

export interface HeadingProps extends TypographyProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export interface ParagraphProps extends TypographyProps {
  size?: "base" | "lg";
}

export interface SmallProps extends TypographyProps {
  size?: "base" | "sm";
}
