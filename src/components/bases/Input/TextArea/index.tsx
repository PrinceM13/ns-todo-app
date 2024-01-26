"use client";

import InputFrame from "../Frame";

import { IInputTextAreaProps } from "@/interfaces/components/Input";

export default function InputTextArea({
  label,
  placeholder,
  value,
  onChange = () => {}
}: IInputTextAreaProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && <label>{label}</label>}
      <InputFrame>
        <textarea
          className="w-full bg-transparent outline-none"
          placeholder={placeholder}
          value={value}
          rows={4}
          onChange={(e) => onChange(e.target.value)}
        />
      </InputFrame>
    </div>
  );
}
