import type { HTMLAttributes } from "react"

interface Iprops extends HTMLAttributes<HTMLSpanElement> {
color : string
}

const Circlecolor = ({color , ...rest} : Iprops ) => {
  return (
    <span className="w-5 h-5 rounded-full   bg-amber-700 cursor-pointer"
     style={{backgroundColor : color}} {...rest} />
  )
}

export default Circlecolor