import React from 'react';

function ProfileMenu({ onProfileClick }) {
  const handleClick = (index, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = rect.left + (rect.width / 2);
    const clickY = rect.top + (rect.height / 2);
    onProfileClick(index, clickX, clickY);
  };

  return (
    <div className="flex justify-center py-16">
      <div className="bg-[url('./assets/SF-skyline.png')] bg-center bg-cover overflow-visible">
        <div className="flex md:gap-8 px-16 py-4 justify-center items-center">
          <button 
            onClick={(e) => handleClick(0, e)}
            className="p-3 hover:brightness-130 transition-colors"
            aria-label="Read Annaluisa's Story"
          >
            <img src="https://placehold.co/100" alt="Annaluisa"/>
          </button>

          <button 
            onClick={(e) => handleClick(1, e)}
            className="p-3 hover:brightness-130 transition-colors"
            aria-label="Read Jess's Story"
          >
            <img src="https://placehold.co/100" alt="Jess"/>
          </button>

          <button 
            onClick={(e) => handleClick(2, e)}
            className="p-3 hover:brightness-130 transition-colors"
            aria-label="Read Lei's Story"
          >
            <img src="https://placehold.co/100" alt="Lei"/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileMenu;