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
      toast.success("Item added to your cart successfully!");
    }, 700);
  };

  const calculateTotal = () => {
    return [...cartItems.values()].reduce(
      (pre, item) => pre + parseFloat(item.price) * item.quantity,
      0
    );
  };
  const handlePayment = async () => {
    const res = await fetch(`/user/order`, {
      method: "POST",
      body: JSON.stringify({ total: calculateTotal() }),
    });

    if (res) {
      const { redirect_url } = await res.json();
      window.location.href = redirect_url;
      setCartItems(new Map<string, CartItem>());
    }
  };

  return {
    handleAddtoCart,
    handleDecrement,
    handleIncrement,
    quantity,
    isloading,handlePayment,calculateTotal
  };
};

export default useCart;
