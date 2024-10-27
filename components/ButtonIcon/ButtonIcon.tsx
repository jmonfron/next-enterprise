import { cva, type VariantProps } from "class-variance-authority"

import { twMerge } from "tailwind-merge"
import {PhoneArrowDownLeftIcon} from "@heroicons/react/24/solid";
import {ElementType, ReactNode} from "react";

const button = cva(
  [
    "justify-center",
    "inline-flex",
    "items-center",
    "rounded-xl",
    "text-center",
    "border",
    "border-primary-400",
    "transition-colors",
    "delay-50",
  ],
  {
    variants: {
      intent: {
        primary: ["bg-primary-400", "text-white", "hover:enabled:bg-primary-700"],
        secondary: ["bg-transparent", "text-primary-400", "hover:enabled:bg-primary-400", "hover:enabled:text-white"],
      },
      size: {
        sm: ["min-w-20", "h-full", "min-h-10", "text-sm", "py-1.5", "px-4"],
        lg: ["min-w-32", "h-full", "min-h-12", "text-lg", "py-2.5", "px-6"],
      },
      underline: { true: ["underline"], false: [] },
    },
    defaultVariants: {
      intent: "primary",
      size: "lg",
    },
  }
)

export interface ButtonIconProps extends React.ButtonHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof button> {
  underline?: boolean
  href: string
    Icon: ElementType
}

export function ButtonIcon({ className, intent, size, underline, Icon, ...props }: ButtonIconProps) {
  return (
      <button>
          <a className={twMerge(button({intent, size, className, underline}))} {...props}>
              <Icon className="w-5 h-5 mr-3"/> {/* Icône ajoutée avant le texte */}
              {props.children}
          </a>
      </button>
  )
}
