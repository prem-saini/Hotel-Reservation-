import React from "react"
import "./Hotel.css"
import Footer from "../../src/Component/Footer"
import Mail from "../../src/Component/E Mail"
function Hotel() {



    const photos = [
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
        },
    ];
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
            <div className="Hotel">
                <div className="Hotelmain">
                    <button className="Hotelbook">Reserve for book now</button>
                    <h1 className="Hotelname">Arya Place</h1>
                    <div className="HotelAddress">
                        <span>Behind Shyam Hotel,Near Shyam Temple KhatuShyamji</span>
                    </div>
                    <span className="HotelDistance">
                        Near by shyam Temple - 500m around
                    </span>
                    <span className="HotelPriceNight">
                        Book a Stay Over One Night $250 and get a free Bus Stand taxi.
                    </span>
                    <div className="HotelImage">
                        {
                            photos.map((photo) => {
                                return (
                                    <div className="HotelWrapper">
                                        <img src={photo?.src} alt="ilk" className="HotelImg" />
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="HotelDetils">
                        <div className="HotelDescrition">
                            <div className="HotelTitle">
                                <h1 className="hotelheading">Stay in the heart of City</h1>
                                <p className="otelDesc">
                                    Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                                    Street Apartments has accommodations with air conditioning and
                                    free WiFi. The units come with hardwood floors and feature a
                                    fully equipped kitchenette with a microwave, a flat-screen TV,
                                    and a private bathroom with shower and a hairdryer. A fridge is
                                    also offered, as well as an electric tea pot and a coffee
                                    machine. Popular points of interest near the apartment include
                                    Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                                    airport is John Paul II International Kraków–Balice, 16.1 km
                                    from Tower Street Apartments, and the property offers a paid
                                    airport shuttle service.
                                </p>
                            </div>
                            <div className="HotelPrice">
                                <h6>Perfect for a 9-night stay!</h6>
                                <span className="Hotelparagraph">
                                    Located in the real heart of Krakow, this property has an
                                    excellent location score of 9.8!
                                </span>
                                <h5 className="hotelpri">
                                    <b>$945</b> (9 nights)
                                </h5>
                                <button className="butto"> Reserve or Book Now!</button>

                            </div>

                        </div>

                    </div>
                    <Mail />
                    <Footer />

                </div>


            </div>

        </>
    )
}
export default Hotel