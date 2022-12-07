import "../Home.css";
import iphone from "../assets/iphone.jpg";
import cart from "../assets/cart.jpg";

const Home = (props) => {
  console.log("Props from Home component:", props.data);
  return (
    <div>
      <span className="cartCounter">{props.data.length}</span>
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
          <button
            onClick={() =>
              props.addToCartHandler({ price: 1000.0, name: "iphone" })
            }
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
