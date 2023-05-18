import './HomeOne.css';
import Carousel from 'react-bootstrap/Carousel';

const HomeOne = () => {
  return (
    // <div className="picOneContainer">
    //   <div className="picOneGoShop">
    //     <h3>There's is booking of Mongolian place that you can stay</h3>
    //   </div>
    //   <img
    //     src="https://www.discovermongolia.mn/uploads/c-beauty-of-mongolia-Incredible-Scenery.jpg"
    //     alt=""
    //     className="picOneImage"
    //   />
    // </div>
    <Carousel>
      <Carousel.Item style={{ width: '100vw', height: '5 0vh' }}>
        <img
          className="d-block w-100 picOneImage"
          style={{ height: '50vh', width: '100vw' }}
          src="https://images.unsplash.com/photo-1647603676981-aeca9b69eb42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1vbmdvbHxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="picOneGoShop">Монгол улсын гайхамшигт газрууд</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ width: '100vw', height: '5 0vh' }}>
        <img
          className="d-block w-100 picOneImage"
          style={{ height: '50vh', width: '100vw' }}
          src="https://www.discovermongolia.mn/uploads/how-to-travel-to-mongolia-blog-cover.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="picOneGoShop">Монгол улсын гайхамшигт газрууд</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ width: '100vw', height: '5 0vh' }}>
        <img
          className="d-block w-100 picOneImage"
          style={{ height: '50vh', width: '100vw' }}
          src="https://cdn.tourradar.com/s3/tour/1500x800/23183_537e69.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="picOneGoShop">Монгол улсын гайхамшигт газрууд</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ width: '100vw', height: '5 0vh' }}>
        <img
          className="d-block w-100 picOneImage"
          style={{ height: '50vh', width: '100vw' }}
          src="https://images.unsplash.com/photo-1595692732588-2e8a32b77911?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1vbmdvbGlhfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="picOneGoShop">Монгол улсын гайхамшигт газрууд</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ width: '100vw', height: '5 0vh' }}>
        <img
          className="d-block w-100 picOneImage"
          style={{ height: '50vh', width: '100vw' }}
          src="https://ihotel.mn/img/uploads/hotels/5d39dbad5793684c7c0cf9eb42b7c876.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="picOneGoShop">Монгол улсын гайхамшигт газрууд</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default HomeOne;
