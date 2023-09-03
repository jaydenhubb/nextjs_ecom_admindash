import Layout from "@/components/Layout";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const ProductForm = ({
  _id,
  title: currTitle,
  description: currDescription,
  price: currPrice,
}) => {
  const [title, setTitle] = useState(currTitle || "");
  const [description, setDescription] = useState(currDescription || "");
  const [price, setPrice] = useState(currPrice || "");
  const [redirectProd, setRedirectProd] = useState(false);
  const router = useRouter();
  const addProduct = async (e) => {
    e.preventDefault();
    if (_id) {
        const data = { title, description, price }; 
        await axios.patch(`http://localhost:8080/api/products/${_id}`, data);
        setRedirectProd(true);
    } else {
      const data = { title, description, price };
      console.log(title, description, price);
      await axios.post("http://localhost:8080/api/products", data);
      setRedirectProd(true);
    }
  };
  if (redirectProd) {
    router.push("/products");
  }
  return (
    <form onSubmit={addProduct}>
      <label>Product Name</label>
      <input
        type="text"
        placeholder="Product Name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Description</label>
      <textarea
        placeholder="Product Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label>Price (In Naira)</label>
      <input
        type="number"
        placeholder="Product Name"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit" className="btn-primary">
        save
      </button>
    </form>
  );
};

export default ProductForm;
