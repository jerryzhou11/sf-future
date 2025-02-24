import { Link } from "react-router-dom";

function Landing(){

    return(
    <div class = "flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold">
        Looking To The Horizon
        </h1>
        <p className="text-lg mt-10">
        Clouds of worry, glimmers of hope in downtown San Francisco
        </p>
        <Link to="">
          <div className="mt-10 transition duration-300 w-48 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Start Reading
          </div>
        </Link>
      </div>
    )
}

export default Landing;