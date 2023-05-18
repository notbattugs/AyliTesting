import Accordion from "react-bootstrap/Accordion";
const NotificationOfOrder = ({ order }) => {
  console.log(order);
  return (
    <Accordion.Item eventKey="2">
      <Accordion.Header></Accordion.Header>
      <Accordion.Body>
        <div className="noticont">
          <div className="notileft"></div>
          <div className="notiright">
            <div className="notirightcont">
              <div className="notirightfont">
                <span>Ordered : </span>
                <span className="fontgreen">Billythe2008@gmail.com</span>
              </div>
              <div className="notirightfont">
                <span>Name : </span>
                <span className="fontgreen">{order.nameOfOrder}</span>
              </div>
              <div className="notirightfont">
                <span> Ordered date : </span>
                <span className="fontgreen">{order.durationOfOrder}</span>
              </div>
              <div className="notirightfont">
                <span> Check-in : </span>
                <span className="fontgreen">{order.date}</span>
              </div>
              <div className="notirightfont">
                <span>Check-out : </span>
                <span className="fontgreen">2023.8.2</span>
              </div>
              <div className="notirightfont">
                <span>Location : </span>
                <span className="fontgreen">{order.locationOfOrder}</span>
              </div>
              <div className="notirightfont">
                <span>Members : </span>
                <span className="fontgreen">4 people</span>
              </div>
              <div className="notirightfont">
                <span>Room : </span>
                <span className="fontgreen">3 room</span>
              </div>
            </div>
          </div>
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
};
export default NotificationOfOrder;
