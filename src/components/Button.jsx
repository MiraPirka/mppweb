import React from 'react';

function Button({ label, onClick }) {
  return (
    <button 
      onClick={onClick} 
      className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition"
    >
      {label}
    </button>
  );
}

export default Button;
