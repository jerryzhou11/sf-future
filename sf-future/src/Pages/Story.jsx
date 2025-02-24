import React, { useState } from 'react';
import graph from '../assets/econgraph.png';
import Scrolly from '../Components/Scrolly';
import Profile from '../Components/Profile';
import Ana from '../assets/Ana.png';
import Lei from '../assets/Lei.png';
import ProfileMenu from '../Components/ProfileMenu';

function Story() {
  const [activeProfile, setActiveProfile] = useState(null);

  const profiles = [
    {
      title: "Analuisa Casimir",
      content: (
        <div className="space-y-4">
          <img src={Ana} alt="Analuisa Casimir" className="w-full rounded-lg" />
          <p className="text-lg">
            Sarah, a software engineer with 8 years of experience, watched her industry transform overnight. 
            Previously earning a comfortable six-figure salary at a prominent startup, she now faces an 
            uncertain future as tech layoffs continue to ripple through the city.
          </p>
          <p className="text-lg">
            "The city feels different now. Many of my colleagues have left for other tech hubs, 
            but San Francisco is my home. I'm trying to adapt, but it's challenging when the 
            industry that once defined this city is in such flux."
          </p>
        </div>
      )
    },
    {
      title: "Michael Torres - Small Business Owner",
      content: (
        <div className="space-y-4">
          <img src="/api/placeholder/600/400" alt="Michael Torres" className="w-full rounded-lg" />
          <p className="text-lg">
            Michael has owned a local café in SoMa for over a decade. His business thrived on 
            the steady stream of tech workers, but with office occupancy still low and many 
            companies adopting remote work, he's had to reinvent his business model.
          </p>
          <p className="text-lg">
            "We used to have lines out the door during lunch hour. Now we're lucky to see 
            a quarter of that traffic. We're pivoting to more local community events and 
            weekend services, but it's been a difficult transition."
          </p>
        </div>
      )
    },
    {
      title: "Jamie Rodriguez - Service Worker",
      content: (
        <div className="space-y-4">
          <img src="/api/placeholder/600/400" alt="Jamie Rodriguez" className="w-full rounded-lg" />
          <p className="text-lg">
            Jamie has worked in the service industry for 15 years, most recently as a 
            supervisor at a downtown hotel. The decline in business travel and tourism 
            has directly impacted their livelihood and that of their team.
          </p>
          <p className="text-lg">
            "The hospitality industry was hit hard during COVID, and just when we thought 
            things would recover, the tech slowdown happened. We're seeing fewer business 
            travelers, fewer conferences, and it affects everyone in the service industry."
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="w-full">
      <Scrolly>
        <p className="text-3xl text-center">San Francisco is in a tough spot.</p>
      </Scrolly>

      <Scrolly backgroundImage={graph}>
        <p className="text-2xl text-center">
          According to a recent Milken Institute report, the San Francisco area has experienced 
          the largest plummet in economic ratings across all large metropolitan areas.
        </p>
      </Scrolly>

      <Scrolly backgroundImage={graph}>
        <p className="text-2xl text-center">
          The report attributes this steep decline to instability in the technology 
          and information industries. 
        </p>
        <p> &nbsp; </p>
        <p className="text-2xl text-center">
          San Francisco also fell in terms of job growth 
          and wage growth rankings.
        </p>
      </Scrolly>

      <Scrolly>
        <p className="text-2xl text-center">
          But behind these worrying numbers are people: San Franciscans that have 
          been deeply impacted by these economic changes.
        </p>
      </Scrolly>

      <Scrolly>
        <div className="space-y-12">
          <p className="text-2xl text-center">Explore their stories here.</p>
          <ProfileMenu onProfileClick={(index) => setActiveProfile(index)} />
        </div>
      </Scrolly>
      
      {profiles.map((profile, index) => (
        <Profile
          key={index}
          isOpen={activeProfile === index}
          onClose={() => setActiveProfile(null)}
          title={profile.title}
        >
          {profile.content}
        </Profile>
      ))}
    </div>
  );
}

export default Story;