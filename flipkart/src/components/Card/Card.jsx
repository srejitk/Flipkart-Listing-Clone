import { useState } from "react";
import { FaHeart } from "react-icons/fa";
export const Card = ({
  product: { title, cover, brand, size, rate, price, discount },
}) => {
  const [liked, setLiked] = useState(false);
  return (
    <div className="card w-72 md:w-56 lg:w-80 m-4 cursor-pointer group relative rounded-sm shadow-sm flex flex-col items-start p-4">
      <FaHeart
        onClick={() => setLiked((prev) => !prev)}
        className={`absolute top-6 right-12 ${
          liked ? "text-red-500 opacity-100" : "text-gray-500 opacity-50"
        }`}
      />
      <img
        src={cover}
        alt="product cover"
        className="w-full object-cover max-h-[20rem] rounded-sm"
      />
      <div className="flex flex-col items-start absolute bottom-0 bg-white pb-6 pr-4 group-hover:pb-16 transition-[padding-bottom]">
        {" "}
        <h1 className="font-semibold text-gray-500">{brand}</h1>
        <h2
          title={title}
          className="text-left overflow-ellipsis overflow-clip "
        >
          {title}
        </h2>
        <div className="price flex flex-row items-center w-full gap-4">
          <p className="font-semibold">&#8377;{price}</p>
          <p className=" line-through">&#8377;{rate}</p>
          <p className="text-green-500 font-semibold">{discount * 100}%</p>
          <img
            src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
            alt="logo"
            className="ml-auto h-5 pr-3"
          />
        </div>
        <div className="mb-auto gap-6 py-1 hidden group-hover:flex">
          {" "}
          {size?.map((size) => (
            <p>{size}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
