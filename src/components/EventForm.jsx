import { useEffect, useState } from "react";

const estadoInicial = {
  titulo: "",
  descripcion: "",
  fecha: "",
  hora: "",
  lugar: "",
  tipo: "",
  ponente: "",
  cupos: "",
};

function EventForm({ onSubmit, eventoEditando, cancelarEdicion }) {
  const [formulario, setFormulario] = useState(estadoInicial);

  useEffect(() => {
    if (eventoEditando) {
      setFormulario(eventoEditando);
    } else {
      setFormulario(estadoInicial);
    }
  }, [eventoEditando]);

  const manejarCambio = (e) => {
    const { name, value } = e.target;

    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();

    if (
      !formulario.titulo ||
      !formulario.descripcion ||
      !formulario.fecha ||
      !formulario.hora ||
      !formulario.lugar ||
      !formulario.tipo ||
      !formulario.ponente ||
      !formulario.cupos
    ) {
      alert("Completa todos los campos del evento.");
      return;
    }

    onSubmit({
      ...formulario,
      cupos: Number(formulario.cupos),
    });

    setFormulario(estadoInicial);
  };

  return (
    <div className="card border-0 shadow-sm mb-4">
      <div className="card-body">
        <h4 className="fw-bold mb-3">
          {eventoEditando ? "Actualizar datos del evento" : "Registrar nuevo evento"}
        </h4>

        <form onSubmit={manejarEnvio}>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Título</label>
              <input
                type="text"
                className="form-control"
                name="titulo"
                placeholder="Ejemplo: Taller de React"
                value={formulario.titulo}
                onChange={manejarCambio}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Tipo de evento</label>
              <select
                className="form-select"
                name="tipo"
                value={formulario.tipo}
                onChange={manejarCambio}
              >
                <option value="">Seleccione el tipo de evento...</option>
                <option value="Conferencia">Conferencia</option>
                <option value="Taller">Taller</option>
                <option value="Seminario">Seminario</option>
              </select>
            </div>

            <div className="col-md-12">
              <label className="form-label">Descripción</label>
              <textarea
                className="form-control"
                name="descripcion"
                rows="3"
                placeholder="Escriba una breve descripción sobre el tema, objetivo o contenido del evento."
                value={formulario.descripcion}
                onChange={manejarCambio}
              ></textarea>
            </div>

            <div className="col-md-4">
              <label className="form-label">Fecha</label>
              <input
                type="date"
                className="form-control"
                name="fecha"
                value={formulario.fecha}
                onChange={manejarCambio}
              />
            </div>

            <div className="col-md-4">
            <label className="form-label">Hora</label>
            <select
                className="form-select"
                name="hora"
                value={formulario.hora}
                onChange={manejarCambio}
            >
                <option value="">Seleccione una hora...</option>
                <option value="08:00">08:00 a. m.</option>
                <option value="09:00">09:00 a. m.</option>
                <option value="10:00">10:00 a. m.</option>
                <option value="11:00">11:00 a. m.</option>
                <option value="12:00">12:00 p. m.</option>
                <option value="14:00">02:00 p. m.</option>
                <option value="15:00">03:00 p. m.</option>
                <option value="16:00">04:00 p. m.</option>
                <option value="17:00">05:00 p. m.</option>
                <option value="18:00">06:00 p. m.</option>
            </select>
            </div>

            <div className="col-md-4">
              <label className="form-label">Cupos</label>
              <input
                type="number"
                className="form-control"
                name="cupos"
                placeholder="Ejemplo: 30"
                value={formulario.cupos}
                onChange={manejarCambio}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Lugar</label>
              <input
                type="text"
                className="form-control"
                name="lugar"
                placeholder="Ejemplo: Auditorio Universidad Continental"
                value={formulario.lugar}
                onChange={manejarCambio}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Ponente</label>
              <input
                type="text"
                className="form-control"
                name="ponente"
                placeholder="Ejemplo: Mg. Ana Torres"
                value={formulario.ponente}
                onChange={manejarCambio}
              />
            </div>
          </div>

          <div className="mt-4 d-flex gap-2">
            <button type="submit" className="btn btn-primary">
              {eventoEditando ? "Guardar cambios" : "Registrar evento"}
            </button>

            {eventoEditando && (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={cancelarEdicion}
              >
                Cancelar
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default EventForm;