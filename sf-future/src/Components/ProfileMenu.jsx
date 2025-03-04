import React from 'react';
import coffee from '../assets/jess_coffee.png';
import seafood from '../assets/seafood.png';
import hotdog from '../assets/hotdog.png';
import table from '../assets/table.png';

function ProfileMenu({ onProfileClick }) {
  const handleClick = (index, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = rect.left + (rect.width / 2);
    const clickY = rect.top + (rect.height / 2);
    onProfileClick(index, clickX, clickY);
  };

  return (
    <div>
    <img src = {table} className="absolute mt-40 -z-5 opacity-0 md:opacity-100"/>
    <div className="flex justify-center ">
      <div className="md:w-2xl md:h-[30vh] md:mt-30">
      <button 
          onClick={(e) => handleClick(1, e)}
          className="p-7 hover:brightness-130 hover:scale-110 transition-colors"
          aria-label="Read Jess's Story"
        >
          Jess
          <img src={coffee} alt="Cup of coffee" width="150px" className="ml-9"/>
        </button>
        <button 
          onClick={(e) => handleClick(2, e)}
          className="p-7 hover:brightness-130 hover:scale-110 transition-colors"
          aria-label="Read Lei's Story"
        >
          Lei
          <img src={seafood} alt="Plate of seafood" width="150px"/>
        </button>
        <button 
          onClick={(e) => handleClick(0, e)}
          className="p-7 hover:brightness-130 hover:scale-110 transition-colors"
          aria-label="Read Annaluisa's Story"
        >
          Ana
          <img src={hotdog} alt="Bacon wrapped hot dog" width="150px" className="mt-5"/>
        </button>
        </div>
    </div>
    </div>
  );
}

export default ProfileMenu;