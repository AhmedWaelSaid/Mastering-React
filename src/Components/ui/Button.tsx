import type { ButtonHTMLAttributes, ReactNode } from "react"

interface Iprops  extends ButtonHTMLAttributes<HTMLButtonElement> {
children : ReactNode
className? : string
width?: 'w-full' | 'w-fit'

}

const Button = ({children , className ,width, ...rest } : Iprops ) => {
  return (
    <button   className={`${className} ${width} p-2 text-white w-full rounded-2xl cursor-pointer`} 
      {...rest}>{children}  </button>
  )
}

export default Button