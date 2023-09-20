import { createContext } from "react";

const UserContext = createContext({
    user:{
        name:"Dummy Text",
        email:"dummy@text.in"
    }
});

export default UserContext;