import React from "react";

const ErrorModal = ({ isOpen, onClose, onSignIn }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Sign In Required
        </h2>
        <p className="text-gray-700 mb-6">
          You need to sign in to fill out the quotation form.
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition duration-300"
          >
            Cancel
          </button>
          <button
            onClick={onSignIn}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
