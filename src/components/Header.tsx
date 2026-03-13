import React, { useEffect, useState } from "react";
import { ShoppingCart, LogOut, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";

interface HeaderProps {
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCartClick }) => {
  const { totalItems } = useCart();
  const navigate = useNavigate();

  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/", { replace: true });
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src="/rd.jpg"
                alt="RD Frames Logo"
              />
            </div>
            <div>
              <h1 className="font-display text-xl font-bold text-foreground">
                RD Frames
              </h1>
              <p className="text-xs text-muted-foreground">
                Memories Made Special
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium hover:text-primary">
              Home
            </a>
            <a href="#products" className="text-sm text-muted-foreground hover:text-primary">
              Products
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">
              About
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-primary">
              Contact
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">

            {/* Auth Section */}
            {!user ? (
              <button
                onClick={handleLoginRedirect}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-button text-primary-foreground text-sm font-medium rounded-full hover:opacity-90 transition-opacity"
              >
                <User className="w-4 h-4" />
                Login
              </button>
            ) : (
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium hidden sm:block">
                  Hi, {user.name}
                </span>
                <button
                  onClick={handleLogout}
                  className="p-2 rounded-full hover:bg-muted transition-colors"
                  title="Logout"
                >
                  <LogOut className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>
            )}

            {/* Cart */}
            <button
              onClick={onCartClick}
              className="relative p-2 rounded-full hover:bg-muted transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
