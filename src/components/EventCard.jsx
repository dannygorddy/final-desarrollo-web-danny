function EventCard({ evento, onEdit, onDelete }) {
  return (
    <div className="card event-card h-100 border-0 shadow-sm">
      <div className="card-body">
        <span className="badge bg-primary mb-2">{evento.tipo}</span>

        <h5 className="card-title fw-bold">{evento.titulo}</h5>

        <p className="card-text text-muted">{evento.descripcion}</p>

        <ul className="list-unstyled mb-3">
          <li>
            <strong>Fecha:</strong> {evento.fecha}
          </li>
          <li>
            <strong>Hora:</strong> {evento.hora}
          </li>
          <li>
            <strong>Lugar:</strong> {evento.lugar}
          </li>
          <li>
            <strong>Ponente:</strong> {evento.ponente}
          </li>
          <li>
            <strong>Cupos:</strong> {evento.cupos}
          </li>
        </ul>

        <div className="d-flex gap-2">
          <button className="btn btn-warning btn-sm" onClick={() => onEdit(evento)}>
            Editar
          </button>

          <button className="btn btn-danger btn-sm" onClick={() => onDelete(evento.id)}>
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventCard;