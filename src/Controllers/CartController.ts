// Controllers/CartController.ts
import { Request, Response } from "express";
import { AddProductToCart } from "../UseCases/AddProductToCart";
import { GetCartTotal } from "../UseCases/GetCartTotal";
import { Product } from "../Entities/Product";
import { Storable } from "../Interfaces/Storable";

export class CartController {
  constructor(private storage: Storable) {}

  addProduct(req: Request, res: Response): void {
    const { name, price } = req.body;
    const product = new Product(name, price);
    const addProductUseCase = new AddProductToCart(this.storage);
    addProductUseCase.execute(product);
    res.status(200).send("Product added to cart");
  }

  getTotal(req: Request, res: Response): void {
    const getTotalUseCase = new GetCartTotal(this.storage);
    const total = getTotalUseCase.execute();
    res.status(200).json({ total });
  }
}
