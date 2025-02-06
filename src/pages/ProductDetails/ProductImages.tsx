import { useState } from "react";
const ProductImages = ({ images }: { images: string[] }) => {
  const [activeImageIndex, setactiveImageIndex] = useState(-1);

  return (
    <>
      <div className="grid grid-cols-1 [&>*:nth-child(2)]:max-md:order-3 [&>*:nth-child(2)]:row-span-2 mb-30 md:grid-cols-[1fr_1.5fr] grid-rows-[1fr_1fr_1.75fr] h-[756px] md:grid-rows-2 gap-6 md:h-[592px] *:overflow-hidden *:rounded-xl">
        {images.map((url, index) => (
          <div
            className={"w-full h-full child bg-cover bg-center"}
            style={{ backgroundImage: `url(${url})` }}
            key={index}
            onClick={() => setactiveImageIndex(index)}
          ></div>
        ))}
      </div>
      {activeImageIndex >= 0 && (
        <div
          onClick={() => setactiveImageIndex(-1)}
          className="fixed z-50 top-0 right-0 w-full bg-black/80 h-full flex justify-between lg:px-8 items-center"
        >
          <img
            src="/images/left-arrow.png"
            className="w-14 loaded"
            alt="left arrow"
            onClick={(e) =>{e.stopPropagation();
              setactiveImageIndex((index) =>
                index === 0 ? images.length - 1 : index - 1
              )}
            }
          />
          <img
            src={images[activeImageIndex]}
            alt="product image"
            className="w-[50%] my-auto max-lg:w-[80%] loaded"
          />
          <img
            src="/images/right-arrow.png"
            className="w-14 loaded "
            alt="right arrow"
            onClick={(e) =>{e.stopPropagation();
              setactiveImageIndex((index) =>
                index === images.length - 1 ? 0 : index + 1
              )}
            }
          />
        </div>
      )}
    </>
  );
};

export default ProductImages;
