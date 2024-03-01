import BagItem from "./bagitem";
import { Bag } from "../../components/bags";

const BagShop = () => {
  return (
    <main>
      <div className="w-[100vw] mt-10 flex flex-row flex-wrap justify-center items-center">
        {Bag.map((items, i) => {
          return (
            <BagItem
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
      <div></div>
    </main>
  );
};

export default BagShop;
