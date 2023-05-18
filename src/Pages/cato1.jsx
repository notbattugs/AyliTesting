import "../cato.css";

const Cato = () => {
  return (
    <div className="catoContainer">
      <div className="mainCato">
        <div className="header">
          <a className="logo" href="nuur huudas">
            aaaas
          </a>
          <a className="butsah" href="Буцах">
            Буцах
          </a>
          <a className="tuhlaggazar" href="Хамгийн тухлаг газрууд">
            Хамгийн тухлаг газрууд
          </a>
        </div>

        <div className="bodyCato">
          <div className="main-img-cato">
            <div className="main-img-cato-text">
              <p>terelj</p>
            </div>
          </div>

          <div className="cato-info-main">
            <div className="info-img"></div>
            <div className="info-info">
              <div className="star-online">
                <div className="star">☆☆☆☆☆</div>
                <div className="online">Онлайн</div>
              </div>
              <div className="name-info">Green Terelj | Грийн Тэрэлж</div>
              <div className="price-main">
                <div className="sale-price">200,000 MNT</div>
                <div className="real-price">300,000 MNT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Cato };
