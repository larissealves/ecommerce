import express from "express";
import cors from "cors";
import routes from "./services/routes/route.js";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

app.use("/", routes);

app.listen(3000, () => {
  console.log("Server on - port 3000");
});
