import WatchItem from "./watchitem";
import { Watch } from "../../components/watchs";

const WatchShop = () => {
  return (
    <main>
      <div className="w-[100vw] mt-10 flex flex-row flex-wrap justify-center items-center">
        {Watch.map((items, i) => {
          return (
            <WatchItem
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

export default WatchShop;
