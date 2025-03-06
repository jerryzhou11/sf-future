import React, { useState } from 'react';
import graph from '../assets/econgraph.png';
import Scrolly from '../Components/Scrolly';
import Profile from '../Components/Profile';
import Ana from '../assets/Ana.png';
import Lei from '../assets/Lei.png';
import Jess from '../assets/Jess.png';
import ProfileMenu from '../Components/ProfileMenu';

function Story() {
  const [activeProfile, setActiveProfile] = useState(null);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

  const handleProfileClick = (index, x, y) => {
    setClickPosition({ x, y });
    setActiveProfile(index);
  };

  const profiles = [
    {
      title: "Analuisa Casimir",
      content: (
        <div className="space-y-4 text-left lg:flex gap-4">
          <img src={Ana} alt="Analuisa Casimir" className="lg:rounded-lg h-fit" />
          <div className="flex flex-col gap-8">
          <p className="text-lg">
           Peruvian mom and San Francisco street vendor Analuisa Casimir worries about her and her daughter's future. "San Francisco is expensive, [and] everything costs a lot," said Casimir. 
          </p>
          <p className="text-lg">
            Casimir fled from her country a year ago because her life and her daughters were at risk if she didn't pay her debt.
          </p>
          <p className="text-lg">
          Almost every day, Casimir stands with her cart, sizzling onions with other hot dog vendors with a smile in hopes of selling her hot dogs wrapped in bacon for $8. 
          </p>
          <p className="text-lg">
          Now, she lives with her sister and niece in San Francisco and can't move because she has no nowhere else to go.  "I don't have family anywhere else and I have my daughter and it is not good to go with a girl to go somewhere where you don't know anyone," said Casimir. "My daughter needs to go to school." 
          </p>
          <p className="text-lg">
          Casimir expressed concern with the city, as she has tried to get a permit to sell hotdogs in Fisherman's Wharf but has not been able to. Instead, she struggles because the city continuously removes her permit. "[The city] comes, kicks us out, takes from us, gives us tickets, but we keep fighting." Casimir said  "We [street vendors] asked for permits, but [the city] said they don't have any for us." 
          </p>
          <p className="text-lg">
          On Sept. 17, 2018, the Department of Economic Opportunity reported that former Governor Jerry Brown signed the <a className="underline hover:text-blue-500" target="_blank" href="https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=201720180SB946">Safe Sidewalk Vending Act</a>, which decriminalized sidewalk vending in the state and permitted local authorities to implement non-criminal laws to protect public health, safety and welfare. 
          </p>
          <p className="text-lg">
          It is unclear as to why Casimir continuously gets tickets and is told to leave.
          
          </p>
          <p className="text-lg">
          “Now that Trump's here, all we ask is to help immigrants,” Casimir said. “The only thing we come here [for] is to work.” 
          </p>
          </div>
        </div>
      )
    },
    {
      title: "Jess Kitchingman",
      content: (
        <div className="space-y-4 text-left lg:flex gap-4">
          <img src={Jess} alt="Michael Torres" className="lg:sticky top-0 rounded-lg h-fit" />
          <div className="flex flex-col gap-8">
          <p className="text-lg">
          Jess Kitchingman lives in the Tenderloin, known for being one of the most dangerous neighborhoods in San Francisco. She has been struggling economically and is currently working two barista jobs. 
          </p>
          <p className="text-lg">
          “I do want to stay in San Francisco,” said Kitchingman. “So much has changed for the city that a lot of the city has lost its culture that everyone's had, and it's very different that way.”
          </p>
          <p className="text-lg">
          Kitchingman moved from Nevada to San Francisco around 4 years ago and wants to stay to relive the memories she had with her dad. She remembers places like Hippie Hill where the hippies were and now like they were pushed out she is feeling pushed out from a place wants to stay. 
          </p>
          <p className="text-lg">
          She describes the Tenderloin as a designated hub to keep the homeless and crime away from the wealthy areas like the Financial District.  “People's opinions about the Tenderloin when they don't experience it, they don't even care for the people there. They just see it as crime. They see it as, you know, danger. They see it as shit in the streets. And it just makes it really difficult, I guess, to interact with those different people, because those are my neighbors. You know, the people, even if they're homeless, they are my neighbors” said Kitchingman.
          </p>
          <p className="text-lg">
          Everyday she feels the tension even walking a block from the Tenderloin to the Financial District of two worlds and their disconnection between the wealthy and communities that are struggling.  
          </p>
          <p className="text-lg">
          “Even before they, as an individual, come into the city, the companies that they work for have already destroyed a lot of what has made the city great,”  Kitchingman said. “You know, those office buildings are still taking up spaces, those housing units are still overpriced, those streets are being pushed clean, pushing homeless people into smaller and smaller corners in the city.”
          </p>
          <p className="text-lg">
          Kitchingman wishes that people coming into San Francisco would just “treat people as people”.
          She still remains hopeful that locally, San Francisco can do better.
          </p>
          <p className="text-lg">
          She shared that recently a multi-unit housing was built or approved to be built on Divisadero, and so she looks forward towards more affordable housing and more housing for more people.
          </p>
          </div>
        </div>
      )
    },
    {
      title: "Lei Levy",
      content: (
        <div className="space-y-4 text-left lg:flex gap-4">
          <img src={Lei} alt="Lei Levy" className="lg:sticky top-0 rounded-lg h-fit" />
          <div className="flex flex-col gap-8">
          <p className="text-lg">
            “I mean, to be honest, our priorities are, let's hope we can stay open in the next five years,” said Lei Levy from Pier 23 Cafe Restaurant and Bar. 
          </p>
          <p className="text-lg">
          Levy’s mother started the restaurant 36 years ago, in a much different economy than today. Since then, the restaurant has been family owned and operated. Levy and her family were born and raised in San Francisco.
          </p>
          <p className="text-lg">
          “My mom raised us in North Beach, which is right over the hill, over Coit Tower, and we live right below Coit Tower, so, like, we're this is totally our neighborhood,” said Levy.
          </p>
          <p className="text-lg">
          For Levy, the community is an important aspect in keeping the cafe full.
          </p>
          <p className="text-lg">
          “What we've been able to maintain is just classic San Francisco. That's what we bring to the table. We have a lot of people who've come here for years, who have, like, family events here, birthdays, and our food is good, you know.”
          </p>
          <p className="text-lg">
          But when COVID-19 hit San Francisco, the ability for people to gather was limited, and thus Pier 23 suffered in building community. 
          </p>
          <p className="text-lg">
          “We used to have like 250,000 people coming in to work from downtown. Now it's like we have, like, a quarter of that, you know, and businesses aren't opening, you know, offices aren't opening up downtown. So that has really affected us.”
          </p>
          <p className="text-lg">
          Recent economic downturns have also made running the business hard, for owners and consumers alike. 
          </p>
          <p className="text-lg">
          Levy explained that her restaurant caters to the middle class and she has felt that the middle-class economy has shrunk. “Our customer base can’t go out and eat all the time because they're struggling just to buy eggs or groceries, you know? I mean, it's basic needs." Said Levy said.  
          </p>
          <p className="text-lg">
          Overall Levy is hopeful. From book fairs to music events at Pier 23 Cafe, Levy hopes to build more community. And with recent mayoral elections in San Francisco, she hopes for a change in the local economy. 
          </p>
          <p className="text-lg">
          “A lot of people that you might encounter would admit that San Francisco was really suffering from a lot of things happening, and it feels like there's, there's glimmers of hope and light that we're seeing that hopefully actually manifest,” Levy said. “[There are] people who really believe in this place.”
          </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="overscroll-none">
      <Scrolly backgroundImage={graph}>
      <div className="h-[100vh]">

        <p className=" text-2xl text-center">San Francisco is in a tough spot.</p>
        <p className="text-2xl text-center mt-5">
          According to a recent Milken Institute report, the San Francisco area has experienced 
          the largest plummet in economic ratings across all large metropolitan areas.
        </p>
      </div>
      </Scrolly>

      <Scrolly backgroundImage="https://placehold.co/600x400">
        <div className="h-[100vh]">
          <p className="text-2xl text-center">
            The report attributes this steep decline to instability in the technology 
            and information industries. 
          </p>
          <p> &nbsp; </p>
          <p className="text-2xl text-center">
            San Francisco also fell in terms of job growth 
            and wage growth rankings.
          </p>
        </div>
      </Scrolly>

      <Scrolly>
        <div className="flex-col">
          <p className="mt-20 text-2xl text-center">Select a dish to learn about the person behind it.</p>
          <ProfileMenu onProfileClick={handleProfileClick} />
        </div>
      </Scrolly>
      
      {profiles.map((profile, index) => (
        <Profile
          key={index}
          isOpen={activeProfile === index}
          onClose={() => setActiveProfile(null)}
          title={profile.title}
          originX={clickPosition.x}
          originY={clickPosition.y}
        >
          {profile.content}
        </Profile>
      ))}
    </div>
  );
}

export default Story;