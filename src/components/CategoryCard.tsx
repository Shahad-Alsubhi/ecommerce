import { useNavigate } from "react-router-dom";
import Image from "./Image";

const CategoryCard = ({ title,imgSrc }: { title: string ,imgSrc:string}) => {
  const navigate=useNavigate()
  return (
    <div className="bg-[#F1F1F1] h-[220px] pb-9 pt-28 rounded-lg w-full relative">
      <Image
        src={imgSrc}
        customStyle="absolute -top-[30%] left-[50%] -translate-x-[50%] h-50"
        alt={title+" image"}
      />
      <h1 className="font-bold uppercase tracking-[1.30px] text-lg text-center mb-6">
        {title}
      </h1>
      <button onClick={()=>navigate(`/category/${title.toLowerCase()}`)} className="text-sm  tracking-[1px] hover:text-[#D87D4A] font-bold text-[#7D7D7D] m-auto flex gap-2 items-center">
        SHOP
        <Image src="/images/icon-arrow-right.svg" alt="arrow right" customStyle="w-2" />
      </button>
    </div>
  );
};

export default CategoryCard;
