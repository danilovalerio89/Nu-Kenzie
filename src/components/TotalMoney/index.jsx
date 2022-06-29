import "./style.css";

const TotalMoney = ({ listTransactions }) => {
  function sumEntries(value) {
    return value
      .filter((item) => item.type === "Entrada")
      .reduce((a, b) => a + b.value, 0);
  }
  function sumExpenses(value) {
    return value
      .filter((item) => item.type === "Despesa")
      .reduce((a, b) => a + b.value, 0);
  }

  return (
    <div className="total_money_container">
      <div className="div_total_money">
        <h2 className="valor_total">Valor Total:</h2>
        <p className="text_total">O valor se refere as entradas</p>
      </div>

      <div className="div_sum_total">
        <h2 className="title_total">
          R$
          {(
            sumEntries(listTransactions) - sumExpenses(listTransactions)
          ).toFixed(2)}
        </h2>
      </div>
    </div>
  );
};

export default TotalMoney;
