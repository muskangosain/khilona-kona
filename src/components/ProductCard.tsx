export default function ProductCard({ product, onAddToCart }: { product: any; onAddToCart: (product: any) => void }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center">
      <img src={product.image} alt={product.name} className="w-32 h-32 object-cover mb-4 rounded-lg" />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-pink-600 font-bold mt-1">₹{product.price}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="mt-3 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
      >
        Add to Cart
      </button>
    </div>
  );
}
