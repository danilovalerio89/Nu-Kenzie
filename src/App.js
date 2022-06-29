import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import TotalMoney from "./components/TotalMoney";
import List from "./components/List";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [listaDeFiltros, setlistaDeFiltros] = useState([]);
  const [mostarTodos, setMostrarTodos] = useState(true);

  function addTransactions(newTransaction) {
    setListTransactions([...listTransactions, newTransaction]);
  }

  function filtroEntrada(typeSelected) {
    const entradasFiltradas = listTransactions.filter((item) => {
      return item.type === typeSelected;
    });
    setlistaDeFiltros(entradasFiltradas);
  }
  function removeTransaction(id) {
    setListTransactions(
      listTransactions.filter((item) => {
        return item.id !== Number(id);
      })
    );
    setMostrarTodos(true);
  }

  return (
    <div className="App">
      <Header />
      <Form
        addTransactions={addTransactions}
        setMostrarTodos={setMostrarTodos}
      />
      <TotalMoney listTransactions={listTransactions} />

      {mostarTodos ? (
        <List
          removeTransaction={removeTransaction}
          renderList={listTransactions}
          filtroEntrada={filtroEntrada}
          setMostrarTodos={setMostrarTodos}
        />
      ) : (
        <List
          removeTransaction={removeTransaction}
          renderList={listaDeFiltros}
          filtroEntrada={filtroEntrada}
          setMostrarTodos={setMostrarTodos}
        />
      )}
    </div>
  );
}

export default App;
