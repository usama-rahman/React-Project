import useOnline from "./hook/useOnline";

export default function StatusBar() {
  const isOnline = useOnline();

  return <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>;
}
