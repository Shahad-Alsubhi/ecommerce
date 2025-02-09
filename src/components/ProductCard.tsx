import { ReactNode } from "react";
import useCart from "../hooks/useCart";
import { useNavigate } from "react-router-dom";
import Image from "./Image";

const ProductCard = ({
  children,
  imgURL,
}: {
  children?: ReactNode;
  customStyle?: string;
  imgURL: string;
}) => {
  return (
    <div
      className={`flex max-md:flex-col py-10 gap-10 items-center justify-between`}
    >
      <div className="bg-[#F1F1F1] rounded-lg flex items-center h-full justify-center py-10 w-full md:w-[50%]">
        <div className=" max-md:w-[170px] w-[200px]  aspect-[200/230] flex justify-center items-center">
          <Image
            src={imgURL}
            alt="product image"
          />
        </div>
      </div>
      {children}
    </div>
  );
};

export default ProductCard;

ProductCard.ProductInfo = ({
  children,
  customStyle,
  title,
  desc,
}: {
  children?: ReactNode;
  customStyle?: string;
  title: string;
  desc: string;
}) => {
  return (
    <div
      className={`flex flex-col max-md:items-center md:max-w-[50%] *:max-md:text-center ${customStyle}`}
    >
      <h2 className="font-bold my-3 lg:w-[50%] text-[28px] xl:text-[40px] tracking-[1px] lg:tracking-[1.48px] leading-[32px] lg:leading-[44px]">
        {title}
      </h2>
      <p className="leading-[25px] font-medium text-base opacity-[70%] mb-7  ">
        {desc}
      </p>

      {children}
    </div>
  );
};

ProductCard.ProductPrice = ({ price }: { price: string }) => {
  return <h2 className="text-black text-lg font-bold mb-9">{price}</h2>;
};

ProductCard.NavigateBtn = function NavigateBtn({
  category,
  index,
}: {
  category: string;
  index: number;
}) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(`/category/${category}/product/${index}`)}
      className="bg-[#D87D4A] text-white w-fit px-6 py-4 tracking-[1px] font-medium text-sm hover:bg-[#fbaf85]"
    >
      SEE PRODUCT
    </button>
  );
};

ProductCard.AddToCartBtn = function AddToCartBtn({
  item,
}: {
  item: { image: string; price: string; title: string };
}) {
  const {
    quantity,
    handleDecrement,
    handleIncrement,
    handleAddtoCart,
    isloading,
  } = useCart();

  return (
    <div className="flex gap-4 items-center">
      <section className="bg-[#F1F1F1] flex items-center w-fit gap-4 py-1 text-xl font-bold ">
        <button
          className="opacity-25 px-3 pl-6 text-3xl font-bold cursor-pointer"
          onClick={handleDecrement}
          disabled={quantity === 0}
        >
          -
        </button>
        {quantity}
        <button
          className="opacity-25 px-3 pr-6 text-2xl font-bold cursor-pointer"
          onClick={handleIncrement}
        >
          +
        </button>
      </section>
      <button
        onClick={() => handleAddtoCart(item, quantity)}
        disabled={quantity === 0 || isloading}
        className="bg-[#D87D4A] uppercase text-nowrap w-fit px-6 py-3 text-white tracking-[1px] font-bold text-sm disabled:bg-[#fbaf85] hover:bg-[#fbaf85]"
      >
        {isloading ? "...loading" : "ADD TO CART"}
      </button>
    </div>
  );
};
