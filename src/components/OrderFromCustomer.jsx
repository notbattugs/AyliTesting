import OrderOrder from "./OrderOrder";

const OrderFromCustomer = ({ orderDate }) => {
  const orderOfCustomer =
    orderDate &&
    orderDate.filter((e) => {
      return e.user_id === JSON.parse(localStorage.getItem("user_id"));
    });
  console.log(orderOfCustomer);
  return (
    <div>
      <p className="zognoo">Таны захиалга</p>
      <p className="date-border">Захиалах огноо сонгох </p>
      {/* <div className="date">2023-04-29~2023-04-30</div> */}
      <input type="text" />
      <div>
        {orderOfCustomer &&
          orderOfCustomer.map((e) => {
            return <OrderOrder orderAbout={e} />;
          })}
      </div>
    </div>
  );
};
export default OrderFromCustomer;
