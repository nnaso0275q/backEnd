"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
const products = [
    { id: 1, name: "iPhone" },
    { id: 2, name: "iMac" },
];
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.send("Hello World!");
});
const tasks = [];
app.get("/tasks", (req, res) => {
    res.send([]);
});
app.post("/tasks", (req, res) => {
    res.send([]);
});
app.delete("/tasks", (req, res) => {
    res.send([]);
});
app.get("/products", (req, res) => {
    res.send(products);
});
app.post("/products", (req, res) => {
    res.send("Post products");
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
