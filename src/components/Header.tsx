import { Link } from "react-router-dom";

type HeaderProps = {
  cartCount: number;
};

export default function Header({ cartCount }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-pink-500 text-white shadow">
      <Link to="/" className="text-2xl font-bold">
        Khilona Kona 🧸
      </Link>
      <Link to="/checkout" className="relative text-2xl">
        🛒
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-white text-pink-600 text-xs font-bold rounded-full px-2">
            {cartCount}
          </span>
        )}
      </Link>
    </header>
  );
}
