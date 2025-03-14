import React, { useEffect, useContext, createContext } from 'react';

// Create a context for the close function
export const ProfileContext = createContext(null);

function Profile({ isOpen, onClose, title, children, originX, originY }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Calculate the transform origin based on click position
  const transformOrigin = `${originX}px ${originY}px`;

  return (
    <ProfileContext.Provider value={{ onClose }}>
      <div 
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        style={{
          animation: 'fadeIn 0.2s ease-out'
        }}
      >
        <div 
          className="bg-white rounded-lg w-full h-full relative"
          style={{
            transformOrigin,
            animation: 'scaleIn 0.3s ease-out'
          }}
        >
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute right-4 top-4 p-1 hover:bg-gray-100 rounded-full"
            aria-label="Close profile"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          {/* Header */}
          <div className="p-6 border-b bg-amber-300 rounded-lg">
            <h2 className="text-3xl font-cursive pr-8">{title}</h2>
          </div>
          
          {/* Content */}
          <div className="p-6 overflow-y-auto" style={{ maxHeight: 'calc(95vh - 140px)' }}>
            {children}
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(0.8);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}</style>
      </div>
    </ProfileContext.Provider>
  );
}

// Create a custom close button component
export function ProfileCloseButton() {
  const { onClose } = useContext(ProfileContext);
  return (
    <button 
      onClick={onClose}
      className="bg-amber-300 hover:bg-amber-400 text-black font-bold py-2 px-6 rounded-full transition-colors max-w-lg lg:mx-auto"
    >
      Close Story
    </button>
  );
}

export default Profile;