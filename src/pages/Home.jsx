function Home() {
  return (
    <section className="text-center py-5">
      <div className="hero-card mx-auto p-5 rounded-4 shadow">
        <h1 className="fw-bold mb-3">Plataforma de Eventos Universitarios</h1>
        <p className="lead mb-4">
          Sistema web desarrollado en React para gestionar conferencias,
          talleres y seminarios dirigidos a estudiantes y docentes.
        </p>

        <div className="row g-3 mt-4">
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h5 className="fw-bold">Gestión de eventos</h5>
                <p>Registra, visualiza, busca, actualiza y elimina eventos.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h5 className="fw-bold">Participantes</h5>
                <p>Registra estudiantes y docentes participantes.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h5 className="fw-bold">Inscripciones</h5>
                <p>Inscribe participantes en eventos académicos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;