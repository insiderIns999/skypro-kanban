import { useState, useEffect } from "react";
import "./App.css";
import Wrapper from "./components/Wrapper";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <span
          style={{ display: "table", margin: "20% auto 0", fontSize: "200%" }}
        >
          Приложение загружается...
        </span>
      )}
      <Wrapper loading={loading} />
      <script src="js/script.js"></script>
    </>
  );
}

export default App;
