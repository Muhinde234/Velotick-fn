import { useMutation } from "@tanstack/react-query";
import { ApiLogout } from "../../api/";
import { useUser } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const { logout } = useUser();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async () => {
      try {
        await ApiLogout(); // Call your API logout endpoint
      } catch (error) {
        console.error("Logout API error:", error);
        // Still proceed with client-side cleanup even if API fails
      }
    },
    onSuccess: () => {
      logout(); // Clear context and localStorage
      navigate("/login", { replace: true }); // Redirect to login
    },
    onError: (error) => {
      console.error("Logout failed:", error);
      // Optional: Show error toast/message
    }
  });
};