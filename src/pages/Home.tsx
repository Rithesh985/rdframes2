import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginExplorePopup from "@/components/LoginExplorePopup";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user && !sessionStorage.getItem("popupShown")) {
      setShowPopup(true);
      sessionStorage.setItem("popupShown", "true");
    }
  }, []);

  return (
    <>
      {showPopup && (
        <LoginExplorePopup
          onClose={() => setShowPopup(false)}
          onLogin={() => navigate("/login")}
        />
      )}

      <main className="min-h-screen p-6">
        Home content here
      </main>
    </>
  );
};

export default Home;
