import React from "react";

function Header2() {
  return (
    <div className="Header2Body">
      <div className="Header2Cont">
        <div className="Header2Right">
          <div className="RightContent">
            <h1 className="Contextbold">
              Seek your desired locatio on this Platform.
            </h1>
            <span className="Contextsmall">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              nobis doloremque consectetur aut corrupti cupiditate eos
              laboriosam quisquam, voluptatibus reprehenderit Dolor, odit.
            </span>
            <div className="inputandbutton">
              <div class="inputbox">
                <input required="required" type="text" />
                <span>Destination</span>
                <i></i>
              </div>
              <button class="button2">Search</button>
              <button class="button2">Search by map</button>
            </div>
          </div>
        </div>
        <div className="Header2Left"></div>
      </div>
    </div>
  );
}

export default Header2;
