import '../css/Header.css'

export default function Header({ name, p, image }) {
    return (
      <header>
        <div className="container">
          <div className="texts">
            <h2><b>{name}</b></h2>
            <p>{p}</p>
            <a href="#products">
                <button>Ver Produto</button>
            </a>
          </div>
          <img src={image} id="img" />
        </div>
      </header>
    );
  }
