import { useEffect, useState } from "react";
import ProductCategorySection from "../../components/ProductCategorySection";
import { useLocation } from "react-router-dom";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path=useLocation()

  useEffect(()=>handleClose,[path])

  const handleClose=()=>{
    document.getElementById("menu")?.classList.add("closingMenu")
    document.body.style.overflow="scroll"
    setTimeout(()=>{setIsOpen(false)},1000)
  }
  return (
    <div className="lg:hidden z-50">
      {!isOpen ? (
        <img
          src="/images/icon-hamburger.svg"
          alt="menu icon"
          className="md:mr-8 loaded"
          onClick={() => {
            setIsOpen(true);
            document.body.style.overflow = "hidden";

          }}
        />
      ) : (
        <svg
          width="16"
          height="15"
          className=" md:mr-8"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleClose}
        >
          <path 
            d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z"
            fill="#FFF"
            fillRule="evenodd"
          />
        </svg>
      )}

      {isOpen && (
        <div
          id="menu"
          className={`openingMenu absolute top-[97px] left-0 w-full shadow-2xl`}
        >
          <div className="bg-white px-16">
            <ProductCategorySection  />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
