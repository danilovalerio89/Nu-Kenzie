import "./style.css";
import { useState } from "react";

const Form = ({ addTransactions, setMostrarTodos }) => {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("Entrada");
  const [novoId, setNovoId] = useState(0);

  function handlerSubmit(event) {
    event.preventDefault();
    addTransactions({
      value: Number(value),
      description: description,
      type: type,
      id: novoId,
    });
  }
  function addIdAndChangePage(boolean) {
    setNovoId(novoId + 1);
    setMostrarTodos(boolean);
  }

  return (
    <div className="div_form">
      <h3 className="title_description">Descrição</h3>
      <form onSubmit={handlerSubmit} className="form_container">
        <input
          onChange={(event) => setDescription(event.target.value)}
          className="input_form"
          type="text"
          placeholder="Digite aqui sua descrição"
        />
        <span className="span_exemple">Ex: Compra de roupas</span>

        <div className="div_inputs">
          <div className="div_value">
            <label> Valor</label>
            <input
              onChange={(event) =>
                setValue(
                  Number(event.target.value.replace(",", ".")).toFixed(2)
                )
              }
              className="input_value"
              type="text"
              placeholder="Valor"
            />
          </div>
          <div className="div_select">
            <label> Tipo Valor</label>
            <select
              onChange={(event) => setType(event.target.value)}
              className="select_comp"
            >
              <option value="Entrada">Entrada</option>
              <option value="Despesa">Despesa</option>
            </select>
          </div>
        </div>
        <button
          onClick={() => addIdAndChangePage(true)}
          type="submit"
          className="button_add_value"
        >
          Inserir Valor
        </button>
      </form>
    </div>
  );
};
export default Form;
