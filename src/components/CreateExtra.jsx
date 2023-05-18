import { useRef } from "react";
import { instance } from "../App";

const CreateExtra = () => {
  const extraOfTitle = useRef();
  const extraOfPrice = useRef();
  const extraOfDefiniton = useRef();
  const extraOfImage = useRef();

  const CreateExtra = async () => {
    try {
      const res = await instance.post(`/extraService`, {
        titleOfExtra: extraOfTitle.current.value,
        definitionOfExtra: extraOfDefiniton.current.value,
        priceOfExtra: extraOfPrice.current.value,
        imageOfExtra: extraOfImage.current.value,
        hotel_id: "645a088e837db23b63d86bb8",
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="extraOfHotel signupleftcont">
      <div class="inputbox">
        <input required="required" type="text" ref={extraOfTitle} />
        <span>Title</span>
        <i></i>
      </div>
      <div class="inputbox">
        <input required="required" type="text" ref={extraOfDefiniton} />
        <span>Definition</span>
        <i></i>
      </div>
      <div class="inputbox">
        <input required="required" type="text" ref={extraOfPrice} />
        <span>Price</span>
        <i></i>
      </div>
      <div class="inputbox">
        <input required="required" type="text" ref={extraOfImage} />
        <span>image</span>
        <i></i>
      </div>
      <button onClick={CreateExtra}>Add</button>
    </div>
  );
};
export default CreateExtra;
