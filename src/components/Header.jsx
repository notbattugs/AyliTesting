import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Carousel from "react-bootstrap/Carousel";
import Cloud from "../assets/realistic-white-cloud-free-png.webp";
import CarouselItem from "react-bootstrap/esm/CarouselItem";

function Header() {
  return (
    <>
      {" "}
      <Carousel slide={false}>
        <CarouselItem>
          <div className="HeaderBody">
            <div className="HeaderCont">
              <div className="HeaderMid">
                <div
                  className="Circle"
                  style={{
                    backgroundImage: `url("https://unstats.un.org/unsd/methodology/assets/img/city-groups/ulaanbaatar.jpg")`,
                  }}
                ></div>
                <div
                  className="Circle"
                  style={{
                    backgroundImage: `url("https://cdn.mongolia-guide.com/generated/top/qPZQfa9tgYtzVlK5dp3za2QS2RHzrMTTCrGAL8wg_1920_1000.jpeg")`,
                  }}
                ></div>
                <div
                  className="Circle"
                  style={{
                    backgroundImage: `url("https://montsame.mn/files/62e753da7895b.jpeg")`,
                  }}
                ></div>
                <div
                  className="Circle"
                  style={{
                    backgroundImage: `url("https://www.escapetomongolia.com/__data/assets/image/0014/6242/IMG_20170718_144044.jpg")`,
                  }}
                ></div>
              </div>
            </div>
            <div className="HeaderInput">
              <h1 className="Text-White"></h1>
              <InputGroup className="mb-3">
                <Button
                  variant="outline-secondary, bg-secondary"
                  id="button-addon1"
                  style={{ color: "white" }}
                >
                  Search
                </Button>
                <Form.Control
                  aria-label="Example text with button addon"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </div>
          </div>
          <div className="HeaderInput">
            <h1 style={{ fontWeight: "bold", fontSize: "28px" }}>
              ЗОЧИД БУУДЛАА захиалаарай
            </h1>
            <InputGroup className="mb-3">
              <Button
                variant="outline-primary, bg-primary"
                id="button-addon1"
                style={{ color: "white" }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/751/751463.png"
                  style={{ width: "auto", height: "100%" }}
                />
              </Button>
              <Form.Control
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
                placeholder="Хайx Газараа Оруулна Уу"
                style={{ outline: 0 }}
              />
            </InputGroup>
          </div>
        </CarouselItem>
      </Carousel>
    </>
  );
}

export default Header;
