import React, { useState, useEffect } from "react"
import axios from "axios"

function Chats(props) {
    return(
        <>
        <div>{props.chat.katty}</div>
        <span>{props.chat.pic}</span>
        </>
    )
}

function Homepage (props) {
    let [chats, setChats] = useState ({
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
            return <Chats chat={currentchat}  key= {currentchat._id}/>
        })
    }

    return(
        <>
        <h3>Homepage</h3>
        <div>
            {chatsList()}
        </div>
        </>
    )
}

export default Homepage