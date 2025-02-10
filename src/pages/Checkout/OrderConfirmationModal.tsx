import { useParams } from "react-router-dom";
import Image from "../../components/Image";

const OrderConfirmationModal = () => {
  const params=useParams()
  console.log(params);
  
  return (
    <div className="shadow-2xl bg-white rounded-xl max-md:w-[80%] mx-auto w-fit p-8 absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]">
      <Image src="/images/icon-order-confirmation.svg" alt="" />
      <h1 className="text-2xl md:text-3xl font-bold my-9">
        THANK YOU
        <br /> FOR YOUR ORDER
      </h1>
      <section className="my-5 flex gap-0 *:p-5 max-md:flex-col ">
        <div className="bg-[#F1F1F1] rounded-t-lg md:rounded-l-lg md:rounded-tr-none ">
          <h2>product</h2>
          <hr className="opacity-[50%]" />
          <h5 className="text-xs font-bold opacity-[50%]">
            and 2 other item(s)
          </h5>
        </div>
        <div className="bg-black text-white rounded-b-lg md:rounded-r-lg md:rounded-bl-none">
          <h2 className="opacity-[50%] text-base font-medium">GRAND TOTAL</h2>
          <h3 className="text-lg font-bold">$ 5,446</h3>
        </div>
      </section>

      <button className="bg-[#D87D4A] w-full px-6 py-3 text-white tracking-[1px] font-bold text-sm hover:bg-[#fbaf85]">
        BACK TO HOME
      </button>
    </div>
  );
};

export default OrderConfirmationModal;
