export type ButtonProps = {
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
  onClick?: () => void;
};
