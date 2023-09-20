import { useState } from "react"

const Section = ({title, description, isVisible, setIsVisible}) =>{
    return(
        <div className=" border border-black p-4 mb-4">
            <h2 className=" text-lg font-medium">{title}</h2>
            {
            (isVisible === false)? 
            <button 
            className="cursor-pointer underline"
            onClick={()=>{setIsVisible(true)}}
            >Show</button> : 
            <button 
            className=" cursor-pointer underline"
            onClick={()=>{setIsVisible(false)}}
            >Hide</button>
            }
            {isVisible && <h4 className=" text-sm">{description}</h4>}
        </div>
    )
}
const Instamart = () =>{
    const [decDisplay, setDecDisplay] = useState(false);
    return(
        <>
            <h1>Welsome to Swiggy's Instamart</h1>
            <h2>Dairy, bread & eggs delivered in minutes, from the house of Swiggy.</h2>
            <br/>
            <br/>
            <h2>FAQ's</h2>
            <br/>
            {/* 
            All of these sections has it's own state, but, what we want is if we show one section, it should hide all the other sections, i.e., modify the state of other sections 
            */}
            <Section
                title={"About Instamart"}
                description={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC"}
                setIsVisible={()=>{setDecDisplay("about")}}
                isVisible={decDisplay === "about"}
            />
            <Section
                title={"Career Instamart"}
                description={"Making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage"}
                setIsVisible={()=>{setDecDisplay("career")}}
                isVisible={decDisplay === "career"}
            />
            <Section
                title={"Support Instamart"}
                description={"Going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1"}
                setIsVisible={()=>{setDecDisplay("support")}}
                isVisible={decDisplay==="support"}
            />
            <Section
                title={"Contact Instamart"}
                description={"10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."}
                isVisible={decDisplay === "contact"}
                setIsVisible={()=>{setDecDisplay("contact")}}
            />
        </>
    )
}

export default Instamart;