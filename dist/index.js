"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
//parse body json
app.use(express_1.default.json());
const AuthMiddleware = (req, res, next) => {
    if (req.body.role && req.body.role === "admin") {
        next();
    }
    else {
        res.status(401).send("Unathorized");
    }
};
app.get('/m', (req, res) => {
    res.send('khodaya shokret');
});
app.get("/users", AuthMiddleware, (req, res) => {
    console.log(req.body);
    res.send("user added");
});
app.get("/users/{id}", AuthMiddleware, (req, res) => {
    console.log(req.body);
    res.send("user added");
});
app.post("/users", AuthMiddleware, (req, res) => {
    console.log(req.body);
    res.send("user added");
});
app.put("/users/{id}", AuthMiddleware, (req, res) => {
    console.log(req.body);
    res.send("user added");
});
app.delete("/users/{id}", AuthMiddleware, (req, res) => {
    console.log(req.body);
    res.send("user added");
});
app.get("/", (req, res) => {
    res.send("hello TS + express");
});
app.listen(5000, () => {
    console.log("server running on 5000");
});
