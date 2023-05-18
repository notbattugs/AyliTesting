import Logo from "../assets/BetterLogo.png";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Notifications from "../components/Notification";
import HotelCard from "../components/HotelCard";
import { useEffect, useState } from "react";
import { instance } from "../App";
import { useNavigate } from "react-router-dom";
import AddInfo from "../components/AddInfo";
import CreateService from "../components/CreateService";

function OwnerProfileOrders() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState();

  const getProfile = async () => {
    try {
      const res = await instance.get(
        `customer/${JSON.parse(localStorage.getItem("user_id"))}`
      );
      setProfile(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const jumpToHotel = (id) => {
    navigate(`/hotels/${id}`);
  };
  return (
    <div className="profcont">
      <div className="profleft">
        <div className="profleftcont">
          <div className="Circle2"></div>
          <div className="proftext">
            <div>
              <span>name: {profile && profile.username}</span>
            </div>
            <br />
            <div>
              <span>gmail: {profile && profile.email}</span>
            </div>
            <br />
            <div>
              <span>number: {profile && profile.mobileNumber}</span>
            </div>
            <br />
            <div>
              <span>role: {profile && profile.role}</span>
            </div>
          </div>
        </div>
        <img className="proflogo" src={Logo} alt="" />
      </div>

      <div className="profright">
        {profile &&
          profile.service.map((e) => {
            return (
              <div
                className="hotelcard"
                onClick={() => {
                  jumpToHotel(e._id);
                }}
              >
                <HotelCard
                  Image={e.image}
                  Title={e.title}
                  Location={e.location}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export { OwnerProfileOrders };
