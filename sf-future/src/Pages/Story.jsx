import React from 'react';
import graph from '../assets/econgraph.png';
import Scrolly from '../Components/Scrolly';

function Story() {
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
          <p className="text-2xl text-center">Explore their stories here.</p>
        </Scrolly>
    </div>
  );
}

export default Story;