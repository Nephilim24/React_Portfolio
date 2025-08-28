import "./Form.scss";
import Button from "../../Reuse/Button/Button";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Form = () => {
  const { register, handleSubmit, reset } = useForm();
  const [deleteId, setDeleteId] = useState("");

  const sendFormData = async (data) => {
    try {
      const response = await fetch(
        "https://9aac6b3a6e853a76.mokky.dev/feedbacks",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ data }),
        }
      );
      console.log("Запрос отправлен", data);
      if (!response.ok) {
        throw new Error(`Ошибка при отправке: ${response.statusText}`);
      }
    } catch (error) {
      console.log("Ошибка при отправке данных:", error);
    }
    reset();
  };

  const handleDelete = async () => {
    if (!deleteId) {
      alert("Введите ID для удаления");
      return;
    }

    try {
      const response = await fetch(
        `https://9aac6b3a6e853a76.mokky.dev/feedbacks/${deleteId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error(`Ошибка при удалении: ${response.status}`);
      }

      console.log(`Запись с ID ${deleteId} удалена`);
      setDeleteId(""); // очистим поле после удаления
    } catch (error) {
      console.error("Ошибка при удалении:", error);
    }
  };

  return (
    <>
      <form id="myForm" onSubmit={handleSubmit(sendFormData)}>
        <input
          {...register("name", { required: true })}
          type="text"
          placeholder="Имя"
        />
        <input
          {...register("surname", { required: true })}
          type="text"
          placeholder="Фамилия"
        />
        <input
          {...register("email")}
          type="email"
          placeholder="Электронная почта"
        />
        <input
          {...register("phone")}
          type="tel"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="Телефон"
        />
        <textarea {...register("message")} placeholder="Сообщение"></textarea>
      </form>
      <div className="form__actions">
        <Button text={"Сбросить"} type={"reset"} form={"myForm"} />
        <Button text={"Отправить"} type={"submit"} form={"myForm"} />
      </div>
      <input
        type="text"
        placeholder="ID для удаления"
        value={deleteId}
        onChange={(e) => setDeleteId(e.target.value)}
      />
      <Button text="Удалить по ID" onClick={handleDelete} />
    </>
  );
};

export default Form;

// ID моего чата или группы -4850849790
