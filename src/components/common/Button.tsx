import type { ReactNode } from "react";
import "./Button.css";


type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
  onClick?: () => void;
};

const Button = ({
  children,
  variant = "primary",
  type = "button",
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`btn ${variant}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;