const ExtraOfHotel = ({ extra }) => {
  console.log(extra);
  return (
    <div className="extra-container">
      <div className="baidag-zuils-border-img">
        <img
          src={extra.imageOfExtra && extra.imageOfExtra}
          alt=""
          className="baidag-zuils-border-img"
        />
      </div>
      <div className="border-main">
        <div className="baidag-zuils-border-title">{extra.titleOfExtra}</div>
        <p className="baidag-zuils-border-tailbar">{extra.definitionOfExtra}</p>
        <div className="baidag-zuils-border-une">{extra.priceOfExtra}</div>
      </div>
      <button className="button-order">order</button>
    </div>
  );
};
export default ExtraOfHotel;
