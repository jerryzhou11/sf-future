import React from 'react';

function ProfileMenu({ onProfileClick }) {
  return (
    <div className="flex justify-center py-16">
      <div className="bg-[url('./assets/SF-skyline.png')] bg-center bg-cover overflow-visible">
        <div className="flex md:gap-8 px-16 py-4 justify-center items-center">
          <button 
            onClick={() => onProfileClick(0)}
            className="p-3 hover:brightness-130 transition-colors"
            aria-label="Read Annaluisa's Story"
          >
            <img src="https://placehold.co/100"/>
          </button>

          <button 
            onClick={() => onProfileClick(1)}
            className="p-3 hover:brightness-130 transition-colors"
            aria-label="Read Jess's Story"
          >
            <img src="https://placehold.co/100"/>
          </button>

          <button 
            onClick={() => onProfileClick(2)}
            className="p-3 hover:brightness-130 transition-colors"
            aria-label="Read Lei's Story"
          >
            <img src="https://placehold.co/100"/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileMenu;