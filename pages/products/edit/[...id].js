import axios from "axios";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductForm from "@/components/ProductForm";

const EditProd = () => {
  const router = useRouter();
  const [prod, setProd] = useState(null);
  const { id } = router.query;

  useEffect(() => {
    const getProd = async () => {
      const res = await axios.get(`http://localhost:8080/api/products/${id}`);
      setProd(res.data);
    };
    getProd();
  }, [id]);
  return (
    <Layout>
      <h1>Edit Product</h1>
      {prod && <ProductForm {...prod} />}
    </Layout>
  );
};

export default EditProd;
