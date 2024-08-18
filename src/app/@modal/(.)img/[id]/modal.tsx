"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";

export function Modal({
  children,
  isOpen,
}: {
  children: React.ReactNode;
  isOpen: boolean;
}) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (isOpen && !dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, [isOpen]);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <dialog
      ref={dialogRef}
      className={`h-screen w-screen border-none bg-black/80 p-0 text-white ${isOpen ? "animate-scaleUp" : "animate-scaleDown"}`}
      onClose={onDismiss}
    >
      {children}
      <button onClick={onDismiss} className="absolute right-2 top-2 text-xl">
        ✖
      </button>
    </dialog>,
    document.getElementById("modal-root")!,
  );
}
