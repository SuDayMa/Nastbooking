import React, { useState } from "react";
import "./flightPage.css";
import Navbar from "../../components/navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faPlane, faCar, faTaxi, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const FlightPage = () => {
  const [flights, setFlights] = useState([
    {
      id: 1,
      airline: "Vietnam Airlines",
      from: "Hà Nội (HAN)",
      to: "TP. Hồ Chí Minh (SGN)",
      price: "2,500,000 VND",
      image: "https://spirit.vietnamairlines.com/wp-content/uploads/2023/05/Anh-minh-hoa-1.jpg",
    },
    {
      id: 2,
      airline: "Bamboo Airways",
      from: "Đà Nẵng (DAD)",
      to: "Nha Trang (CXR)",
      price: "1,800,000 VND",
      image: "https://file1.dangcongsan.vn/data/0/images/2022/10/08/cuongbkcd/img-0185.jpg",
    },
    {
      id: 3,
      airline: "VietJet Air",
      from: "Hà Nội (HAN)",
      to: "Phú Quốc (PQC)",
      price: "1,200,000 VND",
      image: "https://lh6.googleusercontent.com/qrJ-ad3RMhfIxwaid4-FjBOvIcdatXp1sul1CxW_TCPfCI9C1FOUu4OmQOkXVlOEjYW3qO2HOzplNpO2oguHm0YuzuVbn18A08TGwjMfEN0HJkhj7arILM10JDT_Qp83VvQhwtJO8HEAUPTwPb6Tcpo",
    },
  ]);
  const [activePage, setActivePage] = useState("flights");
  const navigate = useNavigate();

  const handleLuuTruClick = () => {
    navigate("/");
  };

  const handleFlightClick = () => {
    console.log("Chuyển sang trang Chuyến bay");
  };
  
  const handleCarClick = () => {
    navigate("/car-rental");
    setActivePage("car-rental");
  };

  const handleSightseeingClick = () => {
    navigate("/sightseeing");
    setActivePage("sightseeing");
  };
  
  const handleTaxiClick = () => {
    navigate("/taxi");
    setActivePage("taxi");
  }
  
  return (
    <div className="flightPage">
      <Navbar />
  
      <div className="header">
        <div className="headerContainer">
          <div className="headerList">
            <div className="headerListItem" onClick={handleLuuTruClick}>
              <FontAwesomeIcon icon={faBed} />
              <span>Lưu trú</span>
            </div>
            <div className="headerListItem active" onClick={handleFlightClick}>
              <FontAwesomeIcon icon={faPlane} />
              <span>Chuyến bay</span>
            </div>
            <div
              className={`headerListItem ${activePage === "carRental" ? "active" : ""}`}
              onClick={handleCarClick}
            >
              <FontAwesomeIcon icon={faCar} />
              <span>Thuê xe</span>
            </div>
            <div className="headerListItem" onClick={handleSightseeingClick}>
              <FontAwesomeIcon icon={faMapMarkedAlt} />
              <span>Tham quan</span>
            </div>
            <div className="headerListItem" onClick={handleTaxiClick}>
              <FontAwesomeIcon icon={faTaxi} />
              <span>Taxi sân bay</span>
            </div>
          </div>
          <h1 className="headerTitle">Tìm kiếm chuyến bay</h1>
        </div>
      </div>
  
      <div className="flightContainer">
        <div className="flightSearch">
          <div className="flightSearchItem">
            <label>Điểm đi</label>
            <input type="text" placeholder="Nhập thành phố hoặc sân bay" />
          </div>
          <div className="flightSearchItem">
            <label>Điểm đến</label>
            <input type="text" placeholder="Nhập thành phố hoặc sân bay" />
          </div>
          <div className="flightSearchItem">
            <label>Ngày đi</label>
            <input type="date" />
          </div>
          <div className="flightSearchItem">
            <label>Ngày về (tùy chọn)</label>
            <input type="date" />
          </div>
          <div className="flightSearchItem">
            <label>Hành khách</label>
            <input type="number" min="1" defaultValue="1" />
          </div>
          <button className="flightSearchBtn">Tìm chuyến bay</button>
        </div>
  
        <div className="flightResults">
          <h2>Chuyến bay phù hợp</h2>
          <div className="flightsList">
            {flights.map((flight) => (
              <div key={flight.id} className="flightCard">
                <img
                  src={flight.image}
                  alt={flight.airline}
                  className="flightImage"
                />
                <div className="flightDetails">
                  <h3>{flight.airline}</h3>
                  <p>
                    <strong>Từ:</strong> {flight.from}
                  </p>
                  <p>
                    <strong>Đến:</strong> {flight.to}
                  </p>
                  <p>
                    <strong>Giá:</strong> {flight.price}
                  </p>
                  <button className="bookNowBtn">Đặt ngay</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightPage;