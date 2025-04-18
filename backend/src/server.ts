import express from "express";
import cors from "cors"
import routes from "./routes";


const app = express();
app.use(cors());
app.use(express.json());


app.use('/api', routes);

app.listen(2000,()=>{
    console.log("Server running , PORT = 2000");
});