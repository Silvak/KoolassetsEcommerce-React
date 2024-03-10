export function getColor(status) {
  if (status === "En espera") {
    return "#3078BB";
  }
  if (status === "Entregado") {
    return "#46B53C";
  }
  if (status === "Cancelado") {
    return "#E44646";
  }
}
