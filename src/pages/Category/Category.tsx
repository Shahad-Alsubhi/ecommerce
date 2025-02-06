import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import products from "../../products";
import ProductCategorySection from "../../components/ProductCategorySection";

const Category = () => {
  const params = useParams();
  const { categoryName } = params;
  const categoryProducts = products.get(categoryName!);

  return (
    <div className="Container ">
      <h1 className="bg-[#121212] mb-10 py-10 uppercase text-[28px] md:text-[40px] text-center text-white xl:-mx-48 -mx-8">
        {categoryName}
      </h1>
      <section className="md:*:not-odd:flex-row-reverse">
        {categoryProducts?.map((product, index) => (
          <ProductCard key={index} imgURL={product.mainImg}>
            <ProductCard.ProductInfo
              title={product.title}
              desc={product.desc}
              customStyle="*:max-md:text-start max-md:items-start"
            >
              <ProductCard.NavigateBtn category={categoryName!} index={index} />
            </ProductCard.ProductInfo>
          </ProductCard>
        ))}
      </section>
      <ProductCategorySection />
    </div>
  );
};

export default Category;
