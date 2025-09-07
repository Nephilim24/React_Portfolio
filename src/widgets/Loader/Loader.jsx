import { useEffect, useState } from "react";
import "./Loader.scss";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadeOut, setIsFadeOut] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsFadeOut(true); // Начинаем анимацию затухания
      setTimeout(() => {
        setIsLoading(false); // Загрузка завершена
      }, 1000);
    };

    // 3. Используем событие 'load' на window. Оно ждет загрузки всех ресурсов
    //    (картинок, стилей), что лучше подходит для лоадера.
    window.addEventListener("load", handleLoad);

    // 4. Возвращаем функцию очистки, которая удаляет ТОТ ЖЕ самый обработчик.
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []); // Пустой массив зависимостей гарантирует, что эффект выполнится только один раз

  return (
    // 5. Упрощаем логику классов. Класс 'active' добавляется, пока isLoading === true.
    <div
      className={`loader__wrapper ${isLoading ? "active" : ""} ${
        isFadeOut ? "fade-out" : ""
      }`}
    >
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
