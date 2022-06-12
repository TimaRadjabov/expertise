import { Link } from "react-router-dom";
import judge from "./junge2.jpg";
import "./ExpertiseStyles.scss";
import { useRef } from "react";

export const Expertise = () => {
  const list = [
    { title: "Судебная экспертиза", background: judge },
    { title: "Товарная и товароведческая экспертиза", background: judge },
    { title: "Строительная экспертиза", background: judge },
    { title: "Экспертиза госзакупок", background: judge },
    { title: "Ювелирных изделий", background: judge },
    { title: "Землеустроительная экспертиза", background: judge },
    { title: "Инженерно-техническая экспертиза", background: judge },
    { title: "Пожарная экспертиза", background: judge },
    { title: "Судебная экспертиза", background: judge },
  ];

  const itemRefs = useRef([]);

  const focusOnItem = (id) => {
    itemRefs.current.forEach((item) =>
      item.classList.remove("list-item_selected")
    );
    itemRefs.current[id].classList.add("list-item_selected");
  };
  const blurOnItem = (id) => {
    itemRefs.current[id].classList.remove("list-item_selected");
  };

  const renderList = list.map((item, i) => {
    return (
      <div
        className="list-block"
        key={i}
        style={{ backgroundImage: `url(${item.background})` }}
        ref={(el) => (itemRefs.current[i] = el)}
        onMouseEnter={() => {
          focusOnItem(i);
        }}
        onMouseLeave={() => {
          blurOnItem(i);
        }}
      >
        <Link to={i} className="list-item">
          {item.title}
        </Link>
      </div>
    );
  });
  return (
    <div className="container">
      <h1 className="expertise-title">ЭКСПЕРТИЗА ТОВАРОВ И УСЛУГ</h1>
      <div className="main-block">{renderList}</div>
    </div>
  );
};
