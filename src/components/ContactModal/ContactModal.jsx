import React, { useState, useEffect } from 'react';
import { FiX, FiMail, FiPhone, FiExternalLink, FiGithub, FiLinkedin } from 'react-icons/fi';

const configs = {
  email: {
    title: 'Email',
    value: 'agervasini1@gmail.com',
    href: 'mailto:agervasini1@gmail.com',
    actionLabel: 'Send Email',
    Icon: FiMail,
    description: 'Feel free to reach out via email for any inquiries or collaboration opportunities.',
    target: '_self',
  },
  phone: {
    title: 'Phone',
    value: '+39 348 347 6847',
    href: 'tel:+393483476847',
    actionLabel: 'Call Now',
    Icon: FiPhone,
    description: 'Available for calls. Feel free to reach out directly.',
    target: '_self',
  },
  github: {
    title: 'GitHub',
    value: 'github.com/Alex111145',
    href: 'https://github.com/Alex111145',
    actionLabel: 'Visit GitHub',
    Icon: FiGithub,
    description: 'Check out my projects and open source contributions on GitHub.',
    target: '_blank',
  },
  linkedin: {
    title: 'LinkedIn',
    value: 'linkedin.com/in/891740368',
    href: 'https://www.linkedin.com/in/891740368',
    actionLabel: 'Visit LinkedIn',
    Icon: FiLinkedin,
    description: 'Connect with me on LinkedIn for professional networking and opportunities.',
    target: '_blank',
  },
};

const ContactModal = ({ isOpen, onClose, type }) => {
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

  if (!isOpen || !type) return null;

  const { title, value, href, actionLabel, Icon, description, target } = configs[type];

  return (
    <div
      onClick={handleClose}
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4 transition-opacity duration-300"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-zinc-900 border border-violet-500/50 rounded-2xl shadow-2xl shadow-violet-500/20 w-full max-w-md transform transition-transform duration-300 flex flex-col ${isClosing ? 'animate-out' : 'animate-in'}`}
      >
        {/* Header */}
        <div className="p-5 flex justify-between items-start border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="bg-violet-500/20 p-2 rounded-lg">
              <Icon size={22} className="text-violet-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">{title}</h2>
          </div>
          <button
            onClick={handleClose}
            className="text-zinc-400 hover:text-white transition-colors p-2 rounded-full hover:bg-zinc-700 -mr-2"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col items-center gap-6">
          <p className="text-zinc-400 text-sm text-center">{description}</p>
          <div className="bg-zinc-800/60 border border-zinc-700 rounded-xl px-6 py-4 text-white font-semibold text-lg tracking-wide">
            {value}
          </div>
          <a
            href={href}
            target={target}
            rel={target === '_blank' ? 'noopener noreferrer' : undefined}
            className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 transition-colors text-white font-semibold px-8 py-3 rounded-full shadow-lg"
            onClick={handleClose}
          >
            <FiExternalLink size={18} />
            {actionLabel}
          </a>
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

export default ContactModal;
