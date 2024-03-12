import React from "react";
import CategoryList from "../components/CategoryList/CategoryList";
import { productsData, totalProducts, category } from "../mock/productData";

function categoryList() {
  return (
    <div>
      <CategoryList
        products={productsData}
        totalResults={totalProducts}
        category={category}
      />
    </div>
  );
}

export default categoryList;
