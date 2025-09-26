import { useEffect, useState } from "react";
import "./Loader.scss";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Показываем лоадер 1 секунду
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Блокируем скролл body, пока идет загрузка
    if (isLoading) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isLoading]);

  return (
    <div className={`loader__wrapper ${isLoading ? "active" : ""}`}>
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
