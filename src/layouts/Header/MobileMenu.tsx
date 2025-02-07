import { useEffect, useState } from "react";
import ProductCategorySection from "../../components/ProductCategorySection";
import { useLocation } from "react-router-dom";

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const path=useLocation()

  useEffect(()=>handleClose,[path])

  const handleClose=()=>{
    document.getElementById("menu")?.classList.add("closingMenu")
    document.body.style.overflow="scroll"
    setTimeout(()=>{setMenuOpen(false)},900)
  }
  return (
    <div className="lg:hidden  ">
      {!menuOpen ? (
        <img
          src="/images/icon-hamburger.svg"
          alt="menu icon"
          className="md:mr-8 w-[18px] loaded"
          onClick={() => {
            setMenuOpen(true);
            document.body.style.overflow = "hidden";

          }}
        />
      ) : (
        <svg
          width="18"
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

      {menuOpen && (
        <div
          id="menu"
          onClick={() => setMenuOpen(false)}
          className={`openingMenu fixed  overflow-scroll bottom-0 top-[97px] z-50 left-0 w-full pb-7`}
        >
          <div className="bg-white px-16 -mt-14">
            <ProductCategorySection  />
          </div>
        </div>
      )}
       {/* Backdrop */} 
        {menuOpen && (
        <div
          className="fixed inset-0 bg-black top-[97px] opacity-30 z-10"
        ></div>)}
    </div>
  );
};

export default MobileMenu;
