import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { cartContext, CartItem } from "../context/cartContext";

const useCart = () => {
  const [quantity, setQuantity] = useState<number>(0);
  const [isloading, setIsLoading] = useState(false);
  const { cartItems, setCartItems } = useContext(cartContext);
  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => {
    if (quantity > 0) setQuantity((prev) => prev - 1);
  };
  const handleAddtoCart = (
    item: { image: string; price: string; title: string },
    quantity: number
  ) => {
    const { price, title, image } = item;
    setIsLoading(true);
    setTimeout(() => {
      if (cartItems.size > 0 && cartItems.has(title)) {
        const updatedItem = {
          ...cartItems.get(title),
          quantity,
        } as CartItem; // Updating quantity
        cartItems.set(title, updatedItem);
        setCartItems(new Map(cartItems));
      } else {
        cartItems.set(title, { quantity, price, title, image });
        setCartItems(new Map(cartItems));
      }
      setIsLoading(false);
      toast.success("Successfully created!");
    }, 700);
  };
  return {
    handleAddtoCart,
    handleDecrement,
    handleIncrement,
    quantity,
    isloading,
  };
};

export default useCart;
