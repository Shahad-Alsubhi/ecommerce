import { useNavigate } from "react-router-dom";
import Image from "../../components/Image";

const Advertisements = () => {

  const navigate =useNavigate()
  const handleNavigate=(categoryName:string,productId:number)=>{
      navigate(`/category/${categoryName}/product/${productId}`)
  }
  return (
    <>
      <div className="lg:h-[560px] text-white justify-items-center bg-[#D87D4A] rounded-lg grid grid-cols-2 mb-7 items-center overflow-hidden max-lg:grid-cols-1 max-lg:grid-rows-[1fr_1.5fr] max-lg:py-16 max-lg:gap-10">
        <Image
          src="https://res.cloudinary.com/deqnekemi/image/upload/f_webp/v1738304154/image-speaker-zx9_bghirk.png"
          customStyle="w-[390px] max-lg:w-[197px] h-fit lg:-mb-[105px] opacity-95 mx-auto max-lg:h-[237px]"
          alt=" XX99 Mark II HeadphoneS image"
        />
        <div className="lg:pr-40 flex flex-col max-lg:items-center max-lg:w-[50%]">
          <h2 className="font-semibold my-5 text-[56px]  max-lg:text-center max-md:text-4xl tracking-[2px] max-md:leading-[40px] leading-[58px] ">
          ZX9
          SPEAKER          </h2>
          <p className="leading-[25px] text-base font-light opacity-[70%] mb-7 max-lg:text-center">
          Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
          <button onClick={()=>handleNavigate("speakers",0)} className="bg-black  w-fit px-6 py-4 tracking-[1px] font-bold text-sm hover:bg-[#4c4c4c]">
            SEE PRODUCT
          </button>
        </div>
      </div>
      {/* adv 2 */}
      <div className="h-[320px] flex justify-between  overflow-hidden relative mb-7 bg-[#c7c7c7] rounded-lg">
        <div className="bg-transparent p-5 z-10 lg:pl-20 pr-0 rounded-lg w-fit text-nowrap flex flex-col justify-center">
          <h1 className="text-3xl lg:text-5xl font-semibold mb-5">
            ZX7 SPEAKER
          </h1>
          <button onClick={()=>handleNavigate("speakers",1)} className="hover:bg-black bg-transparent text-nowrap border-[1px] text-black hover:text-white w-fit px-6 py-3 tracking-[1px] font-bold text-sm lg:text-xl">
            SEE PRODUCT
          </button>
        </div>
        <Image
          customStyle="h-full"
          src="https://res.cloudinary.com/deqnekemi/image/upload/f_webp/v1738590678/image-speaker-zx7_lwn6px_1_-removebg-preview_snfdh8.png"
          alt="ZX7 SPEAKER image"
        />
      </div>
      {/* adv 3 */}
      <div className="flex gap-4 max-md:flex-col mb-30">
        <Image
          src="https://res.cloudinary.com/deqnekemi/image/upload/f_webp/v1738304153/image-earphones-yx1_vrlwxp.jpg"
          customStyle="rounded-lg md:w-[50%]"
          alt="YX1 EARPHONES image"
        />
        <div className="bg-[#F1F1F1] p-10 lg:pl-20  rounded-lg md:w-[50%] flex flex-col justify-center">
          <h1 className="text-3xl lg:text-5xl font-semibold mb-5">
            YX1 EARPHONES
          </h1>
          <button onClick={()=>handleNavigate("earphones",0)} className="hover:bg-black bg-transparent border-[1px] text-black hover:text-white w-fit px-6 py-3 tracking-[1px] font-bold text-sm lg:text-xl">
            SEE PRODUCT
          </button>
        </div>
      </div>
    </>
  );
};

export default Advertisements;
