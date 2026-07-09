import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";

test("muestra el título principal de la página de inicio", () => {
  render(<Home />);

  expect(
    screen.getByText(/Plataforma de Eventos Universitarios/i)
  ).toBeInTheDocument();
});