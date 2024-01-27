import { IModalProps } from "@/interfaces/components/Modal";

const titleTextColor = {
  info: "text-neutral-600",
  success: "text-emerald-600",
  warning: "text-amber-600",
  error: "text-rose-600"
};

export default function Modal({ children, isOpen, onClose, title, type = "info" }: IModalProps) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[#000000aa] z-50"
          onMouseDown={onClose}
        >
          <div
            className="min-w-[300px] rounded-lg bg-white"
            onMouseDown={(e) => e.stopPropagation()}
          >
            {title && (
              <div className="rounded-t-lg bg-neutral-100">
                <h3 className={`px-8 py-4 ${titleTextColor[type]}`}>{title}</h3>
              </div>
            )}
            <div className="px-8 py-4">{children}</div>
          </div>
        </div>
      )}
    </>
  );
}
