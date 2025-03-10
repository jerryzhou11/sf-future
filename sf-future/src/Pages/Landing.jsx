import { Link } from "react-router-dom";
import burrito from '../assets/burrito.jpg';

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
        <img src={burrito} alt="San Francisco skyline" className="py-10 h-[50vh]">
        </img>
        <Link to="/story">
          <div className="transition-all duration-300 w-48 bg-yellow-300 hover:bg-yellow-500 hover:scale-105 font-bold py-2 px-4 rounded">
            Start Reading
          </div>
        </Link>
    </div>
    )
}

export default Landing;