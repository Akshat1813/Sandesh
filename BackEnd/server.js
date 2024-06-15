import express from "express";
import dotenv from "dotenv";
import authRoutes from "./Routes/auth.route.js"
import cookieParser from "cookie-parser";
import messageRoutes from "./Routes/message.route.js"
import userRoutes from "./Routes/user.route.js"
import connectToMongoDB from "./DB/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

dotenv.config();

app.use(express.json()); 
app.use(cookieParser());
app.use("/api/auth", authRoutes); // to parse the incoming requests with JSON payloads (from req.body)
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
const PORT = parseInt(process.env.PORT) || 5000;

// app.get("/",(req,res) => {
//     //root route http://localhost:5000/
//     res.send("Hello World!!!");
// });





server.listen(PORT,() => {
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`)
});

