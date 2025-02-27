import React from 'react';

function Scrolly({ children, backgroundImage }) {
  return (
    <section className="h-[100vh] relative flex items-center justify-center snap-proximity">
      {backgroundImage && (
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src={backgroundImage}
            alt="Background visualization" 
            className="max-w-full h-auto object-cover"
            width='100%'
          />
        </div>
      )}
      <div className="relative z-10 max-w-2xl mx-auto px-4">
        <div className={backgroundImage ? "bg-white/40 rounded-lg p-6" : ""}>
          {children}
        </div>
      </div>
    </section>
  );
}

export default Scrolly;