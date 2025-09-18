// src/context/ToastContext.jsx
import { createContext, useContext, useState, useCallback } from "react";

const ToastContext = createContext();

// Hook for easy usage
export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  // Add toast
  const addToast = useCallback((message, type = "success") => {
    const id = Date.now() + Math.random(); // unique ID
    setToasts((prev) => [...prev, { id, message, type }]);

    // Auto-remove after 3s
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}

      {/* Toast container */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`px-4 py-3 rounded-lg shadow-lg text-white text-sm font-medium animate-slideUp
              ${toast.type === "success" ? "bg-green-600" :
                toast.type === "error" ? "bg-red-600" :
                "bg-blue-600"}
            `}
          >
            {toast.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};
