const BagItem = (props) => {
    return (
      <main className="flex flex-row ">
        <div className="h-[31rem] w-[25rem] bg-white flex items-center flex-wrap flex-col mt-4 mr-2 rounded-2xl gap-[5px]">
          <div className="h-[20rem] flex mt-4">
            <img src={props.imgUrl} alt="" />
          </div>
          <h2 className="text-black ">{props.name}</h2>
          <span className="text-black">{props.size}</span>
          <p className="text-black font-bold">{props.price}</p>
          <button className="h-[3rem] w-[10rem] bg-teal-800 text-white rounded-md">
            Add to cart
          </button>
        </div>
      </main>
    );
  };
  
  export default BagItem;
