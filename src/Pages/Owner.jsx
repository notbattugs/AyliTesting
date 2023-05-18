import CreateExtra from "../components/CreateExtra";
import CreateOrder from "../components/CreateOrder";
import CreateService from "../components/CreateService";
import Savbar from "../components/Navbar";

const Owner = () => {
  return (
    <div>
      <Savbar />
      <CreateService />
      <CreateExtra />
      <CreateOrder />
    </div>
  );
};
export { Owner };
