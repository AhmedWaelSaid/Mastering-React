interface Iprops {
imageURL : string ; 
alt : string ;
classname: string

}

const Image = ({ imageURL , alt , classname } : Iprops ) => {
  return (
    <img src={imageURL} alt={alt} className={classname}/>
  )
}

export default Image