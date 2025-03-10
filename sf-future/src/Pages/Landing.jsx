import { Link } from "react-router-dom";
import stand from '../assets/stand.png';

function Landing(){

    return(
    <div class = "flex flex-col items-center justify-center h-fit overscroll-none">
        <div className="text-5xl font-cursive">
        People Before Platters
        </div>
        <p className="text-m mt-10">
          by <a className="underline hover:text-blue-500" target="_blank" href="https://jerryzhou11.github.io/portfolio/#/">Jerry Zhou</a>,&nbsp;
          <a className="underline hover:text-blue-500" target="_blank"href="https://www.linkedin.com/in/rachelsmithnu/">Rachel Smith</a>, and&nbsp;
          <a className="underline hover:text-blue-500" target="_blank"href="https://www.linkedin.com/in/maria-jose-arango-01798627a/">Maria Jose Arango </a> 
        </p>
        <p className="text-xl mt-10">
        Who is behind the diverse food culture of SF?
        </p>
        <div className="py-10">
        <img src={stand} alt="San Francisco skyline" className="h-[50vh] border-2 border-amber-300"/>
        </div>
        <Link to="/story">
          <div className="transition-all duration-300 w-48 bg-yellow-300 hover:bg-yellow-500 hover:scale-105 font-bold py-2 px-4 rounded">
            Start Reading
          </div>
        </Link>
    </div>
    )
}

export default Landing;