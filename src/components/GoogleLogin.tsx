import { useEffect } from "react";

declare global {
  interface Window {
    google: any;
  }
}

export default function GoogleLogin({ onLogin }: { onLogin: (user: any) => void }) {
  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: (response: any) => {
        const user = JSON.parse(atob(response.credential.split(".")[1]));
        onLogin(user);
      },
    });

    window.google.accounts.id.renderButton(
      document.getElementById("googleBtn"),
      { theme: "outline", size: "large" }
    );
  }, []);

  return <div id="googleBtn"></div>;
}
