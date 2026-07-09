import { useState } from "react";
import { mostrarAdvertencia } from "../services/alerts";

function InscriptionForm({ eventos, participantes, onSubmit }) {
  const [formulario, setFormulario] = useState({
    eventoId: "",
    participanteId: "",
  });

  const manejarCambio = (e) => {
    const { name, value } = e.target;

    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();

    if (!formulario.eventoId || !formulario.participanteId) {
      mostrarAdvertencia("Selecciona un evento y un participante antes de registrar la inscripción.");
      return;
    }

    onSubmit({
      ...formulario,
      fechaInscripcion: new Date().toISOString().split("T")[0],
    });

    setFormulario({
      eventoId: "",
      participanteId: "",
    });
  };

  return (
    <div className="card border-0 shadow-sm mb-4">
      <div className="card-body">
        <h4 className="fw-bold mb-3">Inscribir participante en evento</h4>

        <form onSubmit={manejarEnvio}>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Evento académico</label>
              <select
                className="form-select"
                name="eventoId"
                value={formulario.eventoId}
                onChange={manejarCambio}
              >
                <option value="">Seleccione un evento...</option>
                {eventos.map((evento) => (
                  <option key={evento.id} value={evento.id}>
                    {evento.titulo}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-md-6">
              <label className="form-label">Participante</label>
              <select
                className="form-select"
                name="participanteId"
                value={formulario.participanteId}
                onChange={manejarCambio}
              >
                <option value="">Seleccione un participante...</option>
                {participantes.map((participante) => (
                  <option key={participante.id} value={participante.id}>
                    {participante.nombre} - {participante.tipo}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button type="submit" className="btn btn-primary mt-4">
            Registrar inscripción
          </button>
        </form>
      </div>
    </div>
  );
}

export default InscriptionForm;