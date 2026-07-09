import { useEffect, useState } from "react";
import api from "../services/api";
import ParticipantForm from "../components/ParticipantForm";
import {
  mostrarExito,
  mostrarError,
  confirmarEliminacion,
} from "../services/alerts";

function Participants() {
  const [participantes, setParticipantes] = useState([]);

  const obtenerParticipantes = async () => {
    try {
      const respuesta = await api.get("/participantes");
      setParticipantes(respuesta.data);
    } catch (error) {
      console.error("Error al obtener participantes:", error);
    }
  };

  useEffect(() => {
    obtenerParticipantes();
  }, []);

const registrarParticipante = async (participante) => {
  try {
    await api.post("/participantes", participante);
    obtenerParticipantes();
    mostrarExito("El participante fue registrado correctamente.");
  } catch (error) {
    console.error("Error al registrar participante:", error);
    mostrarError("No se pudo registrar el participante.");
  }
};

const eliminarParticipante = async (id) => {
  const confirmar = await confirmarEliminacion(
    "Esta acción eliminará al participante seleccionado."
  );

  if (!confirmar) {
    return;
  }

  try {
    await api.delete(`/participantes/${id}`);
    obtenerParticipantes();
    mostrarExito("El participante fue eliminado correctamente.");
  } catch (error) {
    console.error("Error al eliminar participante:", error);
    mostrarError("No se pudo eliminar el participante.");
  }
};

  return (
    <section>
      <h2 className="fw-bold">Gestión de Participantes</h2>
      <p className="text-muted">
        Registra y visualiza estudiantes o docentes participantes de los eventos.
      </p>

      <ParticipantForm onSubmit={registrarParticipante} />

      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <h4 className="fw-bold mb-3">Lista de participantes</h4>

          {participantes.length > 0 ? (
            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead className="table-primary">
                  <tr>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Código</th>
                    <th>Tipo</th>
                    <th>Acción</th>
                  </tr>
                </thead>

                <tbody>
                  {participantes.map((participante) => (
                    <tr key={participante.id}>
                      <td>{participante.nombre}</td>
                      <td>{participante.correo}</td>
                      <td>{participante.codigo}</td>
                      <td>
                        <span className="badge bg-secondary">
                          {participante.tipo}
                        </span>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => eliminarParticipante(participante.id)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="alert alert-info">
              No hay participantes registrados.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Participants;