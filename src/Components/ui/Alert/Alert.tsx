import './index.scss'
import { Bell , CircleX } from 'lucide-react';
interface Iprops {

}

const Alert = ({} : Iprops )  => {
  return (
    <div className='Alert-wrapper'>
   <div className='icondiv'>
   <div className='title'>
   <Bell/>  
<h4>Alert titel</h4>
  </div>
   <CircleX/>
   </div>
      <p>Lorem ipsum dolor sit amet consectetur
         adipisicing elit. Provident aliquid re
         m unde. Dolorum, asperiores quasi corr
         upti eos esse unde. Debitis alias susc
         ipit non harum doloribus nostrum offi
         ciis nam accusamus magnam!</p>
    </div>
  )
}

export default Alert