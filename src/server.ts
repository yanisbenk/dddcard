import express from "express";
import cors from "cors"; // Importer CORS
import { InMemoryStorage } from "./Repositories/InMemoryStorage";
import { CartController } from "./Controllers/CartController";

const app = express();
app.use(cors()); // Activer CORS
app.use(express.json());

const storage = new InMemoryStorage(); // Vous pouvez changer pour LocalStorage
const cartController = new CartController(storage);

app.post("/cart/products", (req, res) => cartController.addProduct(req, res));
app.get("/cart/total", (req, res) => cartController.getTotal(req, res));

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
