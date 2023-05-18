import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { instance } from "../App";
import "./Order.css";
import { useEffect, useState } from "react";
import OrderOfHotel from "../components/OrderOfHotel";
import ExtraOfHotel from "../components/ExtraOfHotel";
import OrderFromCustomer from "../components/OrderFromCustomer";

function Order() {
  const params = useParams();
  const [hotel, setHotel] = useState([]);
  const rating = [1, 2, 3, 4, 5];
  const getHotelData = async () => {
    try {
      const res = await instance.get(`/service/${params.id}`);
      setHotel(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getHotelData();
  }, []);

  return (
    <div className="orderContainer">
      <div className="orderContainer">
        <div className="orderMain">
          <div className="order-header">
            <div className="header-order">
              <a className="zahialga">БУЦАХ</a>
              <a className="zahialga" href="zahialga">
                ЗАХИАЛАХ
              </a>
            </div>
            <div className="bodyMain">
              <h2 className="hotel-name">{hotel.name}</h2>
              <h5 className="hotel-title">{hotel.title}</h5>
              <p className="star">
                {rating.map((e) => {
                  return <span>☆</span>;
                })}
              </p>
              <div className="info-bairshil">
                <p>{hotel.location}</p>
                <Link to={"/map"}>
                  <div className="map">Газрын зураг дээр харах</div>
                </Link>
              </div>
              <img className="hotel-img" src={hotel.image} alt="" />
              <div className="buudaliin-tailbar">
                <p className="about">{hotel.about}</p>
                <div className="line"></div>
                <div className="tohitoi-baidal">
                  Тохитой байдал & Нэмэлт тоноглол
                </div>
                <div className="net">Интернет</div>
                <div className="utasgui-net">Утасгүй интернет</div>
                <div className="zochid-buudal-sanal-bolgoh">
                  {" "}
                  Зочид буудлаас санал болгодог үйлчилгээ
                </div>
                <div className="baidaig-zuils-egnee-neg">
                  {hotel.extraService &&
                    hotel.extraService.map((e) => {
                      return <ExtraOfHotel extra={e} />;
                    })}
                </div>

                <div className="baidag-zuils-border">
                  {hotel.extraService && hotel.extraService.map((e) => {})}
                  <div className="zahialga-main">
                    {hotel.order &&
                      hotel.order.map((e) => {
                        return <OrderOfHotel order={e} />;
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-date-container">
        <OrderFromCustomer orderDate={hotel.order} />
      </div>
    </div>
  );
}

export { Order };
