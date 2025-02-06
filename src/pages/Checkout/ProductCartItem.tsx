import Image from "../../components/Image";
import { CartItem } from "../../context/cartContext";

const ProductCartItem = ({item}:{item:CartItem}) => {
  return (
    <div className="flex gap-4 mb-5 items-center">
      <div className="rounded-lg bg-[#f1f1f1] shrink-0 p-3">
        <Image
          customStyle="w-14 h-16"
          src={item.image}
          alt=""
        />
      </div>
      <div className=" max-sm:w-[50%] overflow-hidden">
        <h1 className={`text-base font-bold leading-[25px] text-nowrap overflow-hidden overflow-ellipsis`}>{item.title}</h1>
        <h2 className="opacity-50 text-sm font-semibold w-fit">{item.price}</h2>
      </div>
      <h3 className="ml-auto opacity-50">x{item.quantity}</h3>
    </div>
  );
};

export default ProductCartItem;
