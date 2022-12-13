import React, { useState } from "react"
import "./Header.css"
import { DateRange } from "react-date-range"
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from "date-fns"
import { useNavigate } from "react-router-dom"

function Header() {
    const [opendate, setOpenDate] = useState(false)
    const [destination, setDestination] = useState("")
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ])
    const [openoption, setOpenOption] = useState(false)
    const [options, setOptions] = useState(
        {
            adult: 0,
            children: 0,
            room: 0,
        }
    )
    const navigate = useNavigate()

    const onhandleClick = (name, operation) => {
        // debugger
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,

            };


        })


    }
    const handleSearch = () => {
        navigate("/ListSearch", { state: { destination, date, options } })
    }

    return (
        <>
            <div className="Main">
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

                <div className="Header_third">
                    <h2>A Lifetime of discount? It's Geinus</h2>
                    <p>  Get rewarded for your travels – unlock instant savings of 10% or
                        more with a free Prembooking account</p>
                    <button className="bt">Sign in / Register</button>
                </div>
                <div className="HeaderDate">
                    <div className="headerinput">
                        <input type="text" className="headerText" placeholder="where are you going?" onChange={(e) => setDestination(e.target.value)} />
                    </div>
                    <div className="Header_Date">
                        <span onClick={() => setOpenDate(!opendate)} className="headerdate" >{`${format(date[0].startDate,
                            "MM/dd/yyyy"
                        )}
                        to ${format(date[0].endDate,
                            "MM/dd/yyyy")}`}</span>
                        {opendate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date} className="date" />
                        }
                    </div>
                    <div className="Header_other">
                        <span onClick={() => setOpenOption(!openoption)} className="headeritem">{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                        {openoption && <div className="option">
                            <div className="optionitem">
                                <span className="optiontext">Adult</span>
                                <div className="counter">
                                    <button className="optioncounterAdd" onClick={() => onhandleClick("adult", "i")}>+</button>
                                    <span className="optioncounternumber">{options.adult}</span>

                                    <button disabled={options.adult <= 1} className="optioncounterAdd" onClick={() => onhandleClick("adult", "d")}>-</button></div>
                            </div>
                            <div className="optionitem">
                                <span className="optiontext">children</span>
                                <div className="counter">
                                    <button

                                        className="optioncounterAdd" onClick={() => onhandleClick("children", "i")}>+</button>
                                    <span className="optioncounternumber">{options.children}</span>
                                    <button disabled={options.children <= 1} className="optioncounterAdd" onClick={() => onhandleClick("children", "d")}>-</button></div>
                            </div>
                            <div className="optionitem">
                                <span className="optiontext">room</span>
                                <div className="counter">
                                    <button className="optioncounterAdd" onClick={() => onhandleClick("room", "i")}>+</button>
                                    <span className="optioncounternumber">{options.room}</span>
                                    <button disabled={options.room <= 1} className="optioncounterAdd" onClick={() => onhandleClick("room", "d")}>-</button></div>
                            </div>
                        </div>}

                        {/* </div> */}
                    </div>
                    <div className="Header_button">
                        <button className="butt" onClick={() => handleSearch()}>Search</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header