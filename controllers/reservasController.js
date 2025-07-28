const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/reservas.json");

const leerReservas = () => {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

const escribirReservas = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

const crearReserva = (req, res) => {
  const reservas = leerReservas();
  const nuevaReserva = {
    id: Date.now().toString(),
    ...req.body
  };
  reservas.push(nuevaReserva);
  escribirReservas(reservas);
  res.status(201).json(nuevaReserva);
};

const obtenerReservas = (req, res) => {
  let reservas = leerReservas();
  const { hotel, fecha_inicio, fecha_fin, tipo_habitacion, estado, num_huespedes } = req.query;

  if (hotel) reservas = reservas.filter(r => r.hotel === hotel);
  if (tipo_habitacion) reservas = reservas.filter(r => r.tipo_habitacion === tipo_habitacion);
  if (estado) reservas = reservas.filter(r => r.estado === estado);
  if (num_huespedes) reservas = reservas.filter(r => parseInt(r.num_huespedes) === parseInt(num_huespedes));
  if (fecha_inicio && fecha_fin) {
    reservas = reservas.filter(r => new Date(r.fecha) >= new Date(fecha_inicio) && new Date(r.fecha) <= new Date(fecha_fin));
  }
  res.json(reservas);
};

const obtenerReservaPorId = (req, res) => {
  const reservas = leerReservas();
  const reserva = reservas.find(r => r.id === req.params.id);
  if (!reserva) return res.status(404).json({ mensaje: "Reserva no encontrada" });
  res.json(reserva);
};

const actualizarReserva = (req, res) => {
  const reservas = leerReservas();
  const index = reservas.findIndex(r => r.id === req.params.id);
  if (index === -1) return res.status(404).json({ mensaje: "Reserva no encontrada" });
  reservas[index] = { ...reservas[index], ...req.body };
  escribirReservas(reservas);
  res.json(reservas[index]);
};

const eliminarReserva = (req, res) => {
  let reservas = leerReservas();
  const index = reservas.findIndex(r => r.id === req.params.id);
  if (index === -1) return res.status(404).json({ mensaje: "Reserva no encontrada" });
  const eliminada = reservas.splice(index, 1);
  escribirReservas(reservas);
  res.json(eliminada[0]);
};

module.exports = {
  crearReserva,
  obtenerReservas,
  obtenerReservaPorId,
  actualizarReserva,
  eliminarReserva
};
