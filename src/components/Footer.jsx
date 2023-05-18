import './Footer.css';
const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="topFooter">
        <div className="supportsContainer">
          {/* <div className="supports">
            <span className="nikeFooterGanganTsagaan">GIFT CARDS</span>
            <span className="nikeFooterGanganTsagaan">PROMOTIONS</span>
            <span className="nikeFooterGanganTsagaan">FIND A STORE</span>
            <span className="nikeFooterGanganTsagaan">SIGN UP FOR EMAIL</span>
            <span className="nikeFooterGanganTsagaan">BECOME A MEMBER </span>
            <span className="nikeFooterGanganTsagaan">AYLI JOURNAL</span>
            <span className="nikeFooterGanganTsagaan">SEND US FEEDBACK</span>
          </div> */}
          <div className="supports">
            <span className="nikeFooterGanganTsagaan">GET HELP</span>
            <span className="nikeFooterDajguWhite">Order Status</span>
            <span className="nikeFooterDajguWhite">Shipping and Delivery</span>
            <span className="nikeFooterDajguWhite">Returns</span>
            <span className="nikeFooterDajguWhite">Payment Options </span>
            <span className="nikeFooterDajguWhite">Gift Card Balance</span>
            <span className="nikeFooterDajguWhite">Contact Us</span>
          </div>
          <div className="supports">
            <span className="nikeFooterGanganTsagaan">ABOUT AYLI</span>
            <span className="nikeFooterDajguWhite">News</span>
            <span className="nikeFooterDajguWhite">Careers</span>
            <span className="nikeFooterDajguWhite">Investors</span>
            <span className="nikeFooterDajguWhite">Purpose </span>
            <span className="nikeFooterDajguWhite">Sustainability</span>
          </div>
        </div>
        <div className="connections">
          <div className="connectionIcons">
            <img
              className="nikeBagAndFavIcon"
              src="https://cdn-icons-png.flaticon.com/512/3128/3128212.png"
              alt=""
            />
          </div>
          <div className="connectionIcons">
            <img
              className="nikeBagAndFavIcon"
              src="https://cdn-icons-png.flaticon.com/512/20/20837.png"
              alt=""
            />
          </div>
          <div className="connectionIcons">
            <img
              className="nikeBagAndFavIcon"
              src="https://cdn-icons-png.flaticon.com/512/1384/1384028.png"
              alt=""
            />
          </div>
          <div className="connectionIcons">
            <img
              className="nikeBagAndFavIcon"
              src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="botFooter">
        <div className="botSideOne">
          <div className="locationContainer">
            <div className="connectionIconsLoc">
              <img
                className="nikeBagAndFavIcon"
                src="https://cdn-icons-png.flaticon.com/512/1295/1295232.png"
                alt=""
              />
            </div>
            <span className="nikeFooterGanganTsagaan">Ulaanbaatar</span>
          </div>
          <span className="nikeFooterDajguWhite">
            © 2023 AYLI, Inc. All Rights Reserved
          </span>
        </div>
        <div className="botSideTwo">
          <span className="nikeFooterDajguWhite">Guides</span>
          <span className="nikeFooterDajguWhite">Terms of Sale</span>
          <span className="nikeFooterDajguWhite">Terms of Use</span>
          <span className="nikeFooterDajguWhite">AYLI Privacy Policy</span>
          <span className="nikeFooterDajguWhite">CA Supply Chains Act</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
