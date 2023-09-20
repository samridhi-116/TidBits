import { useContext } from "react";
import UserContext from "../utils/userContext";

const Footer = () => {
    const {user, setUser} = useContext(UserContext);
    return(
    <div className="footer">
        <input value={user.name} onChange={
            e=> setUser({
                ...user,
                name: e.target.value,
            })
        }/>
        <input value={user.email} onChange={
            e=> setUser({
                ...user,
                email: e.target.value,
            })
        }/>
        <p>This site was developed by {user.name} - {user.email}</p>
    </div>
)}

export default Footer;