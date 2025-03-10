import React, {useState} from 'react';


function Scrolly({ children, backgroundImage, hideImageOnMobile = false}) {

 if(hideImageOnMobile){
  return (
    <div>
          {backgroundImage && <figure className="sticky top-0">
              <div className="">
                <img 
                  src={backgroundImage}
                  alt="Background visualization" 
                  className="lg:opacity-100 opacity-0 min-h-screen object-cover -z-10"
                />
              </div>
          </figure>}
          <div className="relative">
            <div className="relative z-10 max-w-2xl md:max-w-4xl mx-auto px-4 opacity-[99] [transform:translate3d(0,0,0)] [-webkit-transform:translate3d(0,0,0)]">
                {children}
            </div>
          </div>
        </div>
  );
 }else return (
    <div>
      {backgroundImage && <figure className="sticky top-0">
          <div className="">
            <img 
              src={backgroundImage}
              alt="Background visualization" 
              className="h-screen object-cover -z-10"
            />
          </div>
      </figure>}
      <div className="relative">
        <div className="relative z-20 max-w-2xl md:max-w-4xl mx-auto px-4 opacity-[99] [transform:translate3d(0,0,0)] [-webkit-transform:translate3d(0,0,0)]">
            {children}
        </div>
      </div>
    </div>
  );
}

export default Scrolly;