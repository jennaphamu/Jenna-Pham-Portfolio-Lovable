import { ButtonHTMLAttributes, forwardRef } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "small" | "outline";
  showArrow?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", showArrow = true, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center gap-2 rounded-full uppercase font-bold transition-all duration-200";
    
    const variants = {
      primary: "btn-primary",
      secondary: "btn-secondary",
      small: "btn-small",
      outline: "border-2 border-foreground text-foreground bg-transparent hover:bg-foreground hover:text-background py-3 px-7 font-semibold",
    };

    return (
      <button
        className={cn(baseStyles, variants[variant], className)}
        ref={ref}
        {...props}
      >
        {children}
        {showArrow && <ArrowRight className="w-4 h-4" />}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
