import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Cart from "@/components/Cart";
import Footer from "@/components/Footer";
import LoginExplorePopup from "@/components/LoginExplorePopup";

const Index: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);

  const navigate = useNavigate();

  // 🔹 Read logged-in user for greeting
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        setUserName(user.name || user.displayName || "Guest");
      } catch {
        setUserName(null);
      }
    }
  }, []);

  // 🔹 Show login popup once per session
  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user && !sessionStorage.getItem("popupShown")) {
      setShowPopup(true);
      sessionStorage.setItem("popupShown", "true");
    }
  }, []);

  return (
    <CartProvider>
      {showPopup && (
        <LoginExplorePopup
          onClose={() => setShowPopup(false)}
          onLogin={() => navigate("/login")}
        />
      )}

      <div className="min-h-screen bg-background">
        <Header onCartClick={() => setIsCartOpen(true)} />
        <main>
          <Hero userName={userName} />
          <ProductGrid />
        </main>
        <Footer />
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  );
};

export default Index;
