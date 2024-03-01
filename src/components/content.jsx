import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Products } from "../constants";

const Card = ({ product }) => {
  return (
    <div className="h-[27rem] w-[25rem] bg-white flex items-center flex-wrap flex-col mt-4 mr-2 rounded-2xl gap-[5px]">
      <div className="h-[20rem] flex mt-4">
        <img src={product.imgUrl} alt={product.name} />
      </div>
      <h2 className="text-black ">{product.name}</h2>
      <span className="text-black">{product.size}</span>
      <p className="text-black font-bold">₹{product.price}</p>
    </div>
  );
};

const Content = () => {
  const [filteredProducts, setFilteredProducts] = useState(Products);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showButtons, setShowButtons] = useState(true);

  const handleFilterClick = (category) => {
    const filtered = Products.filter((product) =>
      product.name.toLowerCase().includes(category.toLowerCase())
    );
    setFilteredProducts(filtered);
    setSelectedCategory(category);
    setShowButtons(false);
  };

  const handleShowAllClick = () => {
    setFilteredProducts(Products);
    setSelectedCategory(null);
    setShowButtons(true);
  };

  return (
    <>
      <main className="flex items-center justify-evenly flex-row mt-[1rem] relative">
        {/* <img src="public\images\Remove It_1700816165907.jpeg" alt=""/> */}
        {showButtons && (
          <div>
            <div className="top-[21rem] left-[6rem] absolute">
              <NavLink
                onClick={() => handleFilterClick("t-shirt")}
                className="px-6 py-2 backdrop-blur-[8px] font-bold rounded-full shadow-[0_2px_20px_rgba(0,0,0,0.35)] text-white bg-transparent shadow-slate-200 hover:shadow-white [text-shadow:1px_1px_2px_var(--tw-shadow-color)]"
              >
                T-Shirt
              </NavLink>
            </div>
            <div className="top-[27.5rem] left-[40rem] absolute ">
              <NavLink
                onClick={() => handleFilterClick("shoe")}
                className="px-6 py-2 backdrop-blur-[8px] font-bold rounded-full shadow-[0_2px_20px_rgba(0,0,0,0.35)] text-white bg-transparent shadow-slate-200 hover:shadow-white [text-shadow:1px_1px_2px_var(--tw-shadow-color)]"
              >
                Shoe
              </NavLink>
            </div>
            <div className="top-[17rem] left-[26rem] absolute">
              <NavLink
                onClick={() => handleFilterClick("shirt")}
                className="px-6 py-2 backdrop-blur-[8px] font-bold rounded-full shadow-[0_2px_20px_rgba(0,0,0,0.35)] text-white bg-transparent shadow-slate-200 hover:shadow-white [text-shadow:1px_1px_2px_var(--tw-shadow-color)]"
              >
                Shirt
              </NavLink>
            </div>
            <div className="top-[25rem] left-[73rem] absolute">
              <NavLink
                onClick={() => handleFilterClick("bag")}
                className="px-6 py-2 backdrop-blur-[8px] font-bold rounded-full shadow-[0_2px_20px_rgba(0,0,0,0.35)] text-white bg-transparent shadow-slate-200 hover:shadow-white [text-shadow:1px_1px_2px_var(--tw-shadow-color)]"
              >
                Bag
              </NavLink>
            </div>
            <div className="top-[12rem] right-[28rem] absolute">
              <NavLink
                onClick={() => handleFilterClick("watch")}
                className="px-6 py-2 backdrop-blur-[8px] font-bold rounded-full shadow-[0_2px_20px_rgba(0,0,0,0.35)] text-white bg-transparent shadow-slate-200 hover:shadow-white [text-shadow:1px_1px_2px_var(--tw-shadow-color)]"
              >
                Watch
              </NavLink>
            </div>
          </div>
        )}

        {selectedCategory && (
          <div className="flex flex-wrap item-center justify-center">
            {filteredProducts.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
    </>
  );
};

export default Content;
