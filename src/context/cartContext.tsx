import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export type CartItem = {
  image: string;
  price: string;
  quantity: number;
  title: string;
};

type CartContextType = {
  cartItems: Map<string, CartItem>;
  setCartItems: Dispatch<SetStateAction<Map<string, CartItem>>>;
};

export const cartContext = createContext<CartContextType>({
  cartItems: new Map<string, CartItem>(),
  setCartItems: () => {},
});

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Map<string, CartItem>>(
    new Map<string, CartItem>()
  );
  return (
    <cartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </cartContext.Provider>
  );
};
export default CartProvider;
