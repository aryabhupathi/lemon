import React from "react";
const Toast = ({ message, show, onClose }) => {
  if (!show) return null;
  return (
    <div className="toast">
      {message}
      <button className="toast-close" onClick={onClose}>
        ×
      </button>
    </div>
  );
};
export default Toast;
