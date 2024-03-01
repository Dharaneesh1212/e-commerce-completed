const Item = ({ items, addToCart }) => {
  return (
    <main className="flex flex-row ">
      <div className="h-[31rem] w-[25rem] bg-white flex items-center flex-wrap flex-col mt-4 mr-2 rounded-2xl gap-[5px]">
        <div className="h-[20rem] flex mt-4">
          <img src={items.imgUrl} alt=""/>
        </div>
        <h2 className="text-black ">{items.name}</h2>
        <span className="text-black">{items.size}</span>
        <p className="text-black font-bold">₹{items.price}</p>
        <button
          className="h-[3rem] w-[10rem] bg-teal-800 text-white rounded-md"
          onClick={() => addToCart(items)}
        >
          Add to cart
        </button>
      </div>
    </main>
  );
};

export default Item;
