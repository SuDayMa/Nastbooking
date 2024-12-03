import React, { useState } from "react";
import "./taxiPage.css";
import Navbar from "../../components/navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faPlane, faBed, faTaxi, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const TaxiPage = () => {
  const [taxis, setTaxis] = useState([
    {
      id: 1,
      name: "Taxi 4 Chỗ",
      type: "Economy",
      price: "400,000 VND",
      image: "https://inhat.vn/wp-content/uploads/2021/05/taxi-bac-ninh-4.jpg",
    },
    {
      id: 2,
      name: "Taxi 7 Chỗ",
      type: "SUV",
      price: "600,000 VND",
      image: "https://d1u7goitqk7klj.cloudfront.net/9dfat9k8gro45004glc7ngu4hf81",
    },
    {
      id: 3,
      name: "Taxi Vip",
      type: "Luxury",
      price: "1,200,000 VND",
      image: "https://storage.googleapis.com/techsauce-prod/uploads/2018/06/taxi-vip-by-all-thai-taxi.jpg",
    },
  ]);

  const [activePage, setActivePage] = useState("taxi");
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
    setActivePage("home");
  };

  const handleFlightClick = () => {
    navigate("/flights");
    setActivePage("flights");
  };

  const handleLuuTruClick = () => {
    navigate("/");
    setActivePage("luutru");
  };

  const handleCarClick = () => {
    navigate("/car-rental");
    setActivePage("car-rental");
  };

  const handleSightseeingClick = () => {
    navigate("/sightseeing");
    setActivePage("sightseeing");
  };

  return (
    <div className="taxiPage">
      <Navbar />

      {/* Header navigation */}
      <div className="header">
        <div className="headerContainer">
          <div className="headerList">
            <div
              className={`headerListItem ${activePage === "luutru" ? "active" : ""}`}
              onClick={handleLuuTruClick}
            >
              <FontAwesomeIcon icon={faBed} />
              <span>Lưu trú</span>
            </div>
            <div
              className={`headerListItem ${activePage === "flights" ? "active" : ""}`}
              onClick={handleFlightClick}
            >
              <FontAwesomeIcon icon={faPlane} />
              <span>Chuyến bay</span>
            </div>
            <div
              className={`headerListItem ${activePage === "car-rental" ? "active" : ""}`}
              onClick={handleCarClick}
            >
              <FontAwesomeIcon icon={faCar} />
              <span>Thuê xe</span>
            </div>
            <div
              className={`headerListItem ${activePage === "sightseeing" ? "active" : ""}`}
              onClick={handleSightseeingClick}
            >
              <FontAwesomeIcon icon={faMapMarkedAlt} />
              <span>Tham quan</span>
            </div>
            <div className={`headerListItem ${activePage === "taxi" ? "active whiteBackground" : ""}`}>
              <FontAwesomeIcon icon={faTaxi} />
              <span>Taxi sân bay</span>
            </div>
          </div>
          <h1 className="headerTitle">Đặt Taxi Sân Bay</h1>
        </div>
      </div>

      <div className="taxiContainer">
        <div className="taxiSearch">
          <div className="taxiSearchItem">
            <label>Địa điểm nhận taxi</label>
            <input type="text" placeholder="Nhập địa điểm nhận taxi" />
          </div>
          <div className="taxiSearchItem">
            <label>Ngày và giờ</label>
            <input type="datetime-local" />
          </div>
          <button className="taxiSearchBtn">Tìm Taxi</button>
        </div>

        <div className="taxiResults">
          <h2>Taxi Phù Hợp</h2>
          <div className="taxisList">
            {taxis.map((taxi) => (
              <div key={taxi.id} className="taxiCard">
                <img src={taxi.image} alt={taxi.name} className="taxiImage" />
                <div className="taxiDetails">
                  <h3>{taxi.name}</h3>
                  <p>
                    <strong>Loại xe:</strong> {taxi.type}
                  </p>
                  <p>
                    <strong>Giá:</strong> {taxi.price}
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

export default TaxiPage;