import { useEffect, useState } from "react";
import api from "../services/api";
import EventCard from "../components/EventCard";
import EventForm from "../components/EventForm";
import SearchBar from "../components/SearchBar";

function Events() {
  const [eventos, setEventos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [eventoEditando, setEventoEditando] = useState(null);

  const obtenerEventos = async () => {
    try {
      const respuesta = await api.get("/eventos");
      setEventos(respuesta.data);
    } catch (error) {
      console.error("Error al obtener eventos:", error);
    }
  };

  useEffect(() => {
    obtenerEventos();
  }, []);

  const guardarEvento = async (evento) => {
    try {
      if (eventoEditando) {
        await api.put(`/eventos/${eventoEditando.id}`, evento);
        setEventoEditando(null);
      } else {
        await api.post("/eventos", evento);
      }

      obtenerEventos();
    } catch (error) {
      console.error("Error al guardar evento:", error);
    }
  };

  const eliminarEvento = async (id) => {
    const confirmar = confirm("¿Estás seguro de eliminar este evento?");

    if (!confirmar) {
      return;
    }

    try {
      await api.delete(`/eventos/${id}`);
      obtenerEventos();
    } catch (error) {
      console.error("Error al eliminar evento:", error);
    }
  };

  const eventosFiltrados = eventos.filter((evento) => {
    const texto = busqueda.toLowerCase();

    return (
      evento.titulo.toLowerCase().includes(texto) ||
      evento.tipo.toLowerCase().includes(texto) ||
      evento.lugar.toLowerCase().includes(texto) ||
      evento.ponente.toLowerCase().includes(texto)
    );
  });

  return (
    <section>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
  <h2 className="fw-bold">Gestión de Eventos</h2>
  <p className="text-muted mb-3">
    Registra, visualiza, busca, actualiza y elimina eventos académicos.
  </p>

  <div className="page-banner-grid">
  <div className="page-banner-item">
    <img
      src="/img/banner-evento-1.jpeg"
      alt="Conferencia académica"
      className="page-banner-img"
    />
  </div>

  <div className="page-banner-item">
    <img
      src="/img/banner-evento-2.jpg"
      alt="Taller académico"
      className="page-banner-img"
    />
  </div>

  <div className="page-banner-item">
    <img
      src="/img/banner-evento-3.jpg"
      alt="Seminario académico"
      className="page-banner-img"
    />
  </div>
</div>
</div>
      </div>

      <EventForm
        onSubmit={guardarEvento}
        eventoEditando={eventoEditando}
        cancelarEdicion={() => setEventoEditando(null)}
      />

      <SearchBar busqueda={busqueda} setBusqueda={setBusqueda} />

      <div className="row g-4">
        {eventosFiltrados.length > 0 ? (
          eventosFiltrados.map((evento) => (
            <div className="col-md-6 col-lg-4" key={evento.id}>
              <EventCard
                evento={evento}
                onEdit={setEventoEditando}
                onDelete={eliminarEvento}
              />
            </div>
          ))
        ) : (
          <div className="col-12">
            <div className="alert alert-info">
              No se encontraron eventos registrados.
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Events;