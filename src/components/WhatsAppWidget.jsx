import React, { useState } from 'react';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const phoneNumber = '+355682063377';

  const handleSendMessage = () => {
    const encodedMessage = encodeURIComponent(message);
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    // Redirect to WhatsApp conversation directly
    const whatsappUrl = isMobile
      ? `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-72 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
          {/* Chat Header */}
          <div className="bg-green-500 text-white p-3 flex justify-between items-center">
            <span className="font-semibold">Kontakt</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-xl hover:text-gray-200"
            >
              &times;
            </button>
          </div>

          {/* Message Input */}
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Shkruaj mesazhin tënd.."
            className="flex-1 p-3 border-none resize-none outline-none text-sm"
            rows="4"
          />

          {/* Send Button */}
          <button
            onClick={handleSendMessage}
            className="bg-green-500 text-white p-2 hover:bg-green-600 transition-colors"
          >
            Dërgo
          </button>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-500 rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="Chat on WhatsApp"
          className="w-8 h-8"
        />
      </button>
    </div>
  );
};

export default WhatsAppWidget;