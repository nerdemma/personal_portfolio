import "./ProductList.css";
import Product from "../product/Product";
import { products } from "../../data";

export const ProductList = () => {
  return (
  
<div className="pl">
<div className="pl-texts">
<h1 className="pl-title">Ideas in Motion</h1>
<p className="pl-description">Aplications, Prototypes and Design.</p>
</div>

<div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
</div>
</div>
);};

export default ProductList