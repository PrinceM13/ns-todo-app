"use client";

import InputFrame from "../Frame";

import { IInputTextFieldProps } from "@/interfaces/components/Input";

export default function InputTextField({
  type = "text",
  label,
  placeholder,
  value,
  onChange = () => {}
}: IInputTextFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && <label>{label}</label>}
      <InputFrame>
        <input
          className="w-full bg-transparent outline-none"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </InputFrame>
    </div>
  );
}
