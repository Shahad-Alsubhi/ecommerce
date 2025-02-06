import { useContext } from "react";
import Navbar from "../../components/Navbar";
import { cartContext } from "../../context/cartContext";
import MobileMenu from "./MobileMenu";
import { useNavigate } from "react-router-dom";
import Image from "../../components/Image";

const Header = () => {
  const { cartItems } = useContext(cartContext);
  const navigate = useNavigate();

  return (
    <header className="Container bg-[#121212] w-full flex justify-between py-9 items-center relative ">
      <MobileMenu />
      <Image src="/images/logo.svg" alt="logo"

      />
      <Navbar customStyle={"max-lg:hidden"} />
      <div
        className="md:ml-auto lg:ml-[120px] relative cursor-pointer"
        onClick={() => navigate("/cart")}
      >
        {cartItems.size > 0 && (
          <span className="absolute -top-3 -right-3 flex justify-center items-center font-semibold text-sm text-white w-6 h-6 text-center rounded-full bg-[#D87D4A]">
            {cartItems.size}
          </span>
        )}
        <Image src="/images/icon-cart.svg" alt="cart icon" />
      </div>
    </header>
  );
};

export default Header;
