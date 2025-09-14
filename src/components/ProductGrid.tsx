import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "Plush Teddy Bear", price: 799, image: "/teddy.jpg" },
  { id: 2, name: "Toy Car", price: 599, image: "/car.jpg" },
  { id: 3, name: "Barbie Doll", price: 399, image: "/doll.jpg" },
  { id: 4, name: "Lego Set", price: 1299, image: "/legoset.jpg" },
];

export default function ProductGrid({
  onAddToCart,
  setShowCheckout,
  cartCount,
}: {
  onAddToCart: (product: any) => void;
  setShowCheckout: (show: boolean) => void;
  cartCount: number;
}) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col flex-grow">
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 flex-grow">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => onAddToCart(product)}
          />
        ))}
      </div>

      {/* Checkout Button aligned to right */}
      {cartCount > 0 && (
        <div className="flex justify-end mt-6 mb-4">
          <button
            onClick={() => setShowCheckout(true)}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow-md transition"
          >
            Go to Checkout ({cartCount} items)
          </button>
        </div>
      )}
    </div>
  );
}
