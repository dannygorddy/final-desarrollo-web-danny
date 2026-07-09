import { useState } from "react";

const estadoInicial = {
  nombre: "",
  correo: "",
  codigo: "",
  tipo: "",
};

function ParticipantForm({ onSubmit }) {
  const [formulario, setFormulario] = useState(estadoInicial);

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
      !formulario.nombre ||
      !formulario.correo ||
      !formulario.codigo ||
      !formulario.tipo
    ) {
      alert("Completa todos los campos del participante.");
      return;
    }

    onSubmit(formulario);
    setFormulario(estadoInicial);
  };

  return (
    <div className="card border-0 shadow-sm mb-4">
      <div className="card-body">
        <h4 className="fw-bold mb-3">Registrar participante</h4>

        <form onSubmit={manejarEnvio}>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Nombre completo</label>
              <input
                type="text"
                className="form-control"
                name="nombre"
                value={formulario.nombre}
                onChange={manejarCambio}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Correo institucional</label>
              <input
                type="email"
                className="form-control"
                name="correo"
                value={formulario.correo}
                onChange={manejarCambio}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Código</label>
              <input
                type="text"
                className="form-control"
                name="codigo"
                value={formulario.codigo}
                onChange={manejarCambio}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Tipo de participante</label>
              <select
                className="form-select"
                name="tipo"
                value={formulario.tipo}
                onChange={manejarCambio}
              >
                <option value="">Seleccione...</option>
                <option value="Estudiante">Estudiante</option>
                <option value="Docente">Docente</option>
              </select>
            </div>
          </div>

          <button type="submit" className="btn btn-primary mt-4">
            Registrar participante
          </button>
        </form>
      </div>
    </div>
  );
}

export default ParticipantForm;