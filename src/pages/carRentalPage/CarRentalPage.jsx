import React, { useState } from "react";
import "./carRentalPage.css";
import Navbar from "../../components/navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faPlane, faBed, faTaxi, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const CarRentalPage = () => {
  const [cars, setCars] = useState([
    {
      id: 1,
      name: "Toyota Camry",
      type: "Sedan",
      price: "1,200,000 VND/ngày",
      image: "https://xemiennam.vn/wp-content/uploads/2021/05/thue%CC%82-xe-camry-1067x800.jpg",
    },
    {
      id: 2,
      name: "Ford Explorer",
      type: "SUV",
      price: "2,000,000 VND/ngày",
      image: "https://thuexehuydat.com/wp-content/uploads/2019/05/tien_phong_ford_explorer_3_ogtl.jpg",
    },
    {
      id: 3,
      name: "Honda Civic",
      type: "Sedan",
      price: "1,000,000 VND/ngày",
      image: "https://xetulaigiare.vn/images/202005/goods_img/1619-g-danh-gia-honda-civic.jpg",
    },
    {
      id: 4,
      name: "Mercedes-Benz E-Class",
      type: "Luxury",
      price: "3,500,000 VND/ngày",
      image: "https://xeducvinh.vn/wp-content/uploads/2023/09/cho-thue-xe-mercedes-e-hang-sang.jpg",
    },
  ]);

  const [activePage, setActivePage] = useState("carRental");
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
    navigate("/carRental");
    setActivePage("carRental");
  };

  const handleSightseeingClick = () => {
    navigate("/sightseeing");
    setActivePage("sightseeing");
  };

  const handleTaxiClick = () => {
    navigate("/taxi");
    setActivePage("taxi");
  };

  return (
    <div className="carRentalPage">
      <Navbar />

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
              className={`headerListItem ${activePage === "carRental" ? "active" : ""}`}
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
          <h1 className="headerTitle">Tìm xe phù hợp</h1>
        </div>
      </div>

      <div className="carRentalContainer">
        <div className="carSearch">
          <div className="carSearchItem">
            <label>Địa điểm nhận xe</label>
            <input type="text" placeholder="Nhập thành phố hoặc địa điểm" />
          </div>
          <div className="carSearchItem">
            <label>Ngày nhận xe</label>
            <input type="date" />
          </div>
          <div className="carSearchItem">
            <label>Ngày trả xe</label>
            <input type="date" />
          </div>
          <button className="carSearchBtn">Tìm xe</button>
        </div>

        <div className="carResults">
          <h2>Xe phù hợp</h2>
          <div className="carsList">
            {cars.map((car) => (
              <div key={car.id} className="carCard">
                <img src={car.image} alt={car.name} className="carImage" />
                <div className="carDetails">
                  <h3>{car.name}</h3>
                  <p>
                    <strong>Loại xe:</strong> {car.type}
                  </p>
                  <p>
                    <strong>Giá:</strong> {car.price}
                  </p>
                  <button className="rentNowBtn">Thuê ngay</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarRentalPage;