import React from "react"

function Buttoncreate () {


  const  handleClick  = () => {
    
    //takes you to the create chats page
    window.location = "/chats"

    }

    return (
        <button className="button" onClick={handleClick}>+</button>
    )

}

export default Buttoncreate