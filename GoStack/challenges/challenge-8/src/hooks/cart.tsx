import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
  quantity: number;
}

interface CartContext {
  products: Product[];
  addToCart(item: Omit<Product, 'quantity'>): void;
  increment(id: string): void;
  decrement(id: string): void;
}

const PRODUCT_KEY = '@GoMarketplace:products';
const CartContext = createContext<CartContext | null>(null);

const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const loadedProducts = await AsyncStorage.getItem(PRODUCT_KEY);
      if (loadedProducts) {
        setProducts(JSON.parse(loadedProducts));
      }
    }

    loadProducts();
  }, []);

  const updateAsyncStorage = useCallback(async () => {
    if (products) {
      await AsyncStorage.setItem(PRODUCT_KEY, JSON.stringify(products));
    } else {
      await AsyncStorage.removeItem(PRODUCT_KEY);
    }
  }, []);

  const increment = useCallback(
    async id => {
      setProducts(oldProducts => {
        return oldProducts.map(product => {
          if (product.id === id) {
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          }
          return product;
        });
      });
      updateAsyncStorage();
    },
    [updateAsyncStorage],
  );

  const decrement = useCallback(
    async id => {
      setProducts(oldProducts => {
        return oldProducts
          .map(product => {
            if (product.id === id) {
              return {
                ...product,
                quantity: product.quantity - 1,
              };
            }
            return product;
          })
          .filter(product => product.quantity > 0);
      });
      updateAsyncStorage();
    },
    [updateAsyncStorage],
  );

  const addToCart = useCallback(
    async product => {
      const productIndex = products.findIndex(item => item.id === product.id);
      if (productIndex >= 0) {
        await increment(products[productIndex].id);
        return;
      }
      setProducts(oldProducts => [
        ...oldProducts,
        {
          ...product,
          quantity: 1,
        },
      ]);
      updateAsyncStorage();
    },
    [products, increment, updateAsyncStorage],
  );

  const value = React.useMemo(
    () => ({ addToCart, increment, decrement, products }),
    [products, addToCart, increment, decrement],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): CartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { CartProvider, useCart };
