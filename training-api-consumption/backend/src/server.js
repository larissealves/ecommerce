import express from "express";
import cors from "cors";
import routes from "./services/routes/route.js";

const app = express();
app.use(
  cors({
    origin: ['http://localhost:5173', 'http://localhost:5174'],
    credentials: true
  })
);

app.use(express.json());

app.use("/", routes);

app.listen(3000, () => {
  console.log("Server on - port 3000");
});
