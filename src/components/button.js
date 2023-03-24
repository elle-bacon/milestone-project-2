import React from "react"

function Buttoncreate () {


  const  handleClick  = () => {
    window.location = "/chats"

    }

    return (
        <button className="button" onClick={handleClick}>+</button>
    )

}

export default Buttoncreate