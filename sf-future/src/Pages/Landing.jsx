import { Link } from "react-router-dom";
import skyline from '../assets/SF-skyline.png'

function Landing(){

    return(
    <div class = "flex flex-col items-center justify-center h-screen">
        <div className="text-5xl font-cursive">
        Looking To The Horizon
        </div>
        <p className="text-m mt-10">
          by <a className="underline hover:text-blue-500" target="_blank" href="https://jerryzhou11.github.io/portfolio/#/">Jerry Zhou</a>,&nbsp;
          <a className="underline hover:text-blue-500" target="_blank"href="">Rachel Smith</a>, and&nbsp;
          <a className="underline hover:text-blue-500" target="_blank"href="">Maria Jose Arango </a> 
        </p>
        <p className="text-xl mt-10">
        From a street vendor to restaurant owner, San Franciscans share thoughts about the future. 
        </p>
        <img src={skyline} alt="San Francisco skyline" className="py-10 ">
        </img>
        <Link to="">
          <div className="transition duration-300 w-48 bg-yellow-300 hover:bg-yellow-500 font-bold py-2 px-4 rounded">
            Start Reading
          </div>
        </Link>
      </div>
    )
}

export default Landing;