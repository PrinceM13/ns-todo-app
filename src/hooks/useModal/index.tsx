"use client";

import { useState } from "react";

import { Modal } from "@/components/bases";

import { IModalProps } from "@/interfaces/components/Modal";

export default function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const CustomModal = ({ children, title, type }: IModalProps) => {
    return (
      <Modal title={title} type={type} isOpen={isOpen} onClose={closeModal}>
        {children}
      </Modal>
    );
  };

  return { isOpen, openModal, closeModal, CustomModal };
}
