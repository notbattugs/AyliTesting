import "../App.css";

const HomeTwo = () => {
  return (
    <div className="threePicsContainer">
      <p className="products3pics" style={{ font: 'bold' }}>
        Гайхамшигт Далай Нар
      </p>
      <div className="products3pics">
        <div className="threeProducts">
          <div
            style={{
              height: '60vh',
              width: '100%',
              backgroundImage: `url(
                'https://montsame.mn/files/62e753da7895b.jpeg'
              )`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            alt=""
            className="threeImage"
          />
          <span className="threePicsType">Хөвсгөл нуур</span>
        </div>
        <div className="threeProducts">
          <div
            style={{
              height: '60vh',
              width: '100%',
              backgroundImage: `url(
                'https://ihotel.mn/img/uploads/places/016039112288863d9362853f79845f75.jpg'
              )`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            alt=""
            className="threeImage"
          />
          <span className="threePicsType">Өгий нуур</span>{" "}
        </div>
        <div className="threeProducts">
          <div
            style={{
              height: '60vh',
              width: '100%',
              backgroundImage: `url(
                'https://ihotel.mn/img/uploads/places/5aee494b015fc8d0a195385c2d5e1c07.jpg'
              )`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            alt=""
            className="threeImage"
          />
          <span className="threePicsType">Буйр нуур</span>{" "}
        </div>
      </div>
    </div>
  );
};

export default HomeTwo;
