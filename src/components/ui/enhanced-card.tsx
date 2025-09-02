import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/design-system";

const cardVariants = cva(
  "rounded-2xl border transition-all duration-500 will-animate",
  {
    variants: {
      variant: {
        default: "bg-card border-petalz-gray/50 shadow-medium hover:shadow-elegant hover:border-petalz-gold/30 hover:scale-105",
        premium: "bg-gradient-to-br from-petalz-white to-petalz-cream border-petalz-gold/20 shadow-premium hover:shadow-elegant hover:scale-105 hover:-translate-y-2",
        elegant: "bg-petalz-white/80 backdrop-blur-sm border-petalz-gold/30 shadow-elegant hover:shadow-gold hover:border-petalz-gold/50 hover:scale-102",
        minimal: "bg-card border-petalz-gray/30 shadow-soft hover:shadow-medium hover:border-petalz-gold/20",
        glass: "bg-petalz-white/10 backdrop-blur-md border-petalz-white/20 shadow-large hover:bg-petalz-white/20",
        gradient: "bg-gradient-to-br from-petalz-champagne/20 to-petalz-gold/10 border-petalz-gold/30 shadow-medium hover:shadow-gold",
      },
      size: {
        sm: "p-4",
        default: "p-6",
        lg: "p-8",
        xl: "p-10",
      },
      rounded: {
        default: "rounded-2xl",
        lg: "rounded-3xl",
        xl: "rounded-[2rem]",
        none: "rounded-none",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default",
    },
  }
);

const cardHeaderVariants = cva(
  "flex flex-col space-y-1.5",
  {
    variants: {
      align: {
        left: "text-left",
        center: "text-center items-center",
        right: "text-right items-end",
      }
    },
    defaultVariants: {
      align: "left",
    },
  }
);

const cardTitleVariants = cva(
  "font-heading font-semibold leading-none tracking-tight",
  {
    variants: {
      size: {
        sm: "text-lg",
        default: "text-xl",
        lg: "text-2xl",
        xl: "text-3xl",
      },
      gradient: {
        none: "",
        gold: "bg-gradient-to-r from-petalz-gold to-petalz-gold-light bg-clip-text text-transparent",
        champagne: "bg-gradient-to-r from-petalz-champagne to-petalz-gold-muted bg-clip-text text-transparent",
      }
    },
    defaultVariants: {
      size: "default",
      gradient: "none",
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean;
  hover?: boolean;
}

export interface CardHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardHeaderVariants> {}

export interface CardTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof cardTitleVariants> {}

export interface CardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

export interface CardContentProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export interface CardFooterProps
  extends React.HTMLAttributes<HTMLDivElement> {
  align?: "left" | "center" | "right" | "between";
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, size, rounded, hover = true, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        cardVariants({ variant, size, rounded }),
        !hover && "hover:transform-none hover:shadow-none",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, align, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardHeaderVariants({ align }), className)}
      {...props}
    />
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, CardTitleProps>(
  ({ className, size, gradient, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(cardTitleVariants({ size, gradient }), className)}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-muted-foreground leading-relaxed", className)}
      {...props}
    />
  )
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("pt-0", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, align = "left", ...props }, ref) => {
    const alignmentClasses = {
      left: "justify-start",
      center: "justify-center",
      right: "justify-end",
      between: "justify-between",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center pt-6",
          alignmentClasses[align],
          className
        )}
        {...props}
      />
    );
  }
);
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  cardVariants,
  cardHeaderVariants,
  cardTitleVariants,
};