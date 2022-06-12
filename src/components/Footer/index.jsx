import { AiOutlineShake } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineEnvironment } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import "./FooterStyles.scss";

export const Footer = () => {
  return (
    <div className="footer-wrapper">
      <p className="footer-title">Национальный институт качества</p>

      <div className="phone-block">
        <p>
          <AiOutlineShake /> 8-800-7000-913
        </p>
        <p>
          <AiOutlineMail /> info@expertolog.ru
        </p>
      </div>

      <div className="email">
        <p>
          <AiOutlineEnvironment /> 420073, РТ, г. Казань, ул. Гвардейская, д. 15
        </p>
        <p>
          <AiOutlineClockCircle /> Пн-Пт с 9.00 до 18.00 (Сб-Вс выходной)
        </p>
      </div>
    </div>
  );
};
