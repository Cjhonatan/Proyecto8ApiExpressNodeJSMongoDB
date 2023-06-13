const express = require("express");
const app = express();
const port = 3000;
const userRoute = require("./routes/userRoutes")

app.use(express.json());
app.use('/api/user', userRoute);

app.listen(port, ()=>{console.log("El sv se ejecuta en el http://localhost:" + port)})
