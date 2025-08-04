import "./Contact.scss";
import Title from "../Title/Title";
import Descr from "../Descr/Descr";
import Form from "../Form/Form";
import Button from "../Button/Button";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact__content container">
        <Title>
          <span>Связаться</span> со мной
        </Title>
        <Descr>Чтобы связаться со мной заполните поля ниже.</Descr>
        <Form />
        <Button text={"Отправить"} type={"submit"} />
      </div>
    </section>
  );
};

export default Contact;
