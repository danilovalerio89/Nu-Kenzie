import logo from "../../img/nu_kenzie.png";
import "./style.css";

const Header = () => {
  return (
    <header className="header_logo">
      <figure className="figure_logo">
        <img src={logo} alt="Logo Nu Kenzie" className="img_logo" />
      </figure>
      <button className="button_header">Inicio</button>
    </header>
  );
};
export default Header;
