import { Outlet } from "react-router-dom";

const Offer = () => {
    return(
        <>
            <h1>About Us Page</h1>
            <h2>Namaste React Live Course</h2>
            <h3>Chapter-7 (Finding the Path)</h3>
            <Outlet/>
            
        </>
    );
}

export default Offer;