import ShirtItem from "./shirtitem";
import { Shirt } from "../../components/shirts";

const ShirtShop = () => {
  return (
    <main>
      <div className="w-[100vw] mt-10 flex flex-row flex-wrap justify-center items-center">
        {Shirt.map((items, i) => {
          return (
            <ShirtItem
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

export default ShirtShop;
