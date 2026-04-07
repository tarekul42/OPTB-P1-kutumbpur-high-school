import type { ReactNode, CSSProperties } from "react";

type BadgeVariant =
  | "primary"
  | "secondary"
  | "gold"
  | "slate"
  | "accent"
  | "accent-gold"
  | "dark"
  | "light"
  | "warning"
  | "neutral";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
  style?: CSSProperties;
}

const variants: Record<BadgeVariant, string> = {
  primary: "bg-primary-100 text-primary-700",
  secondary: "bg-secondary-100 text-secondary-700",
  gold: "bg-accent-gold/20 text-accent-gold",
  slate: "bg-slate-100 text-slate-700",
  accent: "bg-accent-100 text-accent-700",
  "accent-gold": "bg-accent-gold text-white",
  dark: "bg-slate-800/80 text-white",
  light: "bg-primary-50 text-primary-700",
  warning: "bg-amber-100 text-amber-700",
  neutral: "bg-slate-100 text-slate-600",
};

const Badge = ({
  children,
  variant = "primary",
  className = "",
  style,
}: BadgeProps) => {
  return (
    <span
      className={`text-xs px-3 py-1 rounded-full font-medium ${variants[variant]} ${className}`}
      style={style}
    >
      {children}
    </span>
  );
};

export default Badge;
