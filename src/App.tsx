import ProductCard from "./Components/productCard";
import { productList , formInputsList, colors } from "./data/index";
import Model from './Components/ui/Model';
import {useState, type ChangeEvent} from 'react'
import Button from './Components/ui/Button';
import Input from "./Components/ui/input";
import type { IProduct } from "./Interfaces";
import {vladationobj} from "./validation/index"
import Errormsg from "./Components/Errormsg";
import Circlecolor from "./Components/circlecolor";


const productObj = {
  title: '' ,
  description: '',
  imageURL: '',
  price: '',
  colors: [] ,
  category: {
    name: '', 
    imageURL: ""
}}

function App() {
  const [Product, setProduct] = useState<IProduct>(productObj);

  const [isOpen, setIsOpen] = useState(false)
  const [isError, setisError] = useState({
    title: '' ,
  description: '',
  imageURL: '',
  price: '',
  })
  const [tempcolor , settempcolor] = useState<string[]>([])
  

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }
  const onchangeHandler = (e : ChangeEvent<HTMLInputElement>) => {
   const {name , value} = e.target
   setProduct({
    ...Product ,
    [name] : value
   })
   setisError({
    ...isError ,
    [name] : ""
   } )
  
  }
  const onsubmitHundler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // setProduct(productObj)
    const Errors = vladationobj(Product)
    console.log(Errors);
    const errormsg = Object.values(Errors).some((value) => value === "") && Object.values(Errors).every((value) => value === "" ) 
     setisError(Errors)
    if (!errormsg) {
      return;
    }
    console.log('product Uploaded to the server' );
   }
   console.log(tempcolor);
  
  const Renderlist = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  const RenderInputForm = formInputsList.map(input=> <div className="flex flex-col " key={input.id}>
    <label htmlFor={input.id}>{input.label}</label>
<Input type="text" id={input.id} name={input.name} value={Product[input.name]} onChange={onchangeHandler}/>
     <Errormsg Errormsg={isError[input.name]} />
  </div>
  )
 
  const Allcolors = colors.map((input: string) => {
    return <Circlecolor key={input} color={input} onClick={()=>settempcolor((prev) => [...prev , input])}/>
  })
    
  
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
      <form className="space-y-3"  onSubmit={onsubmitHundler}>
      {RenderInputForm}
      <div className="flex flex-row my-4 items-center space-x-2  ">
      {Allcolors}
      </div>
      <div className="flex space-x-3">
    <Button className="bg-blue-600 p-3">Submit</Button>
    <Button onClick={close} className="bg-red-600 p-3">cancel</Button>
    </div>
      </form>
    
    
    </Model>
    
    </main>
  );
}

export default App;
