import { useNavigate } from "react-router-dom";
import GoogleLogin from "@/components/GoogleLogin";

const Login = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = (userData: any) => {
    localStorage.setItem("user", JSON.stringify(userData));
    navigate("/", { replace: true });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">

        {/* Brand Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img
                className="h-full w-full object-cover"
                src="/rd.jpg"
                alt="RD Frames Logo"
              />
            </div>
          </div>
          <h1 className="font-display text-4xl font-bold text-gray-900 mb-2">
            RD Frames
          </h1>
          <p className="text-gray-600 font-medium">
            Memories Made Special
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Sign In</h2>
          </div>

          <div className="mb-6 flex justify-center">
            <GoogleLogin onLogin={handleLoginSuccess} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;
