import React, { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';

const CertModal = ({ isOpen, onClose, cert }) => {
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

  if (!isOpen || !cert) return null;

  return (
    <div
      onClick={handleClose}
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4 transition-opacity duration-300"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-zinc-900 border border-violet-500/50 rounded-2xl shadow-2xl shadow-violet-500/20 w-full max-w-4xl transform transition-transform duration-300 flex flex-col max-h-[95vh] ${isClosing ? 'animate-out' : 'animate-in'}`}
      >
        {/* Header */}
        <div className="p-5 flex justify-between items-start border-b border-zinc-800">
          <div>
            <h2 className="text-2xl font-bold text-white">{cert.nama}</h2>
            <p className="text-zinc-400 text-sm mt-1">
              {cert.ket} • <span className="text-violet-400">{cert.certImage ? cert.anno : "Soon..."}</span>
            </p>
          </div>
          <button
            onClick={handleClose}
            className="text-zinc-400 hover:text-white transition-colors p-2 rounded-full hover:bg-zinc-700 -mr-2"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-auto flex justify-center items-center bg-black/40 rounded-b-2xl min-h-[300px]">
          {cert.certImage ? (
            <img 
              src={cert.certImage} 
              alt={cert.nama} 
              className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-md"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-zinc-600/50 py-20 animate-pulse">
              <span className="text-6xl font-black tracking-widest uppercase">Soon...</span>
              <p className="text-zinc-500 mt-4 text-sm font-medium">Certificate not yet uploaded</p>
            </div>
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

export default CertModal;