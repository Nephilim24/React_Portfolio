import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Loader from "./components/Loader/Loader.jsx";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const isLowPerf =
      (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) ||
      (navigator.deviceMemory && navigator.deviceMemory < 2);
    if (isLowPerf) {
      document.body.classList.add("low-perf");
    } else {
      document.body.classList.remove("low-perf");
    }
  }, []);

  return (
    <>
      <Loader />
      <Header />
      <Main />
    </>
  );
}

export default App;
