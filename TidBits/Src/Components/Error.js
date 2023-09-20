import { useRouteError } from "react-router-dom";
import error from "../Assets/error.jpg"
import { Link } from "react-router-dom";
import { IoMdArrowRoundForward } from "react-icons/io";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return(
        <div className=" w-1/2 mx-auto my-4">
            <img src={error} className="w-full"/>
            <p className=" text-center text-3xl font-sans font-bold">⚠️{err.status + ": " + err.statusText}</p>
            <br/>
            <Link to ="/"><button className="border-solid border border-amber-600 rounded-lg font-sans text-base py-2 px-4 text-white bg-amber-600 text-center">Return to Safety <IoMdArrowRoundForward/></button></Link>
        </div>
    )
}

export default Error;