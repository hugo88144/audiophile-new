import CheckOut from "../components/CheckOut";
import GoBack from "../components/GoBack";
import NavBar from "../components/Nav";

function CheckOutPage() {
  return (
    <div className="box">
      <NavBar />
      <GoBack />

      <CheckOut />
    </div>
  );
}

export default CheckOutPage;
