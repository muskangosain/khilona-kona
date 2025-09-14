import React from "react";

interface FakeStripeModalProps {
  amount: number;
  onClose: () => void;
  onSuccess: () => void;
}

export default function FakeStripeModal({
  amount,
  onClose,
  onSuccess,
}: FakeStripeModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96 text-center">
        <h2 className="text-2xl font-bold mb-4 text-pink-600">Fake Stripe 💳</h2>
        <p className="mb-6 text-gray-700">
          You’re about to pay <span className="font-bold">₹{amount}</span>
        </p>

        {/* Fake payment form */}
        <input
          type="text"
          placeholder="Card Number"
          className="w-full border p-2 rounded mb-3"
        />
        <input
          type="text"
          placeholder="MM/YY"
          className="w-full border p-2 rounded mb-3"
        />
        <input
          type="text"
          placeholder="CVC"
          className="w-full border p-2 rounded mb-6"
        />

        <div className="flex justify-between space-x-3">
          <button
            onClick={onClose}
            className="flex-1 bg-gray-300 hover:bg-gray-400 py-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onSuccess();
              onClose();
            }}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
}
