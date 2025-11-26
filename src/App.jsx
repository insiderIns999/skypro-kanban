import { useState, useEffect } from "react";
import "./App.css";
import Wrapper from "./components/Wrapper";

function App() {
  const [loading, setLoading] = useState(true);

  document.writeln(
    "<span style='display: table; margin: 20% auto 0; font-size: 200%;'>Приложение загружается...</span>"
  );
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <Wrapper loading={loading} />
      <script src="js/script.js"></script>
    </>
  );
}

export default App;
