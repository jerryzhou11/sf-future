import React, { useState } from 'react';
import graph from '../assets/Local.png';
import Scrolly from '../Components/Scrolly';
import Profile, { ProfileCloseButton } from '../Components/Profile';
import Ana from '../assets/Ana.png';
import Lei from '../assets/Lei.png';
import Jess from '../assets/Jess.png';
import ProfileMenu from '../Components/ProfileMenu';
import street from '../assets/street.webp';
import covid from '../assets/covid.webp';

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
          <p className="text-lg text-center font-bold">
            Interview Translated From Spanish
          </p>
          <p className="text-lg">
          Almost every day, Analuisa Casimir rolls out her food cart and sells bacon-wrapped hot dogs, creating sizzling sounds and savory aromas that are familiar to any San Franciscan who frequents the Embarcadero. 
          </p>
          <p className="text-lg">
          Behind the cheery smile is a Peruvian single mother who worries about the future — especially her daughter’s future. 
          </p>
          <p className="text-lg">
          “San Francisco is expensive,” Casimir said. “Everything costs a lot.”
          </p>
          <p className="text-lg">
          Casimir fled her home country a year ago with her daughter. Now, she lives with her sister and niece in San Francisco. Even though it’s an expensive city, Casimir wants to stay and provide stability.
          </p>
          <p className="text-lg">
          “I don’t have family anywhere else, and I have my daughter, and it is not good to go with a girl to go somewhere where you don’t know anyone,” Casimir said. “My daughter needs to go to school.” 
          </p>
          <p className="text-lg">
          Casimir’s livelihood is affected by both San Francisco’s street vendor policies and recent administration changes at the federal level. 
          </p>
          <p className="text-lg">
          Sidewalk vending was <a className="underline hover:text-blue-500" target="_blank" href="https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=201720180SB946">decriminalized in 2018</a> by Jerry Brown, the California governor at the time. And in 2022, governor Gavin Newsom signed a bill creating a new category of vendors — called “compact mobile food operations” — that allows hot dog carts to operate with fewer equipment requirements. But local authorities can still regulate how and where vendors operate, and San Francisco requires vending permits in certain locations.
          </p>
          <p className="text-lg">
          Casimir has tried unsuccessfully to obtain a permit to vend in Fisherman’s Wharf. “We asked for a permit and they said they don’t have any for us,” she said. She and other vendors have struggled with a cycle of city enforcement. “They come, kick us out, take from us, give us tickets, and we keep fighting.”          
          </p>
          <p className="text-lg">
          Street vendors are increasingly worried as federal authorities crack down on immigration. Many came to San Francisco from South and Central America.
          </p>
          <p className="text-lg">
          “Now that Trump’s here, all we ask is to help immigrants,” Casimir said. “The only thing we come here is to work.” 
          </p>
          <ProfileCloseButton />
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
          Jess Kitchingman regularly commutes from her Tenderloin home to one of her two barista jobs in the Financial District. Straddling what she called “two worlds,” she worries about gentrification and inequality in her city — while feeling pressure herself to keep up with San Francisco’s rising cost of living.
          </p>
          <p className="text-lg">
          “So much has changed for the city,” she said. 
          </p>
          <p className="text-lg">
          Kitchingman, 27, moved from Nevada to San Francisco four years ago and formed memories with her father, spending time in places like Hippie Hill. “A lot of the city has lost its culture,” she said.
          </p>
          <p className="text-lg">
          Kitchingman’s neighborhood, the Tenderloin, has a notorious reputation, but she sees crime and homelessness as symptoms of broader, city-level issues. She described the Tenderloin as a designated “hub” that the city uses to keep homeless people and crime away from the wealthy areas like the Financial District. 
          </p>
          <p className="text-lg">
          “People's opinions about the Tenderloin, when they don't experience it, they don't even care for the people there,” Kitchingman said. “They see it as, you know, danger. They see it as shit in the streets.” 
          </p>
          <p className="text-lg">
          She finds it difficult to interact with people who look down on her neighborhood. “The people, even if they're homeless, they are my neighbors,” Kitchingman said.
          </p>
          <p className="text-lg">
          Talking about “tech bros” who have moved to San Francisco for well-paying jobs in recent years, she said, “The companies that they work for have already destroyed a lot of what has made the city great. You know, those office buildings are still taking up spaces, those housing units are still overpriced, those streets are being pushed clean, pushing homeless people into smaller and smaller corners in the city.”
          </p>
          <p className="text-lg">
          Kitchingman wishes that people coming into San Francisco would just “treat people as people.”
          </p>
          <p className="text-lg">
          Still, she’s hopeful that the city and its residents can do better. She looks forward to the construction of more affordable housing, citing a multi-unit residential building — <a className="underline hover:text-blue-500" target="_blank" href="https://sfstandard.com/2025/02/01/touchless-car-wash-housing-plans/">400 Divisadero</a> — that was recently approved. 
          </p>
          <p className="text-lg">
          “I do want to stay in San Francisco,” she said.
          </p>
          <ProfileCloseButton />
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
          Lei Levy grew up in North Beach and runs Pier 23, a waterfront cafe and bar on San Francisco’s Embarcadero that her mother started 36 years ago. She has watched the city and its economy transform for decades — especially since the COVID-19 pandemic.
          </p>
          <p className="text-lg">
          “We used to have like 250,000 people coming in to work from downtown,” she said. “Now it's like we have a quarter of that, and businesses aren't opening, you know; offices aren't opening up downtown.”
          </p>
          <p className="text-lg">
          Levy has leaned on local communities to keep the cafe full.
          </p>
          <p className="text-lg">
          “What we've been able to maintain is just classic San Francisco. That's what we bring to the table. We have a lot of people who've come here for years, who have, like, family events here, birthdays.”
          </p>
          <p className="text-lg">
          Pier 23 took a hit when COVID-19 showed up in San Francisco and people couldn’t gather indoors. The cafe has recovered, to some extent, but economic conditions are still hard.
          </p>
          <p className="text-lg">
          Levy said that her restaurant caters to the middle class and that the middle-class economy has shrunk. “Our customer base can’t go out and eat all the time because they're struggling just to buy eggs or groceries,” she said. “It's basic needs."
          </p>
          <p className="text-lg">
          Levy hopes the cafe will get more business from book fairs and music events near Pier 23, and she’s hopeful that the recent mayoral election in San Francisco will stimulate the local economy. 
          </p>
          <p className="text-lg">
          “Let's hope we can stay open in the next five years,” she said.
          </p>
          <p className="text-lg">
          “There's glimmers of hope and light that we're seeing that hopefully actually manifest,” Levy said. “[There are] people who really believe in this place.”
          </p>
          <ProfileCloseButton />
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="overscroll-none">
      <Scrolly backgroundImage={street}>
        <div className="h-[100vh] bg -mt-120 flex-col justify-items items-center">
          <div className="bg-amber-300 rounded-2xl p-2">
           <p className=" text-2xl text-center">From Mission Street food carts to fine dining on the Wharf, San Francisco is a great place to eat.</p>
          </div>
        </div>
        <div className="h-[100vh] bg">
          <div className="bg-amber-300 rounded-2xl p-2">
          <p className="text-2xl text-center">The city was named the “culinary capital” of the U.S. in a <a className="underline hover:text-blue-500" target="_blank" href="https://clarifycapital.com/culinary-capitals-of-america#scroll-5">Clarify Capital survey of 1,000 Americans.</a>
          </p>
          </div>
        </div>
        
      </Scrolly>

      <Scrolly backgroundImage={graph} hideImageOnMobile={true}>
        <div className="h-[100vh] bg">
          <div className="bg-amber-300 rounded-2xl p-2">
            <p className="text-2xl text-center">
              The city also boasts the highest ratio of local restaurants to chain restaurants of any U.S. metropolitan area.
            </p>
          </div>
          <img src={graph} className="lg:hidden py-20"></img>
        </div>
        <div className="h-[100vh] bg">
          <div className="bg-amber-300 rounded-2xl p-2">
            <p className="text-2xl">
              But the city is also experiencing crisis. For decades, housing costs and other costs of living have made it difficult for many San Francisco residents and businesses to stay in the city. 
            </p>
          </div>
        </div>
        
      </Scrolly>

      <Scrolly backgroundImage={covid}>
      <div className="h-[100vh] bg">
          <div className="bg-amber-300 rounded-2xl p-2">
            <p className="text-2xl">
              The COVID-19 pandemic brought more challenges, limiting physical gatherings and impacting the restaurant economy, as well as the food and restaurant culture San Francisco is known for. 
              &nbsp;
            </p>
            <p className="text-2xl">
              &nbsp;  
            </p>
            <p className="text-2xl">
              More recently, federal immigration policies have residents and workers worried, as <a className="underline hover:text-blue-500" target="_blank" href="https://vera-institute.files.svdcdn.com/production/downloads/publications/profile-foreign-born-population-san-francisco.pdf"> 31 percent of the S.F. metropolitan area population is made up of immigrants.</a> 
            </p>
          </div>
        </div>
        <div className="h-[100vh]">
          <div className="bg-amber-300 rounded-2xl p-2">
            <p className="text-2xl">
            So, who are the people who build and deliver SF’s rich food culture? How are they faring?
            </p>
          </div>
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