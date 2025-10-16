import "./Form.scss";
import Button from "../../Reuse/Button/Button";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Form = () => {
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' или 'error'

  // Функция отправки данных
  const onSubmit = async (data) => {
    setIsLoading(true);
    setSubmitStatus(null);

    try {
      // Отправляем POST запрос на нашу serverless функцию
      const response = await fetch('/api/send-telegram.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        reset(); // Очищаем форму после успешной отправки
        console.log('Сообщение успешно отправлено!');
      } else {
        setSubmitStatus('error');
        console.error('Ошибка:', result.error);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Ошибка отправки:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form id="myForm" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true })}
          type="text"
          placeholder="Имя"
          disabled={isLoading}
        />
        <input
          {...register("surname", { required: true })}
          type="text"
          placeholder="Фамилия"
          disabled={isLoading}
        />
        <input
          {...register("email")}
          type="email"
          placeholder="Электронная почта"
          disabled={isLoading}
        />
        <input
          {...register("phone")}
          type="tel"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="Телефон"
          disabled={isLoading}
        />
        <textarea 
          {...register("message")} 
          placeholder="Сообщение"
          disabled={isLoading}
        ></textarea>

        {/* Сообщения о статусе отправки */}
        {submitStatus === 'success' && (
          <div style={{ color: 'green', marginTop: '10px' }}>
            ✅ Сообщение успешно отправлено!
          </div>
        )}
        {submitStatus === 'error' && (
          <div style={{ color: 'red', marginTop: '10px' }}>
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