import { createContext, useState } from 'react';

export const CartContext = createContext({
  isOpen: false,
  toggleIsOpen: () => null,
});
export const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };
  const value = { isOpen, toggleIsOpen };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
