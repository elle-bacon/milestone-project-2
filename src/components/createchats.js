import React, { useState } from "react";
import axios from "axios";

function Chats(props) {
   //useState,
    let [chat, setChat] = useState({
        katty: '',
        pic: ''
    })
    //changes the katty value on the chat
    const onChangeKatty = (e) => {
        setChat({ ...chat, 
        katty: e.target.value})
    }
    //changes thepic vlaue on chat
    const onChangePic = (e) => {
        setChat({ ...chat,
        pic: e.target.value})
    }
// lets you submit by changing the value on the stat(chat), then it posts it on the database with acios then takes you to the homepage
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
                    <select 
                        required
                        value={chat.pic}
                        onChange={onChangePic}
                        >
                            <option>🥰 </option>
                        >   
                            <option></option>
                            <option>🥰</option>
                            <option> 👿</option>
                            <option>😠 </option>
                            <option>😭</option>

                        </select>
                </div>
                <div id="button">

                    <input type="submit" value="Create new Chat"/>

                </div>

            </form>
        
        
        
        
        
        </>

    )
}

export default Chats