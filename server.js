require("dotenv").config();
const express = require("express");
const app = express();
const reservasRoutes = require("./routes/reservas");

app.use(express.json());
app.use(express.static("public")); 

app.use("/api/reservas", reservasRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
