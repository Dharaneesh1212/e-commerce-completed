import Item from "./item";
import { Products } from "../constants";
import { useState } from "react";

const Shop = ({ cart, setCart,}) => {
  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );

      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };  

  const [filteredList, setFilteredList] = useState(Products);

  const filterBySearch = (event) => {
    const query = event.target.value;
    let updatedList = [...Products];

    updatedList = updatedList.filter((item) => {
      if (typeof item === 'string') {
        return item.toLowerCase().includes(query.toLowerCase());
      }

      if (typeof item === 'object' && item.hasOwnProperty('name')) {
        return item.name.toLowerCase().includes(query.toLowerCase());
      }

      return false;
    });

    setFilteredList(updatedList);
  };

  return (
    <main className="">
       <div className="flex items-center justify-center">
          <input
            type="search"
            placeholder="Search"
            className="border-white border p-2 bg-transparent outline-none text-white font-sans rounded-lg"
            onChange={filterBySearch}
          />
        </div>
      <div className="w-[100vw] mt-10 flex flex-row flex-wrap justify-center items-center">
        {filteredList.map((items, i) => {
          return (
            <Item
              key={i}
              items={items}
              cart={cart}
              setCart={setCart}
              addToCart={addToCart}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Shop;
