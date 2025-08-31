  export const vladationobj = (Product : {title: string; description: string;   imageURL: string;  price: string} ) => {
    
    const Errors : {title: string , description: string ,   imageURL: string,  price: string }= 
    {
        title : "" ,
        description : "" ,
        imageURL: "" ,
        price: "" 
    }
    const imgurlvladation  = /^(ftp|http|https):\/\/[^ "]+$/.test(Product.imageURL)

  
   if (!Product.title.trim() || Product.title.length < 10 || Product.title.length > 50 ) {
     
     Errors.title = "error"
     
   }
   if (!Product.description.trim() || Product.description.length < 10 || Product.description.length > 900 ) {
     
   Errors.description = "hellodescription"
     
   }
   if (!Product.imageURL.trim() ||!imgurlvladation ) {
     
     Errors.imageURL = "Wrong imageURL"
     
   }
   if (!Product.price.trim() || isNaN(Number(Product.price)) ) {
     
    Errors.price = "helloprice"
     
   }

   
    return Errors
}