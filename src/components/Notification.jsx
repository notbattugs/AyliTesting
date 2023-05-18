import Accordion from "react-bootstrap/Accordion";
import { instance } from "../App";
import { useEffect, useState } from "react";
import NotificationOfOrder from "./NotificationOfOrder";

function Notifications() {
  const [order, setOrder] = useState();
  const getOrder = async () => {
    const res = await instance.get(
      `/customer/${JSON.parse(localStorage.getItem("user_id"))}`
    );
    setOrder(res.data.data.order);
  };
  useEffect(() => {
    getOrder();
  }, []);
  return (
    <div style={{ width: "100%" }}>
      {" "}
      <Accordion>
        {order &&
          order.map((e) => {
            return <NotificationOfOrder order={e} />;
          })}
      </Accordion>
    </div>
  );
}

export default Notifications;
