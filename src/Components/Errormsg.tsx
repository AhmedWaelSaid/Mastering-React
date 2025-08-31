interface Iprops {
Errormsg : string
}

const Errormsg = ({Errormsg} : Iprops ) => {
  return (
    Errormsg ?
    <div className="text-amber-700 ">
    <span>{Errormsg}</span> 
    </div> : null
  )
}

export default Errormsg