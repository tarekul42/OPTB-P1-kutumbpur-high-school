const Badge = ({ children, variant = "primary", className = "" }) => {
  const variants = {
    primary: "bg-primary-100 text-primary-700",
    secondary: "bg-secondary-100 text-secondary-700",
    gold: "bg-accent-gold/20 text-accent-gold",
    slate: "bg-slate-100 text-slate-700",
    accent: "bg-accent-100 text-accent-700",
    "accent-gold": "bg-accent-gold text-white",
    "dark": "bg-slate-800/80 text-white",
    "light": "bg-primary-50 text-primary-700",
  };

  return (
    <span
      className={`text-xs px-3 py-1 rounded-full font-medium ${variants[variant] || variants.primary} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
