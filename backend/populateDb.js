import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import fetch from "node-fetch";
import phoneModel from "./model/phonesModel.js";

const populate = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    // Fetch data from the API endpoint "https://dummyjson.com/products/category/smartphones" to populate
    // database with dummy data to start
    const data = await fetch(
      "https://dummyjson.com/products/category/smartphones"
    );
    const { products } = await data.json();

    // Map over the products array and create a new array of phone objects
    // with only the required properties (title, description, price, and image)
    const phones = products.map((el) => {
      return {
        title: el.title,
        description: el.description,
        price: el.price,
        image: el.images[0],
      };
    });
    // Delete all existing documents from the phoneModel collection
    await phoneModel.deleteMany();
    // Insert the new phone documents into the phoneModel collection
    await phoneModel.insertMany(phones);
    console.log("Database populated with new seeds");
    process.exit(0);
  } catch (error) {
    console.log(error);
    console.log("Error while populating database");
  }
};

populate();
