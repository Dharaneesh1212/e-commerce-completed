import TShirtItem from "./tshirtitem";
import { TShirt } from "../../components/tshirts";

const TShirtShop = () => {
  return (
    <main>
      <div className="w-[100vw] mt-10 flex flex-row flex-wrap justify-center items-center">
        {TShirt.map((items, i) => {
          return (
            <TShirtItem
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

export default TShirtShop;
