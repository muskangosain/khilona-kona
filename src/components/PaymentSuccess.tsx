export default function PaymentSuccess({ setShowCheckout }: { setShowCheckout: (show: boolean) => void }) {
  return (
    <div className="flex flex-col items-center justify-center flex-grow px-4 py-12 text-center">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <div className="text-green-600 text-6xl mb-4">✅</div>
        <h2 className="text-3xl font-bold mb-4 text-pink-600">Payment Successful!</h2>
        <p className="text-gray-600 mb-6">
          Thank you for shopping with <span className="font-semibold">Khilona Kona</span> 🧸🎁
        </p>
        <button
          onClick={() => setShowCheckout(false)}
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl"
        >
          Go Back to Shop
        </button>
      </div>
    </div>
  );
}
