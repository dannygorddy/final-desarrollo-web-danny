import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary shadow-sm">
      <div className="container d-flex flex-column flex-md-row align-items-center">
        <Link className="navbar-brand fw-bold mb-2 mb-md-0" to="/">
          Eventos Universitarios
        </Link>

        <div className="d-flex flex-wrap justify-content-center gap-2">
          <Link className="btn btn-outline-light btn-sm" to="/">
            Inicio
          </Link>

          <Link className="btn btn-outline-light btn-sm" to="/eventos">
            Eventos
          </Link>

          <Link className="btn btn-outline-light btn-sm" to="/participantes">
            Participantes
          </Link>

          <Link className="btn btn-outline-light btn-sm" to="/inscripciones">
            Inscripciones
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;