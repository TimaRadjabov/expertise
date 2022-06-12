import { Link } from "react-router-dom";
import logo from "./Logo.png";
import "./HeaderStyles.scss";

export const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-logo">
        <Link to="/"><img src={logo} alt="Logo" /></Link>
      </div>
      <div className="header-nav">
        <Link to="/" className="nav-link">
          Главная
        </Link>
        <Link to="news" className="nav-link">
          Новости
        </Link>
        <Link to="aboutUs" className="nav-link">
          О нас
        </Link>
        <Link to="expertise" className="nav-link">
          Экспертиза
        </Link>
        <Link to="estimation" className="nav-link">
          Оценка
        </Link>
        <Link to="supporting" className="nav-link">
          Поддержка
        </Link>
        <Link to="contacts" className="nav-link">
          Контакты
        </Link>
      </div>
    </div>
  );
};
