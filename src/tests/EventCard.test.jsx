import { render, screen } from "@testing-library/react";
import EventCard from "../components/EventCard";

test("muestra la información de un evento académico", () => {
  const evento = {
    id: "1",
    titulo: "Taller de React",
    descripcion: "Taller práctico sobre componentes.",
    fecha: "2026-07-20",
    hora: "15:00",
    lugar: "Laboratorio de Sistemas",
    tipo: "Taller",
    ponente: "Mg. Ana Torres",
    cupos: 30,
  };

  render(
    <EventCard
      evento={evento}
      onEdit={() => {}}
      onDelete={() => {}}
    />
  );

  expect(screen.getByText("Taller de React")).toBeInTheDocument();
  expect(screen.getByText("Laboratorio de Sistemas")).toBeInTheDocument();
  expect(screen.getByText("Mg. Ana Torres")).toBeInTheDocument();
});