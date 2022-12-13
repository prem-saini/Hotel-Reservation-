import React from "react"
import "./E Mail.css"
function Mail() {
    return (
        <>
            <div className="Mail">
                <h1 className="MailText">Save time, save money!</h1>
                <span className="Mailtext">Sign up and we'll send the best deals to you</span>
                <div className="MailInput">
                    <input type="text" placeholder="Enter a E-Mail"></input>
                    <button className="btnn-btnn">Subscribe</button>
                </div>
            </div>
        </>
    )
}
export default Mail