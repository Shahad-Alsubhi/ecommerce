import CategoryCard from "./CategoryCard"

const ProductCategorySection = () => {
  return (
    <section className=" flex gap-7 pt-40 pb-30 max-md:flex-col max-md:gap-20">
      <CategoryCard title={"HEADPHONES"} imgSrc={"https://res.cloudinary.com/deqnekemi/image/upload/f_webp/v1738304147/image-category-thumbnail-headphones_lcrpz5.png"}/>
      <CategoryCard title={"SPEAKERS"} imgSrc={"https://res.cloudinary.com/deqnekemi/image/upload/f_webp/v1738304147/image-category-thumbnail-speakers_iltw1c.png"}/>      
      <CategoryCard title={"EARPHONES"} imgSrc={"https://res.cloudinary.com/deqnekemi/image/upload/f_webp/v1738304146/image-category-thumbnail-earphones_ahjhgl.png"}/>
    </section>
  )
}

export default ProductCategorySection
