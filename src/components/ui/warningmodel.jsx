import { useEffect } from "react";
import Button from "./button";

const Warningmodel = ({ onCancel, onConfirm, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0  bg-black/50 backdrop-opacity-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h1 className="text-xl text-center font-bold text-red-600 mb-2">
          Warning!
        </h1>
        <p className="text-gray-700 mb-6">
          Are you sure? This action cannot be undone!
        </p>
        <div className="flex justify-end gap-3">
          <Button
            onClick={onCancel}
            className="border border-primary-100 text-primary-90 px-4 py-2 rounded-md hover:bg-gray-50"
          >
            Cancel
          </Button>
          <Button
            onClick={onConfirm}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
          >
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Warningmodel;
