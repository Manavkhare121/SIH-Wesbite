import React, { useState } from 'react'
import './Chatting.css'

const Chatting = () => {
  const [inputActive, setInputActive] = useState(false);

  return (
    <div className="chatting-container">
       <div className="chatting-layout">
         <div className="chatting-main-panel">
            <div className={`chatting-input-box ${inputActive ? 'active' : ''}`} onClick={()=>setInputActive(!inputActive)}>
              <div className="chatting-input-field">
                 <input type="text" placeholder="How Can I Help You..."/>
             </div>
             <div className="chatting-send-icon">
                 <i className="ri-send-plane-fill"></i>
             </div>
            </div>
         </div>
         {/* <div className="chatting-sidebar-panel">
             <div className="chatting-add-btn">
                 <div className="chatting-btn-icon">
                     <i className="ri-add-line"></i>
                 </div>
                 <div className="chatting-btn-text">
                     Add Chat
                 </div>
             </div>
             <div className="chatting-history-card">
                 <div className="chatting-history-icon">
                     <i className="ri-chat-4-line"></i>
                 </div>
                 <div className="chatting-history-title">
                     <p>New Chat</p>
                 </div>
                 <div className="chatting-delete-btn">
                     <i className="ri-delete-bin-line"></i>
                 </div>
             </div>
         </div> */}
       </div>
    </div>
  )
}

export default Chatting