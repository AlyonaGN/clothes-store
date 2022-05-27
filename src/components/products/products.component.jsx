import './products.styles.scss';
import { ProductCard } from '../product-card/product-card.component';

export const Products = ({ products }) => {
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
