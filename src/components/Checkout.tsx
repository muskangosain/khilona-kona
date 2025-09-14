import { useState } from "react";
import FakeStripeModal from "./FakeStripeModal";
import PaymentSuccess from "./PaymentSuccess";

export default function Checkout({
  cart,
  setCart,
  setShowCheckout,
}: {
  cart: { id: number; name: string; price: number; image: string; quantity: number }[];
  setCart: (cart: any) => void;
  setShowCheckout: (show: boolean) => void;
}) {
  const [showStripe, setShowStripe] = useState(false);
  const [paymentDone, setPaymentDone] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const updateQuantity = (id: number, delta: number) => {
    setCart((prevCart: any) =>
      prevCart
        .map((item: any) =>
          item.id === id ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item: any) => item.quantity > 0) // remove if 0
    );
  };

  // ✅ If payment is successful, show success page
  if (paymentDone) {
    return <PaymentSuccess setShowCheckout={setShowCheckout} />;
  }

  return (
    <div className="flex flex-col items-center justify-center flex-grow px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-pink-600">Checkout 🧾</h2>

      <div className="w-full max-w-2xl bg-white p-6 rounded-xl shadow-lg">
        {cart.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-600 text-lg mb-6">🛒 Your cart is empty.</p>
            <button
              onClick={() => setShowCheckout(false)}
              className="bg-pink-500 hover:bg-pink-600 text-white py-3 px-6 rounded-xl"
            >
              Go Back to Shop
            </button>
          </div>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4 mb-4"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-600">
                      ₹{item.price} × {item.quantity}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="bg-gray-300 hover:bg-gray-400 px-2 py-1 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="bg-gray-300 hover:bg-gray-400 px-2 py-1 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}

            <div className="text-xl font-bold mb-4">Total: ₹{total}</div>

            <div className="flex space-x-4">
              <button
                onClick={() => setShowCheckout(false)}
                className="flex-1 bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl"
              >
                Go Back to Shop
              </button>
              <button
                onClick={() => setShowStripe(true)}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl"
              >
                Pay Now
              </button>
            </div>
          </>
        )}
      </div>

      {/* ✅ Fake Stripe Modal */}
      {showStripe && (
        <FakeStripeModal
          amount={total}
          onClose={() => setShowStripe(false)}
          onSuccess={() => {
            setCart([]); // clear cart
            setPaymentDone(true); // show success page
          }}
        />
      )}
    </div>
  );
}
