import ShoeItem from "./shoeitem";
import { Shoe } from "../../components/shoes";

const ShoeShop = () => {
  return (
    <main>
      <div className="w-[100vw] mt-10 flex flex-row flex-wrap justify-center items-center">
        {Shoe.map((items, i) => {
          return (
            <ShoeItem
              key={i}
              id={items.id}
              name={items.name}
              size={items.size}
              price={items.price}
              imgUrl={items.imgUrl}
            />
          );
        })}
      </div>
    </main>
  );
};

export default ShoeShop;
