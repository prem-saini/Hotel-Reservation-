import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "../src/Pages/Home"
import Hotel from "./Pages/Hotel";
import ListSearch from "./Pages/ListSearch";

// import Hotel from "./pages/hotel/Hotel";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ListSearch" element={<ListSearch />} />

        <Route path="/Hotel" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;