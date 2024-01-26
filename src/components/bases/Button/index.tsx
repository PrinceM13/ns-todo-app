"use client";

import { useRouter } from "next/navigation";

import { IButtonProps } from "@/interfaces/components/Button";

const colorMap = {
  contained: {
    primary: "bg-teal-600 text-white hover:bg-teal-700 active:bg-teal-800",
    secondary: "bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800",
    info: "bg-sky-600 text-white hover:bg-sky-700 active:bg-sky-800",
    success: "bg-emerald-600 text-white hover:bg-emerald-700 active:bg-emerald-800",
    error: "bg-rose-600 text-white hover:bg-rose-700 active:bg-rose-800",
    warning: "bg-amber-600 text-white hover:bg-amber-700 active:bg-amber-800"
  },
  outlined: {
    primary:
      "bg-transparent text-teal-600 border border-teal-600 hover:bg-teal-100 active:bg-teal-200",
    secondary:
      "bg-transparent text-indigo-600 border border-indigo-600 hover:bg-indigo-100 active:bg-indigo-200",
    info: "bg-transparent text-sky-600 border border-sky-600 hover:bg-sky-100 active:bg-sky-200",
    success:
      "bg-transparent text-emerald-600 border border-emerald-600 hover:bg-emerald-100 active:bg-emerald-200",
    error:
      "bg-transparent text-rose-600 border border-rose-600 hover:bg-rose-100 active:bg-rose-200",
    warning:
      "bg-transparent text-amber-600 border border-amber-600 hover:bg-amber-100 active:bg-amber-200"
  },
  text: {
    primary: "bg-transparent text-teal-600 hover:bg-teal-100 active:bg-teal-200",
    secondary: "bg-transparent text-indigo-600 hover:bg-indigo-100 active:bg-indigo-200",
    info: "bg-transparent text-sky-600 hover:bg-sky-100 active:bg-sky-200",
    success: "bg-transparent text-emerald-600 hover:bg-emerald-100 active:bg-emerald-200",
    error: "bg-transparent text-rose-600 hover:bg-rose-100 active:bg-rose-200",
    warning: "bg-transparent text-amber-600 hover:bg-amber-100 active:bg-amber-200"
  }
};

const sizeMap = {
  sm: "text-xs px-3 py-1",
  md: "text-base px-4 py-2",
  lg: "text-xl px-6 py-3"
};

export default function Button({
  children,
  type = "button",
  size = "md",
  variant = "contained",
  color = "primary",
  shadow,
  rounded,
  linkTo,
  onClick,
  className = "",
  disabled
}: IButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (linkTo) {
      router.push(linkTo);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button
      type={type}
      className={`w-fit h-fit
      ${sizeMap[size]}
      ${colorMap[variant][color]}
      ${shadow ? "shadow-md" : ""}
      ${rounded ? "rounded-full" : "rounded-md"}
      ${className}
      ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
      `}
      onClick={disabled ? undefined : handleClick}
    >
      {children}
    </button>
  );
}
