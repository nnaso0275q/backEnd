import cors from "cors";
import express, { Application, Request, Response } from "express";
import { nanoid } from "nanoid";
const app: Application = express();
const port = 8000;

const tasks = [
  { id: "1", name: "iPhone" },
  { id: "2", name: "iMac" },
  { id: "3", name: "ajdio" },
];

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/tasks", (req: Request, res: Response) => {
  res.send(tasks);
});

app.post("/tasks", (req: Request, res: Response) => {
  const id = nanoid();
  const { name } = req.body;
  tasks.push({ id, name });
  res.status(201).send({ id });
});

app.delete("/tasks", (req: Request, res: Response) => {
  res.send([]);
});

// app.get("/products", (req: Request, res: Response) => {
//   res.send(products);
// });

app.post("/products", (req: Request, res: Response) => {
  res.send("Post products");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
