import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Căn hộ Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Giá từ 3,040,000 VND</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Xuất sắc</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://comfortsuitesairportnorth33166.themiamihotels.com/data/Photos/450x450w/14352/1435278/1435278862.JPEG"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Comfort Suites Airport</span>
        <span className="fpCity">Austin</span>
        <span className="fpPrice">Giá từ 3,546,000 VND</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Tuyệt vời</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/128992790.jpg?k=1be1fc5b219c91b1b6a11df4f21c75576f79f9d2473f4f650075a400ba12ceee&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Khách sạn Four Seasons</span>
        <span className="fpCity">Lisbon</span>
        <span className="fpPrice">Giá từ 2,508,000 VND</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Xuất sắc</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://stories-editor.hilton.com/apac/wp-content/uploads/sites/3/2023/08/Hilton-Garden-Inn-Prototype-Guest-room.jpg?w=1024"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hilton Garden Inn</span>
        <span className="fpCity">Berlin</span>
        <span className="fpPrice">Giá từ 2,660,000 VND</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Xuất sắc</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
