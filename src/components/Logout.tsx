export default function Logout({ onLogout }: { onLogout: () => void }) {
  return (
    <button onClick={onLogout}>
      Logout
    </button>
  );
}
