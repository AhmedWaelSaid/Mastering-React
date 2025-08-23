import type { IProduct } from "../Interfaces";
import Image from "./Image";
import Button from "./ui/Button";
import { txtslice } from "../utilts/fuctions";
interface Iprops {
  product: IProduct;
}

const productCard = ({ product }: Iprops) => {
  const { description, title, price , imageURL} = product;
  return (
    <div className=" max-w-sm mr-auto ml-auto md:mx-0 md:max-w-lg rounded-md border  border-red-500 p-2 m-3 flex-col ">
      <Image
        imageURL={imageURL}
        alt={"productname"}
        classname="rounded-md mb-2 w-full h-70"
      />

      <h3 className="text-red-500 text-3xl ">{title}</h3>
      <p className="my-4">{txtslice(description)}</p>

      <div className="flex flex-row my-4 items-center space-x-2  ">
        <span className="w-5 h-5 rounded-full   bg-amber-700 cursor-pointer" />
        <span className="w-5 h-5 rounded-full   bg-blue-600 cursor-pointer" />
        <span className="w-5 h-5 rounded-full  bg-cyan-300 cursor-pointer " />
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xl">{price}$</span>
        <Image
          imageURL={imageURL}
          alt="productname"
          classname="h-10 w-10 rounded-full"
        />
      </div>
      <div className="flex justify-between space-x-2 mt-3">
        {/* <Button  onClick={() => {
        alert("hello");
      }} 
      width= 'w-full'
      className="bg-blue-600 p-3  ">
          sucsess
        </Button> */}
        <Button className="bg-blue-600 p-3">Edit</Button>
        <Button className="bg-red-400">Delete</Button>
      </div>
    </div>
  );
};

export default productCard;
