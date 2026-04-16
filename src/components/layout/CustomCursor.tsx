"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

type CursorVariant = "default" | "view" | "drag";

export default function CustomCursor() {
  const [variant, setVariant] = useState<CursorVariant>("default");
  const [visible, setVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 500, damping: 35 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 35 });

  useEffect(() => {
    setIsTouchDevice(
      "ontouchstart" in window && window.matchMedia("(pointer: coarse)").matches
    );
  }, []);

  const attachListeners = useCallback(() => {
    const els = document.querySelectorAll("[data-cursor]");
    const handlers: Array<{ el: Element; enter: () => void; leave: () => void }> = [];

    els.forEach((el) => {
      const enter = () =>
        setVariant((el.getAttribute("data-cursor") as CursorVariant) || "default");
      const leave = () => setVariant("default");
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
      handlers.push({ el, enter, leave });
    });

    return () => {
      handlers.forEach(({ el, enter, leave }) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    let cleanupListeners = attachListeners();

    const observer = new MutationObserver(() => {
      cleanupListeners();
      cleanupListeners = attachListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cleanupListeners();
      observer.disconnect();
    };
  }, [isTouchDevice, cursorX, cursorY, visible, attachListeners]);

  if (isTouchDevice) return null;

  const sizes: Record<CursorVariant, number> = { default: 10, view: 80, drag: 60 };
  const labels: Record<CursorVariant, string> = { default: "", view: "View", drag: "Drag" };
  const size = sizes[variant];

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
      style={{ x: springX, y: springY }}
    >
      <motion.div
        className="rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
        animate={{
          width: size,
          height: size,
          opacity: visible ? 1 : 0,
          backgroundColor: variant === "default" ? "#FDFCFA" : "rgba(27,82,166,0.85)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <AnimatePresence mode="wait">
          {variant !== "default" && (
            <motion.span
              key={variant}
              className="text-[9px] uppercase tracking-[0.15em] text-white font-medium"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.15 }}
            >
              {labels[variant]}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
