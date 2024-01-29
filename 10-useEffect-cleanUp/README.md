# Add cleanup (useEffect)

### Chat JS

```js
export function createConnection() {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log("✅ Connecting...");
    },
    disconnect() {
      console.log("❌ Disconnected.");
    },
  };
}
```

### Add JS

```js
import { useEffect } from "react";
import { createConnection } from "./chat.js";

export default function ChatRoom() {
  useEffect(() => {
    const connection = createConnection();
    connection.connect();
    // You hane to disconnect This
    return () => connection.disconnect();
  }, []);
  return <h1>Welcome to the chat!</h1>;
}
```
