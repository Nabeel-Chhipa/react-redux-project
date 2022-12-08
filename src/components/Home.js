import "../Home.css";
import iphone from "../assets/iphone.jpg";

const Home = (props) => {
  // console.log("Props from Home component:", props);
  return (
    <div>
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
          <button
            onClick={() =>
              props.removeToCartHandler()
            }
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
