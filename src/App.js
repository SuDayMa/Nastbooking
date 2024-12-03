import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import FlightPage from "./pages/flightPage/FlightPage"; // Kiểm tra đúng đường dẫn và cách viết
import CarRentalPage from "./pages/carRentalPage/CarRentalPage"; // Nhập trang Thuê xe
import SightseeingPage from "./pages/sightseeingPage/SightseeingPage"; // Nhập trang Tham quan
import TaxiPage from "./pages/taxiPage/TaxiPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/flights" element={<FlightPage />} />
        <Route path="/car-rental" element={<CarRentalPage />} /> {/* Tuyến đường Thuê xe */}
        <Route path="/sightseeing" element={<SightseeingPage />} /> {/* Tuyến đường Tham quan */}
        <Route path="/taxi" element={<TaxiPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
