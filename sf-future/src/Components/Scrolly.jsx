import React from 'react';

function Scrolly({ children, backgroundImage }) {
  return (
    <div>
      {backgroundImage && <figure className="sticky top-0">
          <div className="">
            <img 
              src={backgroundImage}
              alt="Background visualization" 
              className="w- h-screen object-cover"
            />
          </div>
      </figure>}
      <div className="relative">
        <div className="relative z-10 max-w-2xl md:max-w-4xl mx-auto px-4">
            {children}
        </div>
      </div>
    </div>
  );
}

export default Scrolly;