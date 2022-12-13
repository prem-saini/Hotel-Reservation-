
import './Home.css';
import FeatureProperties from "../../src/Component/FeatureProperties";
import Features from "../../src/Component/Features"
import Header from "../../src/Component/Header"
import Properties from "../../src/Component/Properties"
import Mail from '../../src/Component/E Mail'
import Footer from "../../src/Component/Footer"
// import ListSearch from '../../src/Component/ListSearch'


function Home() {
    return (
        <>
            <Header />
            <Features />
            <h1 className='texxt'>Browser by Properties Type</h1>
            <Properties />
            <h1 className='texxt'>Home guest Love</h1>
            <FeatureProperties />
            < Mail />
            <Footer />

            {/* <ListSearch /> */}

        </>
    );
}

export default Home;
