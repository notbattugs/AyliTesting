import HotelCard from "../components/HotelCard";
import HomeOne from "../components/HomeOne";
import Header from "../components/Header";
import Savbar from "../components/Navbar";
import HomeTwo from "../components/HomeTwo";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import HotelsOfHome from "../components/HotelsOfHome";

const Home = () => {
  const styles = {
    HugeCont: {
      width: "100vw",
      height: "auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    GridCont: {
      width: "80%",
      display: "grid",
      gridTemplateColumns: "1fr  1fr  1fr   ",
      columnGap: "5px",
      rowGap: "20px",
      padding: "10px",
      justifyItems: "center",
    },
  };
  const [isLoading, setIsLoading] = useState(true);
  const getData = async () => {
    setTimeout(() => setIsLoading(!isLoading), 200);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {isLoading ? (
        <>
          <Loader />
        </>
      ) : (
        <div>
          <Savbar />
          <div style={{ width: "100vw", height: "130px" }}></div>
          <Header />
          <br />
          <br />
          <HomeOne />
          <br />
          <br />
          <br />
          <br />
          <HomeTwo></HomeTwo>
          <br />
          <br />
          <div style={styles.HugeCont}>
            <div style={styles.GridCont}>
              <HotelsOfHome />
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export { Home };
