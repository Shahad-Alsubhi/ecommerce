import { useNavigate, useParams } from "react-router-dom";
import Image from "../../components/Image";

const OrderConfirmationModal = () => {
  const { resMessage } = useParams();  
  const navigate=useNavigate()

  return (
    <div className="shadow-2xl bg-white rounded-xl max-md:w-[80%] mx-auto w-fit p-8 absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]">
      {resMessage === "Authorised" ? (
        <>
          <Image src="/images/icon-order-confirmation.svg" alt="order icon" />
          <h1 className="text-1xl md:text-2xl font-bold mt-9 mb-5">
            THANK YOU
            <br /> FOR YOUR ORDER
          </h1>
          <p className="font-bold">Your transaction was completed successfully.</p>

          {/* <section className="my-5 flex gap-0 *:p-5 max-md:flex-col ">
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
      </section> */}
        </>
      ) : resMessage === "Cancelled" ? (
        <>
          <h1 className="text-[#f00] text-lg">Transaction Cancelled</h1>
          <p>your transaction request has been cancelled. </p>
        </>
      ) : (
        <>
          <h1 className="text-[#f00] text-lg mb-3">
            Transaction not completed
          </h1>

          <p>
            Sorry, unable to complete your transaction at this time.<br/> No charges
            have been made.
          </p>
        </>
      )}
      <button onClick={()=>navigate("/")} className="bg-[#D87D4A] mt-4 w-full px-6 py-3 text-white tracking-[1px] font-bold text-sm hover:bg-[#fbaf85]">
        BACK TO HOME
      </button>
    </div>
  );
};

export default OrderConfirmationModal;
