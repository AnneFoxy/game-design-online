const express = require("express");
const app = express();
app.use(express.static('.')); // Serve frontend
app.get("/", (req, res) => res.sendFile(__dirname + '/index.html'));
app.get("/api/planning", (req, res) => res.json({status: "designing", features: [], updated: new Date().toISOString()}));
app.get("/api", (req, res) => res.send("Maple Fox Games API 🦊🇨🇦"));
app.listen(3000, () => console.log("Server 3000"));
