# Reusing Logic with Custom Hooks (use)

### App js

```js
import useOnline from "./hook/useOnline";

export default function StatusBar() {
  const isOnline = useOnline();

  return <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>;
}
```

### useOnline Custom hook

```js
import { useEffect, useState } from "react";

export default function useOnline() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
}
```
