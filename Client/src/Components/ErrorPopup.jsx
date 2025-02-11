const ErrorPopup = ({ message, onClose }) => {
    if (!message) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-red-600 font-semibold">{message}</p>
          <button 
            onClick={onClose} 
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    );
  };
  
  export default ErrorPopup;
  