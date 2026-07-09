import { useState } from "react";
import { mostrarAdvertencia } from "../services/alerts";

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
     mostrarAdvertencia("Completa todos los campos del participante antes de continuar.");
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
                 placeholder="Ejemplo: Danny Gorddy Huaman Chavez"
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
                placeholder="Ejemplo: 70580929@continental.edu.pe"
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
                placeholder="Ejemplo: 70580929"
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
                <option value="">Seleccione: Estudiante o Docente</option>
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