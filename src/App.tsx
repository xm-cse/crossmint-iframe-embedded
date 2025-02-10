import './App.css';

function App() {
  return (
    <div className="container">
      <div className="checkout-wrapper">
        <iframe
          src="https://crossmint-custom-checkout.vercel.app/"
          allow="payment"
          allowFullScreen
          title="Crossmint Payment Checkout"
          className="checkout-frame"
        />
      </div>
    </div>
  );
}

export default App;
