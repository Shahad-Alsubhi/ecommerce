import Image from "../../components/Image";

const Banner = () => {
  return (
    <div className=" bg-[#131313] lg:px-8 xl:px-48 text-white relative flex gap-14  justify-between py-14 max-md:py-7  items-center max-lg:flex-col">
      <hr className=" text-white/20 absolute top-0 right-8 left-4 xl:right-48 z-40 xl:left-48" />
      <div className="2xl:max-w-[40%] z-30 max-lg:absolute left-[50%] top-[50%] max-lg:-translate-y-[50%] max-lg:items-center max-lg:-translate-x-[50%] flex flex-col">
        <h1 className="text-white opacity-[50%] text-sm tracking-[10px] max-lg:text-center">
          NEW PRODUCT
        </h1>
        <h2 className="font-bold my-5 text-[56px] max-md:text-4xl tracking-[2px] max-md:leading-[40px] leading-[58px] max-lg:text-center">
          XX99 Mark II HeadphoneS
        </h2>
        <p className="leading-[25px] text-base font-light opacity-[70%] mb-7 max-lg:text-center ">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button className="bg-[#D87D4A]  w-fit px-6 py-4 tracking-[1px] font-bold text-sm hover:bg-[#fbaf85]">
          SEE PRODUCT
        </button>
      </div>
      <Image
        src="https://res.cloudinary.com/deqnekemi/image/upload/f_webp/v1738853980/Bitmap_rgo8gk.png"
        alt=""
        customStyle="w-[550px] shrink-0 aspect-[550/580] rounded-full opacity-15!"
      />
    </div>
  );
};

export default Banner;
