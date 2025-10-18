import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// 🔹 Ruta de prueba
app.get("/", (req, res) => {
  res.send("✅ API Calculadora conectada correctamente.");
});

// 🔹 Ruta simulada para procesar análisis
app.post("/analyze", async (req, res) => {
  const { matchId } = req.body;
  console.log(`📊 Analizando partido: ${matchId}`);
  res.json({
    success: true,
    message: `Análisis completado para el partido ${matchId}`,
    data: { resultado: "1X2", confianza: "85%" },
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));
