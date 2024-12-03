import React, { useState } from "react";
import "./sightseeingPage.css";
import Navbar from "../../components/navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faPlane, faBed, faTaxi, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const SightseeingPage = () => {
  const [tours, setTours] = useState([
    {
      id: 1,
      name: "Vịnh Hạ Long - Kỳ quan thế giới",
      price: "1,500,000 VND/người",
      description: "Tham quan kỳ quan thiên nhiên với hàng nghìn hòn đảo đá vôi kỳ thú.",
      image: "https://admin.vov.gov.vn/UploadFolder/KhoTin/Files/UploadFolder/VOVVN/Files/w800/uploaded/9eqrbt2uv7o/2020_07_04/lang_chai_ba_hangg_2_1__dwaz.jpeg",
    },
    {
      id: 2,
      name: "Sapa - Khám phá vùng núi Tây Bắc",
      price: "2,000,000 VND/người",
      description: "Khám phá bản làng, ruộng bậc thang và khí hậu mát mẻ của Sapa.",
      image: "https://mia.vn/media/uploads/blog-du-lich/kham-pha-sapa-vung-dat-bon-mua-may-ben-nguoi-02-1625576088.jpeg",
    },
    {
      id: 3,
      name: "Hội An - Thành phố cổ kính",
      price: "1,200,000 VND/người",
      description: "Tận hưởng vẻ đẹp yên bình và nét văn hóa đặc sắc tại Hội An.",
      image: "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/08/hoi-an-quang-nam-vntrip.jpg",
    },
    {
      id: 4,
      name: "Đà Lạt - Thành phố ngàn hoa",
      price: "1,800,000 VND/người",
      description: "Thưởng ngoạn phong cảnh thơ mộng và khí hậu se lạnh tại Đà Lạt.",
      image: "https://i.imgur.com/oNR3BgK.jpeg",
    },
  ]);

  const [activePage, setActivePage] = useState("sightseeing");
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
    setActivePage("home");
  };

  const handleFlightClick = () => {
    navigate("/flights");
    setActivePage("flights");
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
    };

  return (
    <div className="sightseeingPage">
      <Navbar />

      {/* Header navigation */}
      <div className="header">
        <div className="headerContainer">
          <div className="headerList">
            <div
              className={`headerListItem ${activePage === "luutru" ? "active" : ""}`}
              onClick={handleHomeClick}
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
            <div className="headerListItem" onClick={handleTaxiClick}>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Taxi sân bay</span>
          </div>
          </div>
          <h1 className="headerTitle">Khám phá điểm đến tuyệt vời</h1>
        </div>
      </div>

      {/* Sightseeing content */}
      <div className="sightseeingContainer">
        <div className="tourResults">
          <h2>Danh sách tour tham quan</h2>
          <div className="toursList">
            {tours.map((tour) => (
              <div key={tour.id} className="tourCard">
                <img src={tour.image} alt={tour.name} className="tourImage" />
                <div className="tourDetails">
                  <h3>{tour.name}</h3>
                  <p>
                    <strong>Giá:</strong> {tour.price}
                  </p>
                  <p>
                    <strong>Mô tả:</strong> {tour.description}
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

export default SightseeingPage;
