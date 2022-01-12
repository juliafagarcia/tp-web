import logo from './logo.svg';
import './App.css';

function App() {
  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };

  return (

    <div className="grid-container">
    <header className="header">
      <div className="brand">
        <button onClick={openMenu}>
          &#9776;
        </button>
        <a href="index.html"></a>
      </div>
    <div className="logo">
        <img className="logo" src="images/logo.png" alt="logo"/>
    </div>
      <div className="header-links">
        <a href="cart.html">Cart</a>
        <a href="signin.html">Sign In</a>
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
        <ul className="products">
          <li>
            <div className="product">
              <img className="product-image" src="/images/b1.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Bolo de Chocolate</a>
              </div>
              <div className="product-description">Bolo todo trabalhado em chocolate, massa, recheio e cobertura</div>
              <div className="product-price">$50</div>
              <div className="product-rating">5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="/images/b2.png" alt="product" />
              <div className="product-name">
                <a href="product.html">Bolo de Nozes</a>
              </div>
              <div className="product-description">Bolo delicioso de nozes com chocolate</div>
              <div className="product-price">$60</div>
              <div className="product-rating">4 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="/images/b11.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Bolo de Limão</a>
              </div>
              <div className="product-description">Bolo cítrico de limão</div>
              <div className="product-price">$40</div>
              <div className="product-rating">3 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="/images/b4.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Bolo de Leite Ninho com Nutella</a>
              </div>
              <div className="product-description">Delicioso bolo com cobertura de leite ninho e recheado com Nutella</div>
              <div className="product-price">$60</div>
              <div className="product-rating">5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="/images/b5.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Bolo de Morango</a>
              </div>
              <div className="product-description">Explosão dos sabores de morango e chantilly unidos</div>
              <div className="product-price">$60</div>
              <div className="product-rating">3.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="/images/b7.webp" alt="product" />
              <div className="product-name">
                <a href="product.html">Bolo de Cenoura com Cobertura de Chocolate</a>
              </div>
              <div className="product-description">Clássico e delicioso bolo de cenoura com cobertura de chocolate</div>
              <div className="product-price">$45</div>
              <div className="product-rating">4 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="/images/b6.png" alt="product" />
              <div className="product-name">
                <a href="product.html">Red Velvet</a>
              </div>
              <div className="product-description">Delicioso bolo de frutas vermelhas</div>
              <div className="product-price">$75</div>
              <div className="product-rating">5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="/images/b8.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Bolo Strogonoff de Chocolate Branco com Morango</a>
              </div>
              <div className="product-description">Delicioso mix de chocolate branco com morango</div>
              <div className="product-price">$55</div>
              <div className="product-rating">4 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="/images/b9.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Bolo Kit Kat com Morango</a>
              </div>
              <div className="product-description">Bolo para se deliciar com Kit Kats e Morangos</div>
              <div className="product-price">$65</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="/images/b10.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Bolo de Abacaxi</a>
              </div>
              <div className="product-description">Bolo com o sabor tropical do abacaxi</div>
              <div className="product-price">$70</div>
              <div className="product-rating">5 Stars (10 Reviews)</div>
            </div>
          </li>

        </ul>
      </div>

    </main>
    <footer className="footer">
      All right reserved.
    </footer>
  </div>
  );
}

export default App;
