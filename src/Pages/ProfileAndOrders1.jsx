import Logo from "../assets/BetterLogo.png";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Notifications from "../components/Notification"

function ProfileOrders() {
  return (
    <div className="profcont">
      <div className="profleft">
        <div className="profleftcont">
          <div className="Circle2"></div>
          <div className="proftext">
            <div>
              <span>name: </span>
            </div>
            <br />
            <div>
              <span>gmail: </span>
            </div>
            <br />
            <div>
              <span>number: </span>
            </div>
            <br />
            <div>
              <span>role: </span>
            </div>
          </div>
        </div>
        <img className="proflogo" src={Logo} alt="" />
      </div>
      <div className="profright">
        <div className="profrightcont">
          <Tabs
            defaultActiveKey="profile"
            id="justify-tab-example"
            className="mb-3"
            justify
          >
            <Tab className="tabcolor" eventKey="Orders" title="Orders">
              <div className="profbox">
                <Notifications/>
                <Notifications/>
                <Notifications/>  
                <Notifications/>  
                <Notifications/>  

              </div>
            </Tab>
            {/* <Tab eventKey="profile" title="Profile">
              Tab content for Profile
            </Tab> */} 
            {/* "hervee hotel owner rolete bvl renderlene" */}
            <Tab eventKey="Short-cut" title="Shortcuts">
              <div>  </div> 
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export { ProfileOrders };
