import { useRef } from "react";
import { instance } from "../App";
import { useParams } from "react-router-dom";
const CreateOrder = () => {
  const orderOfTitle = useRef();
  const orderOfRoom = useRef();
  const orderOfDefiniton = useRef();
  const orderOfArea = useRef();
  const orderOfBed = useRef();
  const orderOfPrice = useRef();
  const orderOfImage = useRef();

  const CreateOrder = async ({ id }) => {
    try {
      const res = await instance.post(`/order`, {
        titleOfOrder: orderOfTitle.current.value,
        definitionOfOrder: orderOfDefiniton.current.value,
        roomOfOrder: orderOfRoom.current.value,
        areaOfOrder: orderOfArea.current.value,
        bedOfOrder: orderOfBed.current.value,
        imageOfOrder: orderOfImage.current.value,
        priceOfOrder: orderOfPrice.current.value,
        hotel_id: id,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="orderOfHotel signupleftcont">
      <div class="inputbox">
        <input required="required" type="text" ref={orderOfTitle} />
        <span>Title</span>
        <i></i>
      </div>
      <div class="inputbox">
        <input required="required" type="text" ref={orderOfDefiniton} />
        <span>Definition</span>
        <i></i>
      </div>
      <div class="inputbox">
        <input required="required" type="text" ref={orderOfRoom} />
        <span>Room</span>
        <i></i>
      </div>
      <div class="inputbox">
        <input required="required" type="text" ref={orderOfBed} />
        <span>Bed</span>
        <i></i>
      </div>
      <div class="inputbox">
        <input required="required" type="text" ref={orderOfImage} />
        <span>Image</span>
        <i></i>
      </div>
      <div class="inputbox">
        <input required="required" type="text" ref={orderOfPrice} />
        <span>Price</span>
        <i></i>
      </div>
      <div class="inputbox">
        <input required="required" type="text" ref={orderOfArea} />
        <span>Area</span>
        <i></i>
      </div>
      <button onClick={CreateOrder}>Add</button>
    </div>
  );
};
export default CreateOrder;
