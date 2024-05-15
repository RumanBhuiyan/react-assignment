import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

function Products() {
  let [products, setProducts] = useState([]);
  let [buyingProducts, setBuyingProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let response = await axios.get("https://dummyjson.com/products");
        setProducts((_) => response.data.products);
        // console.log(response.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="mt-10 flex justify-center">
        <span className="fa">
          <i className="fas fa-bucket text-8xl"></i>
        </span>
      </div>
      <div className="flex justify-center" style={{ marginTop: "-3rem" }}>
        <span className="p-2 bg-rose-600 text-white rounded-xl">
          {buyingProducts.length}
        </span>
      </div>
      <div className="flex flex-wrap flex-auto justify-center items-center">
        {products.length &&
          products.map(
            ({
              id,
              title,
              price,
              discountPercentage,
              rating,
              stock,
              brand,
              category,
              thumbnail,
            }) => (
              <Card
                id={id}
                title={title}
                price={price}
                discountPercentage={discountPercentage}
                rating={rating}
                stock={stock}
                brand={brand}
                category={category}
                thumbnail={thumbnail}
                numberOfProducts={buyingProducts}
                addProduct={setBuyingProducts}
              />
            )
          )}
      </div>
    </>
  );
}

export default Products;
