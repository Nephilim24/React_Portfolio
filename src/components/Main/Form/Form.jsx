import "./Form.scss";
import Button from "../../Reuse/Button/Button";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm({
    mode: "onBlur", // Проверка при потере фокуса
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' или 'error'

  // Следим за значениями email и phone
  const emailValue = watch("email");
  const phoneValue = watch("phone");

  // Функция отправки данных
  const onSubmit = async (data) => {
    setIsLoading(true);
    setSubmitStatus(null);

    try {
      // Отправляем POST запрос на нашу serverless функцию
      const response = await fetch("/api/send-telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        reset(); // Очищаем форму после успешной отправки
        console.log("Сообщение успешно отправлено!");
      } else {
        setSubmitStatus("error");
        console.error("Ошибка:", result.error);
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Ошибка отправки:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form id="myForm" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", {
            required: "Имя обязательно для заполнения",
            minLength: {
              value: 2,
              message: "Имя должно содержать минимум 2 символа",
            },
          })}
          type="text"
          placeholder="Имя"
          disabled={isLoading}
        />
        {errors.name && (
          <span style={{ color: "red", fontSize: "12px" }}>
            {errors.name.message}
          </span>
        )}

        <input
          {...register("surname", {
            required: "Фамилия обязательна для заполнения",
            minLength: {
              value: 2,
              message: "Фамилия должна содержать минимум 2 символа",
            },
          })}
          type="text"
          placeholder="Фамилия"
          disabled={isLoading}
        />
        {errors.surname && (
          <span style={{ color: "red", fontSize: "12px" }}>
            {errors.surname.message}
          </span>
        )}

        <input
          {...register("email", {
            required: !emailValue ? "Укажите email или телефон" : false,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Некорректный email адрес",
            },
          })}
          type="email"
          placeholder="Электронная почта"
          disabled={isLoading}
        />
        {errors.email && (
          <span style={{ color: "red", fontSize: "12px" }}>
            {errors.email.message}
          </span>
        )}

        <input
          {...register("phone", {
            required: !phoneValue ? "Укажите email или телефон" : false,
            pattern: {
              value: /^[\d\s\+\-\(\)]+$/,
              message: "Некорректный номер телефона",
            },
            minLength: {
              value: 9,
              message: "Номер должен содержать минимум 9 цифр",
            },
          })}
          type="tel"
          placeholder="Телефон (например: +998 90 123 45 67)"
          disabled={isLoading}
        />
        {errors.phone && (
          <span style={{ color: "red", fontSize: "12px" }}>
            {errors.phone.message}
          </span>
        )}

        <textarea
          {...register("message")}
          placeholder="Сообщение"
          disabled={isLoading}
        ></textarea>

        {/* Сообщения о статусе отправки */}
        {submitStatus === "success" && (
          <div style={{ color: "green", marginTop: "10px" }}>
            ✅ Сообщение успешно отправлено!
          </div>
        )}
        {submitStatus === "error" && (
          <div style={{ color: "red", marginTop: "10px" }}>
            ❌ Ошибка отправки. Попробуйте ещё раз.
          </div>
        )}
      </form>

      <div className="form__actions">
        <Button
          text={"Сбросить"}
          type={"reset"}
          form={"myForm"}
          disabled={isLoading}
        />
        <Button
          text={isLoading ? "Отправка..." : "Отправить"}
          type={"submit"}
          form={"myForm"}
          disabled={isLoading}
        />
      </div>
    </>
  );
};

export default Form;
