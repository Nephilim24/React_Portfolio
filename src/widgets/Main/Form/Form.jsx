import "./Form.scss";
const Form = () => {
  return (
    <form action="">
      <input type="text" placeholder="Имя" className="input-name" required />
      <input
        type="text"
        placeholder="Фамилия"
        className="input-surname"
        required
      />
      <input
        type="email"
        placeholder="Email"
        className="input-email"
        required
      />
      <input type="tel" placeholder="Телефон" className="input-tel" required />
      <textarea placeholder="Сообщение. Если хотите, можете указать свой Telegram nickname"></textarea>
    </form>
  );
};

export default Form;
