import { Link } from "react-router-dom";
function Home() {
  return (
    <section className="text-center py-5">
      <div className="hero-card mx-auto p-5 rounded-4 shadow">
        <h1 className="fw-bold mb-3">Plataforma de Eventos Universitarios</h1>
        <p className="lead mb-4">
          Sistema web desarrollado en React para gestionar conferencias,
          talleres y seminarios dirigidos a estudiantes y docentes.
        </p>

        <div className="row g-4 mt-4">
  <div className="col-md-4">
    <Link to="/eventos" className="home-card-link">
      <div className="card h-100 border-0 shadow-sm home-card">
        <img
          src="/img/eventos.jpeg"
          alt="Gestión de eventos"
          className="home-card-img"
        />
        <div className="card-body text-center">
          <h5 className="fw-bold">Gestión de eventos</h5>
          <p>
            Registra, visualiza, busca, actualiza y elimina eventos.
          </p>
          <span className="card-action-btn">Ir a eventos</span>
        </div>
      </div>
    </Link>
  </div>

  <div className="col-md-4">
    <Link to="/participantes" className="home-card-link">
      <div className="card h-100 border-0 shadow-sm home-card">
        <img
          src="/img/participantes.jpg"
          alt="Participantes"
          className="home-card-img"
        />
        <div className="card-body text-center">
          <h5 className="fw-bold">Participantes</h5>
          <p>
            Registra estudiantes y docentes participantes.
          </p>
          <span className="card-action-btn">Ir a participantes</span>
        </div>
      </div>
    </Link>
  </div>

  <div className="col-md-4">
    <Link to="/inscripciones" className="home-card-link">
      <div className="card h-100 border-0 shadow-sm home-card">
        <img
          src="/img/inscripciones.jpg"
          alt="Inscripciones"
          className="home-card-img"
        />
        <div className="card-body text-center">
          <h5 className="fw-bold">Inscripciones</h5>
          <p>
            Inscribe participantes en eventos académicos.
          </p>
          <span className="card-action-btn">Ir a inscripciones</span>
        </div>
      </div>
    </Link>
  </div>
</div>
      </div>
    </section>
  );
}

export default Home;