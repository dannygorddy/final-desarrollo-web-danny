import { useEffect, useState } from "react";
import api from "../services/api";
import InscriptionForm from "../components/InscriptionForm";

function Inscriptions() {
  const [eventos, setEventos] = useState([]);
  const [participantes, setParticipantes] = useState([]);
  const [inscripciones, setInscripciones] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const obtenerDatos = async () => {
    try {
      const [resEventos, resParticipantes, resInscripciones] =
        await Promise.all([
          api.get("/eventos"),
          api.get("/participantes"),
          api.get("/inscripciones"),
        ]);

      setEventos(resEventos.data);
      setParticipantes(resParticipantes.data);
      setInscripciones(resInscripciones.data);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  const registrarInscripcion = async (inscripcion) => {
    try {
      const yaInscrito = inscripciones.some(
        (item) =>
          item.eventoId === inscripcion.eventoId &&
          item.participanteId === inscripcion.participanteId
      );

      if (yaInscrito) {
        alert("Este participante ya está inscrito en este evento.");
        return;
      }

      await api.post("/inscripciones", inscripcion);
      obtenerDatos();
    } catch (error) {
      console.error("Error al registrar inscripción:", error);
    }
  };

  const eliminarInscripcion = async (id) => {
    const confirmar = confirm("¿Deseas eliminar esta inscripción?");

    if (!confirmar) {
      return;
    }

    try {
      await api.delete(`/inscripciones/${id}`);
      obtenerDatos();
    } catch (error) {
      console.error("Error al eliminar inscripción:", error);
    }
  };

  const obtenerEvento = (eventoId) => {
    return eventos.find((evento) => evento.id === eventoId);
  };

  const obtenerParticipante = (participanteId) => {
    return participantes.find(
      (participante) => participante.id === participanteId
    );
  };

  const inscripcionesFiltradas = inscripciones.filter((inscripcion) => {
    const evento = obtenerEvento(inscripcion.eventoId);
    const participante = obtenerParticipante(inscripcion.participanteId);

    const textoBusqueda = busqueda.toLowerCase();

    const tituloEvento = evento ? evento.titulo.toLowerCase() : "";
    const nombreParticipante = participante
      ? participante.nombre.toLowerCase()
      : "";
    const correoParticipante = participante
      ? participante.correo.toLowerCase()
      : "";
    const tipoParticipante = participante
      ? participante.tipo.toLowerCase()
      : "";
    const fecha = inscripcion.fechaInscripcion
      ? inscripcion.fechaInscripcion.toLowerCase()
      : "";

    return (
      tituloEvento.includes(textoBusqueda) ||
      nombreParticipante.includes(textoBusqueda) ||
      correoParticipante.includes(textoBusqueda) ||
      tipoParticipante.includes(textoBusqueda) ||
      fecha.includes(textoBusqueda)
    );
  });

  return (
    <section>
      <h2 className="fw-bold">Gestión de Inscripciones</h2>
      <p className="text-muted">
        Inscribe participantes en eventos académicos y consulta la lista de
        inscritos.
      </p>

      <InscriptionForm
        eventos={eventos}
        participantes={participantes}
        onSubmit={registrarInscripcion}
      />

      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-3">
            <div>
              <h4 className="fw-bold mb-1">Consulta de inscritos</h4>
              <p className="text-muted mb-0">
                Busca inscritos por evento, participante, correo, tipo o fecha.
              </p>
            </div>

            <input
              type="text"
              className="form-control"
              style={{ maxWidth: "350px" }}
              placeholder="Buscar inscrito..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>

          {inscripcionesFiltradas.length > 0 ? (
            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead className="table-primary">
                  <tr>
                    <th>Evento</th>
                    <th>Participante</th>
                    <th>Tipo</th>
                    <th>Correo</th>
                    <th>Fecha de inscripción</th>
                    <th>Acción</th>
                  </tr>
                </thead>

                <tbody>
                  {inscripcionesFiltradas.map((inscripcion) => {
                    const evento = obtenerEvento(inscripcion.eventoId);
                    const participante = obtenerParticipante(
                      inscripcion.participanteId
                    );

                    return (
                      <tr key={inscripcion.id}>
                        <td>
                          {evento ? evento.titulo : "Evento no encontrado"}
                        </td>

                        <td>
                          {participante
                            ? participante.nombre
                            : "Participante no encontrado"}
                        </td>

                        <td>
                          <span className="badge bg-secondary">
                            {participante ? participante.tipo : "-"}
                          </span>
                        </td>

                        <td>{participante ? participante.correo : "-"}</td>

                        <td>{inscripcion.fechaInscripcion}</td>

                        <td>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() =>
                              eliminarInscripcion(inscripcion.id)
                            }
                          >
                            Eliminar
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="alert alert-info">
              No se encontraron inscritos con ese criterio de búsqueda.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Inscriptions;