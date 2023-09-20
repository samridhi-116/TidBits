import { useEffect, useState } from "react";

const useOnline = () => {

    const [isOnline, setIsOnline] = useState(true);
    // so, yeh event listen se kya hoga ki jbb mein hum offline hoge, yeh hume ek error de dega, like check your internet connection and stuff...
    //aur yeh event kinti baar trigger hoga?? yeh event sirf ek baar trigger hoga... jbb app load ho rha hoga.. bs tbb.. 
    // and how to make it run just once?? obv using useEffect.. pass an empty dependency array 
    useEffect(()=>{ 
        const handleOnline = () =>{
            setIsOnline(true);
        }
        const handleOffline = () =>{
            setIsOnline(false);
        }

        window.addEventListener("online", handleOnline)
        window.addEventListener("offline", handleOffline)

        return () =>{
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        }

        // abhi agr events handle nhi kre hote, toh hamare events bg mein run ho rhe hote hamesha.. and wahi extra space bhi lete fir. 
    },[])

    //so, idhr hum 

    return isOnline;
}

export default useOnline;