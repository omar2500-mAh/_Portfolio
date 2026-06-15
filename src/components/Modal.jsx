import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

/**
 * Modal
 * Reusable overlay used by the Gallery lightbox and Research detail view.
 * - Closes on Escape and on backdrop click
 * - Locks body scroll while open
 */
export default function Modal({ open, onClose, children, maxWidth = "max-w-4xl" }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div
            className="absolute inset-0 bg-navy-950/85 backdrop-blur-md"
            onClick={onClose}
          />
          <motion.div
            className={`relative z-10 w-full ${maxWidth} max-h-[90vh] overflow-y-auto rounded-3xl bg-charcoal-light border border-white/10 shadow-elevate`}
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ type: "spring", damping: 26, stiffness: 280 }}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="sticky top-4 left-full z-20 -mr-2 mb-[-3rem] flex h-10 w-10 items-center justify-center rounded-full bg-navy-900/80 text-white/80 border border-white/10 backdrop-blur hover:bg-gold hover:text-navy-900 transition-colors"
              style={{ float: "right", marginRight: "1rem", marginTop: "1rem" }}
            >
              <X className="h-5 w-5" />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
