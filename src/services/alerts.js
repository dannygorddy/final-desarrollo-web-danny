import Swal from "sweetalert2";

export const mostrarExito = (mensaje) => {
  Swal.fire({
    icon: "success",
    title: "Operación exitosa",
    text: mensaje,
    confirmButtonText: "Aceptar",
    confirmButtonColor: "#6a00b9",
  });
};

export const mostrarError = (mensaje) => {
  Swal.fire({
    icon: "error",
    title: "Error",
    text: mensaje,
    confirmButtonText: "Aceptar",
    confirmButtonColor: "#6a00b9",
  });
};

export const mostrarAdvertencia = (mensaje) => {
  Swal.fire({
    icon: "warning",
    title: "Atención",
    text: mensaje,
    confirmButtonText: "Entendido",
    confirmButtonColor: "#6a00b9",
  });
};

export const confirmarEliminacion = async (mensaje) => {
  const resultado = await Swal.fire({
    icon: "warning",
    title: "¿Estás seguro?",
    text: mensaje,
    showCancelButton: true,
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "Cancelar",
    confirmButtonColor: "#dc3545",
    cancelButtonColor: "#6c757d",
  });

  return resultado.isConfirmed;
};