import { Link, useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import products from "../../products";
import ProductFeaturs from "./ProductFeaturs";
import ProductImages from "./ProductImages";

const ProductDetails = () => {
  const { categoryName, productId } = useParams();
  const product = products.get(categoryName!)![parseInt(productId!)];


  return (
    <div className="Container pt-14 lg:pt-16 ">
      <Link
        to={`/category/${categoryName}`}
        className="opacity-50 text-xl font-medium "
      >
        Go Back
      </Link>
      <ProductCard imgURL={product.mainImg}>
        <ProductCard.ProductInfo
          title={product.title}
          desc={product.desc}
          customStyle="*:max-md:text-start max-md:items-start"
        >
          <ProductCard.ProductPrice price={product.price} />
          <ProductCard.AddToCartBtn
           item={{image:product.mainImg,price:product.price,title:product.title}}
          />
        </ProductCard.ProductInfo>
      </ProductCard>
      <ProductFeaturs />
      <ProductImages images={product.images} />
    </div>
  );
};

export default ProductDetails;
