import { useState } from "react";
import "./App.css";

function App() {
  const [showCheckout, setShowCheckout] = useState(false);

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
            src="https://crossmint-embedded-demo-nine.vercel.app/"
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
