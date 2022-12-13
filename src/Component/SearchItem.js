import React from "react"
import "./SearchItem.css"
import { useNavigate } from "react-router-dom"
function SearchItem() {

    const navigate = useNavigate();

    const onHandleHotel = () => {
        navigate("/Hotel")
    }
    return (
        <>
            <div className="SearchItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1" alt="imlogo" className="searchImg" />

                <div className="SearchItemDes">
                    <h1 className="searchName">Tower Street Apartments</h1>
                    <span className="searchDistance">500m from center</span>
                    <span className="searchfactlity">Free airport taxi</span>
                    <span className="searchfac"> Studio Apartment with Air conditioning</span>
                    <span className="searchinfo">    Entire studio • 1 bathroom • 21m² 1 full bed</span>
                    <span className="searchcancle">Free cancellation</span>
                    <span className="searchfree">  You can cancel later, so lock in this great price today!</span>

                </div>
                <div className="SearchItemDeatils">
                    <div className="search">
                        <span className="featurePropertiestype">Excellent</span>
                        <button className="btn-btn"> ⭐ 9.9</button>
                    </div>
                    <div className="searchText">
                        <span className="searchprice">$500</span>
                        <span className="searchtax">Includes taxes and fees</span>
                        <button className="bbttnn" onClick={() => onHandleHotel()}>See availability</button>
                    </div>

                </div>

            </div>
        </>
    )
}
export default SearchItem