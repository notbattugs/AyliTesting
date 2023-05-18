import Accordion from "react-bootstrap/Accordion";
import CreateExtra from "./CreateExtra";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import CreateService from "./CreateService";
import CreateOrder from "./CreateOrder";
import ExtraOfHotel from "./ExtraOfHotel";
import OrderOfHotel from "./OrderOfHotel";

function AddInfo({ data }) {
  console.log(data);
  return (
    <div style={{ width: "100%" }}>
      {" "}
      <Accordion onClick={() => console.log("kd")}>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Terelj zahialga</Accordion.Header>
          <Accordion.Body>
            <Tabs
              defaultActiveKey="profile"
              id="justify-tab-example"
              className="mb-3"
              justify
            >
              <Tab className="tabcolor" eventKey="addorders" title="Add Rooms">
                <div className="addinfocont">
                  <CreateOrder id={"1"} />
                  <div
                    style={{
                      height: "100%",
                      width: "100px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "start",
                    }}
                  >
                    <OrderOfHotel />
                  </div>
                </div>
              </Tab>

              <Tab eventKey="addextra" title="Add Extras">
                <div className="addinfocont">
                  <CreateExtra />
                  <div
                    style={{
                      height: "100%",
                      width: "100px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "start",
                      transform: "scale(2)",
                    }}
                  >
                    <ExtraOfHotel />
                  </div>
                </div>
              </Tab>
            </Tabs>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default AddInfo;
