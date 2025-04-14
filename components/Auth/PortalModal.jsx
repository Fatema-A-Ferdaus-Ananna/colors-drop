"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function PortalModal({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted
    ? createPortal(children, document.getElementById("modal-root"))
    : null;
}
