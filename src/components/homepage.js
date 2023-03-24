import React, { useState, useEffect } from "react"
import axios from "axios"
import Buttoncreate from "./button"

//a component to show the chats
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
    //useState of the chats
    let [chats, setChats] = useState({
        chats: [],
    })
    //useEffect that gets the data for the chats on the database with acios
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
    //a function that lets you display each chat with the component Chats for each chat.
    const chatsList = () => {
        return chats.chats.map(currentchat => {
            return <Chats chat={currentchat} key={currentchat._id} />
        })
    }

    return (
        <>
            <h3>Homepage</h3>
            <div>
            <Buttoncreate />

                {chatsList()}
            </div>

        </>
    )
}

export default Homepage