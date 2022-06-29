import "./style.css";
import NoLogo from "../../img/NoCard.png";
import Card from "../Card";

const List = ({
  renderList,
  filtroEntrada,
  setMostrarTodos,
  removeTransaction,
}) => {
  return (
    <>
      <nav className="nav_financial">
        <div className="div_title_nav">
          <h3 className="title_nav">Resumo financeiro </h3>
        </div>
        <ul className="div_buttons">
          <button
            onClick={(event) => {
              setMostrarTodos(true);
            }}
            className="all_entries button_div"
          >
            Todos
          </button>
          <button
            onClick={(event) => {
              filtroEntrada("Entrada");
              setMostrarTodos(false);
            }}
            className="entries button_div"
          >
            Entradas
          </button>
          <button
            onClick={(event) => {
              filtroEntrada("Despesa");
              setMostrarTodos(false);
            }}
            className="expenses button_div"
          >
            Despesas
          </button>
        </ul>
      </nav>
      <div className="div_card">
        {renderList.length > 0 ? (
          renderList.map((item, index) => (
            <Card
              key={index}
              item={item}
              index={index}
              removeTransaction={removeTransaction}
            />
          ))
        ) : (
          <div className="div_no_entries">
            <h2 className="title_no_entries">
              Você ainda não possui nenhum lançamento.
            </h2>
            <figure className="figure_no_entries">
              <img className="no_logo" src={NoLogo} alt="Sem lançamentos." />
            </figure>
            <figure className="figure_no_entries">
              <img className="no_logo" src={NoLogo} alt="Sem lançamentos." />
            </figure>
            <figure className="figure_no_entries">
              <img className="no_logo" src={NoLogo} alt="Sem lançamentos." />
            </figure>
          </div>
        )}
      </div>
    </>
  );
};

export default List;
