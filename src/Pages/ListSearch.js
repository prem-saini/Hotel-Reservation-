import React, { useState } from "react"
import { useLocation } from "react-router-dom"
import "./ListSearch.css"
import { format } from "date-fns"
import { DateRange } from "react-date-range"
import SearchItem from "../Component/SearchItem"


function ListSearch() {
    const location = useLocation()
    const [destination, setDestination] = useState(location.state.destination)
    const [options, setOptions] = useState(location.state.options)
    const [date, setDate] = useState(location.state.date)
    const [openDate, setOpenDate] = useState(false)


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
                        <input type="text" className="inpu" placeholder={destination} />
                    </div>
                    <div className="ListDes">
                        <h6>Check In Date</h6>
                        <span className="back" onClick={() => setOpenDate(!openDate)}>{`${format(
                            date[0].startDate,
                            "MM/dd/yyyy"
                        )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                        {openDate && (
                            <DateRange
                                onChange={(item) => setDate([item.selection])}
                                minDate={new Date()}
                                ranges={date}
                            />
                        )}
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
                            <input type="number" min={1} className="in" placeholder={options.children} />
                        </div>
                        <div className="footeritem">
                            <span>Adult</span>
                            <input type="number" min={0} className="in" placeholder={options.adult} />
                        </div>
                        <div className="footeritem">
                            <span>Room</span>
                            <input type="number" min={1} className="in" placeholder={options.room} />
                        </div>
                    </div>
                    <button className="searchbtn">Search</button>
                </div>
                <div className="Listright">
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />

                </div>
            </div>

        </>
    )
}
export default ListSearch