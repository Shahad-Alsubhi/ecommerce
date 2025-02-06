const ProductFeaturs = () => {
  return (
    <div className=" flex max-lg:flex-col gap-20 mb-20 mt-8">
      <section className="lg:max-w-[60%]">
        <h1 className="text-2xl md:text-3xl leading-[36px] tracking-[0.86px] md:tracking-[1.15px] font-bold uppercase mb-5">
          Features
        </h1>
        <p className="text-base leading-[25px] opacity-50 font-medium">
          These headphones have been created from durable, high-quality
          materials tough enough to take anywhere. Its compact folding design
          fuses comfort and minimalist style making it perfect for travel.
          Flawless transmission is assured by the latest wireless technology
          engineered for audio synchronization with videos.
          <br />
          More than a simple pair of headphones, this headset features a pair of
          built-in microphones for clear, hands-free calling when paired with a
          compatible smartphone. Controlling music and calls is also intuitive
          thanks to easy-access touch buttons on the earcups. Regardless of how
          you use the XX59 headphones, you can do so all day thanks to an
          impressive 30-hour battery life that can be rapidly recharged via
          USB-C.
        </p>
      </section>
      <section className="md:flex gap-[25%] lg:block ">
        <h1 className="text-2xl mb-5 md:text-3xl leading-[36px] tracking-[0.86px] md:tracking-[1.15px] font-bold uppercase">
          In The Box
        </h1>
        <ul className="list-none w-fit text-base leading-[30px] font-medium text-black/50">
          <li >
            <span className="text-[#D87D4A] mr-4 font-bold">
              X1
            </span>
            Headphone Unit
          </li>
          <li>
            <span className="text-[#D87D4A] mr-4 font-bold">
              X2
            </span>
            Replacement Earcups
          </li>
          <li>
            <span className="text-[#D87D4A] mr-4 font-bold">
              X1
            </span>
            User Manual
          </li>
          <li>
            <span className="text-[#D87D4A] mr-4 font-bold">
              X1
            </span>
            3.5mm 5m Audio Cable
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ProductFeaturs;
