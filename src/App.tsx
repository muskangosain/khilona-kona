import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";

export default function App() {
  const [cart, setCart] = useState<any[]>([]);
  const [showCheckout, setShowCheckout] = useState(false);

  // ✅ Add to Cart
  const handleAddToCart = (product: any) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // ✅ Cart count
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <Header cartCount={cartCount} onCheckout={() => setShowCheckout(true)} />

      {/* Main Content */}
      <main className="flex-grow">
        {showCheckout ? (
          <Checkout cart={cart} setCart={setCart} setShowCheckout={setShowCheckout} />
        ) : (
          <>
            <Hero />
            <ProductGrid
              onAddToCart={handleAddToCart}
              setShowCheckout={setShowCheckout}
              cartCount={cartCount}
            />
          </>
        )}
      </main>

      {/* Sticky Footer */}
      <Footer />
    </div>
  );
}
