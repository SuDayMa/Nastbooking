import "./searchItem.css";

const SearchItem = ({ data }) => {
  return (
    <div className="searchItem">
      <img src={data.image} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{data.title}</h1>
        <span className="siDistance">{data.distance}</span>
        <span className="siTaxiOp">{data.taxiOption}</span>
        <span className="siSubtitle">{data.subtitle}</span>
        <span className="siFeatures">{data.features}</span>
        <span className="siCancelOp">{data.cancelOption}</span>
        <span className="siCancelOpSubtitle">{data.cancelSubtitle}</span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>{data.ratingText}</span>
          <button>{data.rating}</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">{data.price}</span>
          <span className="siTaxOp">{data.taxOption}</span>
          <button className="siCheckButton">Xem tình trạng còn phòng</button>
        </div>
      </div>
    </div>
  );
};

const SearchList = () => {
  const apartments = [
    {
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1",
      title: "Căn hộ Tower Street",
      distance: "500m từ trung tâm",
      taxiOption: "Taxi sân bay miễn phí",
      subtitle: "Căn hộ studio với máy điều hòa",
      features: "Toàn bộ căn studio • 1 phòng tắm • 21m² 1 giường đôi",
      cancelOption: "Hủy miễn phí",
      cancelSubtitle: "Bạn có thể hủy sau, vì vậy hãy đặt ngay giá tốt hôm nay!",
      ratingText: "Xuất sắc",
      rating: "8.9",
      price: "2.838.000 VND",
      taxOption: "Đã bao gồm thuế và phí",
    },
    {
      image:
        "https://duonggiahotel.vn/wp-content/uploads/2023/01/4048e2d8302ae874b13b.jpg",
      title: "Căn hộ City View",
      distance: "1km từ trung tâm",
      taxiOption: "Dịch vụ đưa đón miễn phí",
      subtitle: "Căn hộ rộng rãi với ban công",
      features: "Căn hộ 2 phòng ngủ • 2 phòng tắm • 45m² 1 giường đôi lớn",
      cancelOption: "Hủy miễn phí",
      cancelSubtitle: "Hủy dễ dàng trước ngày đến.",
      ratingText: "Rất tốt",
      rating: "8.5",
      price: "3.500.000 VND",
      taxOption: "Đã bao gồm thuế và phí",
    },
    {
      image:
        "https://noithattugia.com/wp-content/uploads/thiet-ke-can-ho-studio-dep-tien-nghi-thoai-mai-va-hot-nhat-hien-nay_1634026075.jpg",
      title: "Căn hộ Luxury Bay",
      distance: "200m từ trung tâm",
      taxiOption: "Taxi sân bay miễn phí",
      subtitle: "Căn hộ cao cấp với view biển",
      features: "Toàn bộ căn hộ • 1 phòng tắm • 35m² 1 giường đôi lớn",
      cancelOption: "Hủy miễn phí",
      cancelSubtitle: "Đặt ngay để không bỏ lỡ ưu đãi!",
      ratingText: "Tuyệt vời",
      rating: "9.2",
      price: "4.200.000 VND",
      taxOption: "Đã bao gồm thuế và phí",
    },
  ];

  return (
    <div>
      {apartments.map((apartment, index) => (
        <SearchItem key={index} data={apartment} />
      ))}
    </div>
  );
};

export default SearchList;
