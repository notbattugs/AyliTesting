import { useRef, useState } from "react";
import { instance } from "../App";

const CreateService = () => {
  const name = useRef();
  const price = useRef();
  const location = useRef();
  const image = useRef();
  const advantage = useRef();
  const title = useRef();
  const about = useRef();
  const [suggestions, setSuggestions] = useState([]);

  const addSuggestions = (event) => {
    if (event.key === "Enter") {
      if (advantage.current.value !== "") {
        setSuggestions([...suggestions, advantage.current.value]);
      }
    }
  };
  const removeSuggestions = (index) => {
    const filtered = suggestions.filter((e, i) => i !== index);
    setSuggestions([...filtered]);
  };
  const createService = async () => {
    try {
      await instance.post("/service", {
        name: name.current.value,
        title: title.current.value,
        about: about.current.value,
        location: location.current.value,
        price: price.current.value,
        image: image.current.value,
        suggestions: suggestions,
        role: JSON.parse(localStorage.getItem("role")),
        owner_id: JSON.parse(localStorage.getItem("user_id")),
      });
    } catch (error) {
      console.log("kfj");
    }
  };
  return (
    <div className="signupleftcont create">
      <div class="inputbox">
        <input required="required" type="text" ref={name} />
        <span>name</span>
        <i></i>
      </div>
      <div class="inputbox">
        <input required="required" type="text" ref={location} />
        <span>location</span>
        <i></i>
      </div>
      <div class="inputbox">
        <input required="required" type="text" ref={title} />
        <span>title</span>
        <i></i>
      </div>
      <div class="inputbox">
        <input required="required" type="text" ref={about} />
        <span>about</span>
        <i></i>
      </div>
      <div class="inputbox">
        <input required="required" type="text" ref={price} />
        <span>price</span>
        <i></i>
      </div>
      <div class="inputbox">
        <input required="required" type="text" ref={image} />
        <span>image</span>
        <i></i>
      </div>

      <div
        class="inputbox"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <input
          required="required"
          type="text"
          ref={advantage}
          onKeyDown={addSuggestions}
        />
        <span>suggestions</span>
        <i></i>
      </div>
      <div className="suggestionsCont">
        {suggestions &&
          suggestions.map((e, i) => {
            return (
              <div className="suggestions" onClick={() => removeSuggestions(i)}>
                {e}
              </div>
            );
          })}
      </div>
      <button onClick={createService}>Create</button>
    </div>
  );
};
export default CreateService;
