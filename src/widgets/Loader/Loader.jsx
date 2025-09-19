import { useEffect, useState } from "react";
import "./Loader.scss";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadeOut, setIsFadeOut] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsFadeOut(true);
        setIsLoading(false);
      }, 1000);
    };

    window.addEventListener("load", handleLoad);

    // Блокируем скролл body, пока идет загрузка
    if (isLoading) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }

    return () => {
      window.removeEventListener("load", handleLoad);
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isLoading]);

  return (
    <div
      className={`loader__wrapper ${isLoading ? "active" : ""}
      }`}
    >
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
