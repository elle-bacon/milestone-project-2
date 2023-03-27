import React, { useState, useEffect } from "react"
import axios from "axios"
import Buttoncreate from "./button"

// window. addEventListener("load", function(){
//    function open(event){
//         document.querySelector(".popup").style.display = "block";
//     }
//     setTimeout (open(),
    
//     2000

//     )
//     });
//     document.querySelector("#close") .addEventListener
//     ("click", function () {
//     document.querySelector(".popup") .style.display =
//     "none";
//     }); 


  

function Chats(props) {
    
    return (
        <>
            <div className="KATCHATS">
                <span>{props.chat.pic}</span>
                <span>{props.chat.katty}</span>
            </div>
        </>
    )
}

function Homepage(props) {
    const [chats, setChats] = useState({
        chats: [],
    })
const [popupStyle, setPopupStyle] = useState("block")


    useEffect(() => {
        axios.get('http://localhost:5001/chats/')
            .then(response => {
                setChats({
                    ...chats,
                    chats: response.data
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    const chatsList = () => {
        return chats.chats.map(currentchat => {
            return <Chats chat={currentchat} key={currentchat._id} />
        })
    }

    return (
        <>
            <h3>Create a ChattyKat post:</h3>
            <div style={{display:"flex", flexDirection:"column"}}>
            <Buttoncreate id ="chatbutton"/>

                {chatsList()}
            </div>

            <div className="popup" style={{display:popupStyle}}>
      <button id="close" onClick={()=>{setPopupStyle("none")}} >&times;</button>
      <h3>agreement</h3>
      <p>By using our site all users agree to refraining from illegal activity, hate speech and other forms of noninclusive behavior.  This website is intended for recreational purposes only.  Please fact check information you may read via posts and contact us if you this you have encountered a breach in our user agreement policy.  A contact link can be found under our FQA section.  Thank you for choosing to use ChattyKat.  ᵖᵘʳʳ^._.^= ∫
      </p>
    <button id="close" onClick={()=>{setPopupStyle("none")}} style={{fontSize:"10pt",color:"blue"}} >continue</button>
       </div> 
       </>

    )
}


export default Homepage