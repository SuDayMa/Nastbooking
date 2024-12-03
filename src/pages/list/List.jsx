import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination); // Điểm đến
  const [date, setDate] = useState(location.state.date); // Ngày tháng
  const [openDate, setOpenDate] = useState(false); // Trạng thái mở ngày
  const [options, setOptions] = useState(location.state.options); // Tùy chọn

  return (
    <div>
      <Navbar /> {/* Thanh điều hướng */}
      <Header type="list" /> {/* Tiêu đề trang */}
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Tìm kiếm</h1> {/* Tiêu đề tìm kiếm */}
            <div className="lsItem">
              <label>Điểm đến</label> {/* Nhãn cho điểm đến */}
              <input placeholder={destination} type="text" /> {/* Input cho điểm đến */}
            </div>
            <div className="lsItem">
              <label>Ngày nhận phòng</label> {/* Nhãn cho ngày nhận phòng */}
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} đến ${format(date[0].endDate, "MM/dd/yyyy")}`}</span> {/* Hiển thị khoảng thời gian */}
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])} // Cập nhật ngày khi thay đổi
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Tùy chọn</label> {/* Nhãn cho tùy chọn */}
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Giá tối thiểu <small>mỗi đêm</small> {/* Tùy chọn giá tối thiểu */}
                  </span>
                  <input type="number" className="lsOptionInput" /> {/* Input cho giá tối thiểu */}
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Giá tối đa <small>mỗi đêm</small> {/* Tùy chọn giá tối đa */}
                  </span>
                  <input type="number" className="lsOptionInput" /> {/* Input cho giá tối đa */}
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Người lớn</span> {/* Tùy chọn số người lớn */}
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult} // Giá trị mặc định là số người lớn
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Trẻ em</span> {/* Tùy chọn số trẻ em */}
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children} // Giá trị mặc định là số trẻ em
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Phòng</span> {/* Tùy chọn số phòng */}
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room} // Giá trị mặc định là số phòng
                  />
                </div>
              </div>
            </div>
            <button>Tìm kiếm</button> {/* Nút tìm kiếm */}
          </div>
          <div className="listResult">
            {/* Các kết quả tìm kiếm */}
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
