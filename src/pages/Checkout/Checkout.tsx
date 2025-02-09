import { useNavigate } from "react-router-dom";
import ProductCartItem from "./ProductCartItem";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import useCart from "../../hooks/useCart";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(cartContext);
  const {handlePayment,calculateTotal}=useCart()
  const total=calculateTotal()
  const shipping = 6.78;
  

  
  return (
    <div className="Container bg-[#F2F2F2] pt-7 pb-20 min-h-[90vh]">
      {cartItems.size === 0 ? (
        <h1 className="h-screen">your shopping cart is empty ..</h1>
      ) : (
        <>
          <button
            className="opacity-50 text-xl font-medium mb-7 "
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>

          <div className=" *:rounded-lg md:flex gap-6 ">
            <div className="p-6 w-full max-md:rounded-b-none self-start bg-white">
              <h1 className="md:hidden uppercase text-xl mb-6 font-semibold">
                Summary
              </h1>
              {[...cartItems.values()].map((item) => (
                <ProductCartItem key={item.title} item={item} />
              ))}
            </div>
            <section className="md:w-[40%] h-fit max-md:rounded-t-none bg-white p-6 *:not-first:text-base *:not-first:flex ">
              <h1 className="mb-5 max-md:hidden uppercase text-xl font-semibold">
                Summary
              </h1>
              <h2 className="text-[#7f7f7f]">
                TOTAL
                <span className="ml-auto text-lg font-semibold text-black">
                  ${(total - 0.05 * total).toFixed(2)}
                </span>
              </h2>
              <h2 className="text-[#7f7f7f]">
                SHIPPING
                <span className="ml-auto text-lg font-semibold text-black">
                  ${shipping}
                </span>
              </h2>
              <h2 className="text-[#7f7f7f]">
                VAT 5% (INCLUDED)
                <span className="ml-auto text-lg font-semibold text-black">
                  ${(0.05 * total).toFixed(2)}
                </span>
              </h2>
              <h2 className="my-6 text-[#7f7f7f]">
                GRAND TOTAL
                <span className="ml-auto text-lg font-semibold text-[#D87D4A]">
                  ${(total + shipping).toFixed(2)}
                </span>
              </h2>
              <button onClick={()=>handlePayment()} className="bg-[#D87D4A] text-nowrap justify-center w-full px-6 py-3 text-white tracking-[1px] font-medium text-sm hover:bg-[#fbaf85]">
                CONTINUE & PAY
              </button>
            </section>
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;
