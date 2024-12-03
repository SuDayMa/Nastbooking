import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
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

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber =
      direction === "l"
        ? (slideNumber - 1 + photos.length) % photos.length
        : (slideNumber + 1) % photos.length;

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img
                src={photos[slideNumber].src}
                alt={`Hình ảnh khách sạn ${slideNumber + 1}`}
                className="sliderImg"
                onError={(e) => (e.target.src = "fallback-image-url.jpg")}
              />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Đặt ngay hoặc giữ chỗ!</button>
          <h1 className="hotelTitle">Căn hộ Tower Street</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">
            Vị trí tuyệt vời – cách trung tâm 500m
          </span>
          <span className="hotelPriceHighlight">
            Đặt phòng từ $114 và nhận ngay taxi sân bay miễn phí
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt={`Hình ảnh khách sạn ${i + 1}`}
                  className="hotelImg"
                  onError={(e) => (e.target.src = "fallback-image-url.jpg")}
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Trải nghiệm giữa lòng thành phố</h1>
              <p className="hotelDesc">
                Nằm cách Cổng St. Florian ở Krakow chỉ 5 phút đi bộ, Căn hộ Tower
                Street cung cấp chỗ ở với máy điều hòa và WiFi miễn phí. Các căn
                hộ được lát sàn gỗ, có bếp nhỏ đầy đủ tiện nghi với lò vi sóng, TV
                màn hình phẳng, và phòng tắm riêng với vòi sen cùng máy sấy tóc.
                Ngoài ra, còn có tủ lạnh, ấm đun nước và máy pha cà phê. Các điểm
                tham quan nổi tiếng gần đó bao gồm Cloth Hall, Quảng trường Chợ
                Chính và Tháp Tòa Thị Chính. Sân bay gần nhất là Sân bay Quốc tế
                John Paul II Kraków–Balice, cách Căn hộ Tower Street 16,1 km, và
                chỗ nghỉ cung cấp dịch vụ đưa đón sân bay có tính phí.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Hoàn hảo cho kỳ nghỉ 9 đêm!</h1>
              <span>
                Nằm tại trung tâm thực sự của Krakow, chỗ nghỉ này đạt điểm vị trí
                tuyệt vời 9.8!
              </span>
              <h2>
                <b>23.949.000 VND</b> (9 đêm)
              </h2>
              <button>Đặt ngay hoặc giữ chỗ!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
