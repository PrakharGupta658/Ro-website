import React, { useEffect , useState} from "react";
import { useCart } from "react-use-cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "./Firebase/Firebase";

function ProductCards(props) {
  const [addToCart , setAddToCart] = useState(false);
  const [addToCart1 , setAddToCart1] = useState("ADD TO CART");

  useEffect(() => {
    auth.onAuthStateChanged((usrName) => {
      if(usrName) {
         setAddToCart(false)
      } else {
        setAddToCart(true)
        setAddToCart1("LogIn For Buy")
      }
    
    });
  }, []);

  const { addItem } = useCart();

  console.log("additem is==", addItem);
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img
            src={props.imgsrc}
            className="card-img-top"
            alt={props.title}
            width={300}
            height={300}
          />
          <div className="card-body">
            <h6 className="card-title">{props.title}</h6>
            <h4 className="card-text">INR {props.price}</h4>
            <p>(include all taxes)</p>
            <button
              className="btn btn-warning"
              onClick={() => {
                addItem(props.item);
                //  alert(`Your Item ${props.title} is successfully added to Cart`)
                toast.info(`Your Item ${props.title} is successfully added to Cart`, {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                });
              }}
              disabled={addToCart}
            >
             {addToCart1}
            </button>
          </div>
        </div>
        <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      </div>
    </>
  );
}

export default ProductCards;
