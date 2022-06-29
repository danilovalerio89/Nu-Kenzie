import imgTrash from "../../img/ButtonTrash.png";
import "./style.css";

const Card = ({ item, index, removeTransaction }) => {
  const { value, description, type, id } = item;

  // cliquei = index / lista completa / achar o index nela / filtrar esse index

  return (
    <section
      className={
        type === "Entrada" ? "section_card_green" : "section_card_grey"
      }
    >
      <div className="div_salary">
        <h3 className="title_money">{description}</h3>
        <p className="type_money">{type}</p>
      </div>
      <div className="money_icon">
        <p className="p_money">R$ {value.toFixed(2)}</p>
        <figure>
          <button
            id={id}
            className="button_trash"
            onClick={(event) => removeTransaction(event.currentTarget.id)}
          >
            <img src={imgTrash} alt="Lixeira" />
          </button>
        </figure>
      </div>
    </section>
  );
};
export default Card;
