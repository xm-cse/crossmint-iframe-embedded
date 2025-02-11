import { useState } from "react";
import "./App.css";

function App() {
  const [showCheckout, setShowCheckout] = useState(false);
  const checkoutUrl = import.meta.env.VITE_CHECKOUT_URL?.trim();
  
  console.log("Checkout URL:", checkoutUrl);

  return (
    <div className="container">
      {!showCheckout ? (
        <button
          type="button"
          className="cta-button"
          onClick={() => setShowCheckout(true)}
        >
          Pay Now
        </button>
      ) : (
        <div className="checkout-wrapper">
          <iframe
            src={checkoutUrl}
            allow="payment"
            allowFullScreen
            title="Crossmint Payment Checkout"
            className="checkout-frame"
          />
        </div>
      )}
    </div>
  );
}

export default App;
