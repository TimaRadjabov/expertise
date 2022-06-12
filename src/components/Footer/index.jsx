import { AiOutlineShake } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import "./FooterStyles.scss";

export const Footer = () => {
  return (
    <div className="footer-wrapper">
      <p>Связь с нами</p>

      <div className="phone-block">
        <p>
          <AiOutlineShake /> 8-800-7000-913
        </p>
      </div>

      <div className="email">
        <p>
          <AiOutlineMail /> info@expertolog.ru
        </p>
      </div>
    </div>
  );
};
