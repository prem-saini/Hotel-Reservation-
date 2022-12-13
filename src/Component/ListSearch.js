import React from "react"
import { useLocation } from "react-router-dom"
import "./ListSearch.css"


function ListSearch() {
    const location = useLocation()

    console.log(location)
    return (
        <>
            <div className="list">
                <div className="Header">
                    <div className="left">
                        <h2>PremBooking.com</h2>
                    </div>
                    <div className="right">
                        <button className="btnn">Register</button>
                        <button className="btnn">Login</button>
                    </div>

                </div>

                <div className="head">
                    <ul className="head_u">
                        <li>Stays</li>
                        <li>Flights</li>
                        <li>Car Rents</li>
                        <li>Attraction</li>
                        <li>Airpots Taxis</li>
                    </ul>
                </div>


            </div>

            <div className="ListSearch">
                <div className="Listleft">
                    <div className="">
                        <h2>Search</h2>
                    </div>
                    <div className="ListDes">
                        <h6>Destination</h6>
                        <input type="text" className="inpu" />
                    </div>
                    <div className="ListDes">
                        <h6>Check In Date</h6>
                        <input type="text" className="inpu" />
                    </div>
                    <div className="Listoption">
                        <h6>Options</h6>
                        <div className="footeritem">
                            <span>Min Price (Per Night)</span>
                            <input type="text" className="in" />
                        </div>
                        <div className="footeritem">
                            <span>Max Price (Per Night)</span>
                            <input type="text" className="in" />
                        </div>
                        <div className="footeritem">
                            <span>Children</span>
                            <input type="text" className="in" />
                        </div>
                        <div className="footeritem">
                            <span>Adult</span>
                            <input type="text" className="in" />
                        </div>
                        <div className="footeritem">
                            <span>Room</span>
                            <input type="text" className="in" />
                        </div>
                    </div>
                    <button className="searchbtn">Search</button>
                </div>
                <div className="Listright">

                </div>
            </div>

        </>
    )
}
export default ListSearch