import "../Home.css";
import iphone from "../assets/iphone.jpg";
import cart from "../assets/cart.jpg";

const Home = () => {
  return (
    <div>
      <div className="add-to-cart_wrapper">
        <img src={cart} alt="cart" />
      </div>

      <h1>Home Container</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src={iphone} alt="iphone" />
        </div>
        <div className="text-wrapper item">
          <span>i-phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
