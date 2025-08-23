import ProductCard from "./Components/productCard";
import { productList , formInputsList } from "./data/index";
import Model from './Components/ui/Model';
import {useState} from 'react'
import Button from './Components/ui/Button';
import Input from "./Components/ui/input";

function App() {

  const [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }
  // function toggle()
  // {
  //   if (isOpen) {
  //     close() ;
  //   }
  //    else {
  //       open()
  //     }
  // }
  
  const Renderlist = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  const RenderInputForm = formInputsList.map( input=> <div className="flex flex-col p-6">
    <label htmlFor={input.id}>{input.label}</label>
 <Input type="text" id={input.id} name={input.name}/>
  </div>
  )
  return (
    
    <main className="   border-amber-600 p-5 mr-5 ml-5 my-5 border-2 @container mt-20">
      <Button onClick={open}  className="bg-blue-600 p-3">Build Now</Button>
      <div
      className=" m-5 grid grid-cols-1
      md:grid-cols-2 lg:grid-cols-3
       xl:grid-cols-4   gap-3 rounded-md"
    >
      {Renderlist}
    </div>
   
    <Model isOpen={isOpen} title="Add New Prodtuct"> 
      
    {RenderInputForm}
    <div className="flex gap-2">
    <Button className="bg-blue-600 p-3">Edit</Button>
    <Button onClick={close} className="bg-red-600 p-3">cancel</Button>
    </div>
    </Model>
    
    </main>
  );
}

export default App;
