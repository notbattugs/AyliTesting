import HotelCard from "./HotelCard";
import { useState, useEffect } from "react";
import { instance } from "../App";
import { useNavigate } from "react-router-dom";
const HotelsOfHome = () => {
  const navigate = useNavigate();
  const [service, setService] = useState();
  const getService = async () => {
    const res = await instance.get("/service");
    setService(res.data.data);
  };

  useEffect(() => {
    getService();
  }, [service]);
  const jumpToHotel = (id) => {
    navigate(`hotels/${id}`);
  };
  return (
    <div style={styles.GridCOnt}>
      {service &&
        service.map((e) => {
          return (
            <div
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
  );
};
export default HotelsOfHome;
const styles = {
  GridCOnt: {
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    columnGap: "5px",
    rowGap: "20px",
    padding: "10px",
    zIndex: "0",
  },
};
