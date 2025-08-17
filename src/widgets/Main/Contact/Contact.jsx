import "./Contact.scss";
import Title from "../Title/Title";
import Descr from "../Descr/Descr";
import Form from "../Form/Form";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact__content container">
        <Title>
          <span>Связаться</span> со мной
        </Title>
        <Descr>Чтобы связаться со мной заполните поля ниже.</Descr>
        <Form />
      </div>
    </section>
  );
};

export default Contact;
