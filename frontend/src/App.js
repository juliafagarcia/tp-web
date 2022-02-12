import logo from './logo.svg';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

function App() {
  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>
              &#9776;
            </button>
          </div>
          <Link to="/">
              <div className="logo">
                {/*<img className="logo" src="images/logo.png" alt="logo"/>*/}
                <b className="logo">CAKESHOP</b>
              </div>
          </Link>
          <div className="header-links">
            <a href="cart.html">Carrinho</a>
            <a href="signin.html">Login</a>
          </div>
        </header>
        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>x</button>
          <ul>
            <li>
              <a href="index.html">Cupcake</a>
            </li>

            <li>
              <a href="index.html">Greatcake</a>
            </li>

          </ul>
        </aside>
        <main className="main">
          <div className="content">
              <Route path="/product/:id" component={ProductScreen} />
              <Route path="/" exact={true} component={HomeScreen} />
          </div>

        </main>
        <footer className="footer">
          Igor Luciano de Paula e Júlia Ferraz Agra Garcia - 2021/2 - Programação Web - Grupo 14
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
