import React, { useState } from "react";
import axios from "axios";
import ""

function Chats(props) {
    let [chat, setChat] = useState({
        katty: '',
        pic: ''
    })

    const onChangeKatty = (e) => {
        setChat({ ...chat, 
        katty: e.target.value})
    }

    const onChangePic = (e) => {
        setChat({ ...chat,
        pic: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();

        setChat({...chat,
        katty: chat.katty})

        setChat({...chat,
            pic: chat.pic})

            axios.post('http://localhost:5001/chats/add', chat)
            .then(res => console.log(res.data));

            console.log(chat)

            window.location = "/"
    }

    return(
        <>
            <h2>Create a new Chat to talk to others!</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Your Chat:</label>
                    <input type="text"
                        required
                        value={chat.katty}
                        onChange={onChangeKatty}/>
                </div>
                <div>
                    <label>Your Cat:</label>
                    <input type="text"
                        required
                        value={chat.pic}
                        onChange={onChangePic}/>
                </div>
                <div>
                    <input type="submit" value="Create new Chat"/>
                </div>

            </form>
        
        
        
        
        
        </>

    )
}

export default Chats