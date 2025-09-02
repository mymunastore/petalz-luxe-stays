import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-petalz-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 will-animate",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-medium hover:shadow-elegant",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-medium",
        outline: "border-2 border-petalz-gold text-petalz-gold bg-transparent hover:bg-petalz-gold hover:text-petalz-black hover:shadow-gold transform hover:scale-105",
        secondary: "bg-petalz-gray text-petalz-gray-dark hover:bg-petalz-gray/80 shadow-soft hover:shadow-medium",
        ghost: "hover:bg-petalz-gold/10 hover:text-petalz-gold-dark",
        link: "text-petalz-gold underline-offset-4 hover:underline hover:text-petalz-gold-light",
        primary: "bg-gradient-to-r from-petalz-gold to-petalz-gold-light text-petalz-black font-semibold shadow-medium hover:shadow-gold transform hover:scale-105 hover:-translate-y-1",
        premium: "bg-gradient-to-r from-petalz-navy to-petalz-charcoal text-petalz-white font-semibold shadow-premium hover:shadow-elegant transform hover:scale-105 hover:-translate-y-1",
        elegant: "bg-gradient-to-r from-petalz-champagne to-petalz-gold-muted text-petalz-gray-dark font-medium shadow-soft hover:shadow-medium transform hover:scale-105",
      },
      size: {
        default: "h-12 px-6 py-3 rounded-lg text-base",
        sm: "h-9 px-4 py-2 rounded-md text-sm",
        lg: "h-14 px-10 py-4 rounded-xl text-lg",
        xl: "h-16 px-12 py-5 rounded-2xl text-xl",
        icon: "h-12 w-12 rounded-lg",
        "icon-sm": "h-9 w-9 rounded-md",
        "icon-lg": "h-14 w-14 rounded-xl",
      },
      rounded: {
        default: "",
        full: "rounded-full",
        none: "rounded-none",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded, asChild = false, loading = false, leftIcon, rightIcon, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, rounded, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
            Loading...
          </>
        ) : (
          <>
            {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
          </>
        )}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
