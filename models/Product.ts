import mongoose, { Document, Model, Schema } from "mongoose";

export interface IProduct extends Document {
  _id: string;
  name: string;
  price: number;
  description: string;
}

const ProductSchema: Schema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
});

const Product: Model<IProduct> =
  mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);
export default Product;
