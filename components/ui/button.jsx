import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap  text-base rounded-lg font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 ",
  {
    variants: {
      variant: {
        default:
          "text-white bg-red hover:bg-red-hover text-black duration-300 ",
        orange: "text-white  bg-orange hover:bg-orange-hover duration-300 ",
        green: "text-white  bg-green hover:bg-green-hover duration-300 ",
        input:
          "bg-white/5 border border-white/10 text-white hover:bg-white/10 duration-300 ",
        reservation:
          "text-white  rounded-md bg-[#545D88] hover:bg-[#545D88] duration-300 ",
      },
      size: {
        default: "h-[62px] w-[170px] px-6",
        sm: "h-[58px] w-[150px] px-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
