import { instance } from "../App";
import moment from "moment";

const OrderOfHotel = ({ order }) => {
  const date = new moment().format("MMMM Do YYYY, h:mm:ss a");
  const orderOrder = async () => {
    const res = await instance.put(`/order/${order._id}`, {
      date: date,
      locationOfOrder: "d",
      nameOfOrder: "d",
      durationOfOrder: "D",
      user_id: JSON.parse(localStorage.getItem("user_id")),
    });
  };
  return (
    <div className="zahialga-tailbar-main">
      <div className="uruu-zahialah-img">
        <img src="" alt="" />
      </div>
      <div className="uruu-zahialah-icon"></div>
      <div className="title-main">
        <div className="title-zahialga">sex chamber</div>
        <p className="title-mini">(1 өргөн ортой)</p>
      </div>

      <div className="zahialga-tailbar">heregtseet buh bagaj tuhuurumj bii</div>
      <div className="zahialga-border-tailbar-main">
        <div className="zahialga-border-tailbar">👨 3-5 хүний багтаамжтай</div>
        <div className="zahialga-border-tailbar-two">🛏️ 2 bed</div>
        <div className="zahialga-border-tailbar-three">3 m2</div>
      </div>
      <div className="zahialga-border-bottom">
        <div className="border-bottom-main">
          <div className="border-bottom-sh">Small room X 2</div>
          <div className="border-bottom-price">for / 1 хоног</div>
        </div>
      </div>
      <div className="button-container">
        <button onClick={orderOrder} className="button-order">
          order
        </button>
      </div>
    </div>
  );
};
export default OrderOfHotel;
