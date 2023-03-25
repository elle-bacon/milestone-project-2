import React, { useState, useEffect } from "react"
import axios from "axios"
import Buttoncreate from "./button"

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
    let [chats, setChats] = useState({
        chats: [],
    })

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
            <div>
            <Buttoncreate />

                {chatsList()}
            </div>

        </>
    )
}


export default Homepage