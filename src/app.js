import express from "express";
import cors from "cors";

const app = express()

// Basic Configuration
app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true,limit:"16kb"}));
app.use(express.static("public")); 

//Cors Configuration
app.use(cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "https://localhost:5173",
    credentials: true,
    methods:["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
}),
);

//Imports the Routes
import healthCheckRoutes from "./routes/healthcheck.routes.js";

app.use("/api/v1/healthcheck", healthCheckRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/gg', (req, res) => {
    res.send('this is gg page ☺')
})

app.get('/hp', (req, res) => {
    res.send('This is HP Victus Laptop ♥')
})
export default app;