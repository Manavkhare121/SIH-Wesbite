import React, { useState } from 'react'
import './Chatbot.css'
import { FaLeaf } from 'react-icons/fa';

const Chatbot = () => {
    const [active,setActive]=useState(false);
  return (
    <div className="chatbot-navbar">
       <div className="chat-contain">
         <div className="chat-left">
           <div className={`search-box ${active ? 'active' : ''}`} onClick={()=>setActive(!active)}>
             <div className="search">
                <input type="text" placeholder="How Can I Help You..."/>
            </div>
            <div className="search-img">
                <i className="ri-send-plane-fill"></i>
            </div>
           </div>
        </div>
        <div className="chat-right">
            <div className="new-add">
                <div className="new-add-img">
                    <i class="ri-add-line"></i>
                </div>
                <div className="new-chat">
                    Add Chat
                </div>
            </div>
            <div className="new-chat-show">
                <div className="message-icon">
                    <i class="ri-chat-4-line"></i>
                </div>
                <div className="new-chat-show-text">
                    <p>New Chat</p>
                </div>
                <div className="delete-icon">
                    <i class="ri-delete-bin-line"></i>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Chatbot
