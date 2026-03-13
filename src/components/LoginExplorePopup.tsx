import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  onClose: () => void;
  onLogin: () => void;
}

const LoginExplorePopup = ({ onClose, onLogin }: Props) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 w-[90%] max-w-md shadow-xl relative">
        
        {/* Close icon */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          <X size={20} />
        </button>

        <h2 className="text-xl font-semibold mb-2">
          Login to explore 🚀
        </h2>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          Please login to access all features and personalized content.
        </p>

        <div className="flex gap-3 justify-end">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={onLogin}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginExplorePopup;
