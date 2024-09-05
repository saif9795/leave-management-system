import express from 'express';
import authRouter from './routes/auth.route.js';
import employeeRouter from "./routes/employee.route.js";
import adminRouter from "./routes/admin.route.js";
import pool from './db/dbConnection.js';

const app = express();
const PORT = 8000;
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Welcome to the System!");
})

app.use("/api/auth", authRouter);

app.use("/api/employee", employeeRouter);

app.use("/api/admin", adminRouter);


app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})