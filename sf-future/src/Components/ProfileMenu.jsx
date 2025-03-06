import React, { useState } from 'react';
import coffee from '../assets/jess_coffee.png';
import seafood from '../assets/seafood.png';
import hotdog from '../assets/hotdog.png';
import table from '../assets/table.png';
import seafood2 from '../assets/seafood_e.png'; // Add new images
import hotdog2 from '../assets/hotdog_e.png';
import coffee2 from '../assets/coffee_e.png';

function ProfileMenu({ onProfileClick }) {
  const [clicked, setClicked] = useState([false, false, false]);

  const handleClick = (index, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = rect.left + (rect.width / 2);
    const clickY = rect.top + (rect.height / 2);
    onProfileClick(index, clickX, clickY);

    // Update the clicked state for the button
    setClicked(prevClicked => {
      const newClicked = [...prevClicked];
      newClicked[index] = true;
      return newClicked;
    });
  };

  return (
    <div>
      <img src={table} className="absolute mt-20 -z-5 opacity-0 md:opacity-100" />
      <div className="flex justify-center">
        <div className="md:w-2xl md:h-[30vh] md:mt-10">
          <button
            onClick={(e) => handleClick(1, e)}
            className="p-7 hover:brightness-130 hover:scale-110 transition-all"
            aria-label="Read Jess's Story"
          >
            Jess
            <img
              src={clicked[1] ? coffee2 : coffee}
              alt="Cup of coffee"
              width="150px"
              className="ml-9"
            />
          </button>
          <button
            onClick={(e) => handleClick(2, e)}
            className="p-7 hover:brightness-130 hover:scale-110 transition-all"
            aria-label="Read Lei's Story"
          >
            Lei
            <img
              src={clicked[2] ? seafood2 : seafood}
              alt="Plate of seafood"
              width="150px"
            />
          </button>
          <button
            onClick={(e) => handleClick(0, e)}
            className="p-7 hover:brightness-130 hover:scale-110 transition-all"
            aria-label="Read Annaluisa's Story"
          >
            Ana
            <img
              src={clicked[0] ? hotdog2 : hotdog}
              alt="Bacon wrapped hot dog"
              width="150px"
              className="mt-5"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileMenu;