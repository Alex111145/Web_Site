import React, { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';

const ToolModal = ({ isOpen, onClose, tool }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen || !tool) return null;

  return (
    <div
      onClick={handleClose}
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4 transition-opacity duration-300"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-zinc-900 border border-violet-500/50 rounded-2xl shadow-2xl shadow-violet-500/20 w-full max-w-sm transform transition-transform duration-300 flex flex-col ${isClosing ? 'animate-out' : 'animate-in'}`}
      >
        {/* Header */}
        <div className="p-5 flex justify-between items-start border-b border-zinc-800">
          <div>
            <h2 className="text-2xl font-bold text-white">{tool.nama}</h2>
            <p className="text-violet-400 text-sm mt-1">{tool.ket}{!tool.done && <span className="text-violet-300"> — Soon...</span>}</p>
          </div>
          <button
            onClick={handleClose}
            className="text-zinc-400 hover:text-white transition-colors p-2 rounded-full hover:bg-zinc-700 -mr-2"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-10 flex flex-col justify-center items-center bg-black/40 rounded-b-2xl gap-4">
          <img
            src={tool.gambar}
            alt={tool.nama}
            className="w-32 h-32 object-contain bg-zinc-800 p-4 rounded-2xl shadow-lg"
          />
          {tool.desc && (
            <p className="text-zinc-300 text-sm text-center mt-2 leading-relaxed">{tool.desc}</p>
          )}
        </div>
      </div>

      <style>{`
        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-in { animation: scaleIn 0.3s ease-out forwards; }

        @keyframes scaleOut {
          from { transform: scale(1); opacity: 1; }
          to { transform: scale(0.95); opacity: 0; }
        }
        .animate-out { animation: scaleOut 0.3s ease-in forwards; }
      `}</style>
    </div>
  );
};

export default ToolModal;
