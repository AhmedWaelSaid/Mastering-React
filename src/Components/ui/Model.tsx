import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import type { ReactNode } from 'react';
interface Iprops {
  isOpen: boolean ;
  children : ReactNode
  title : string

}


const Model =({children , isOpen , title } : Iprops) => {
 

  return (
    <>
      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none "
       onClose={close} __demoMode>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto border-2">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white border-1 border-red-400 p-5"
            >
             <div className='mt-5  text-center'>
             <DialogTitle as="h3" className="text-2xl font-medium text-red-500">
                 {title}         
     </DialogTitle>
             </div>
             
              <div className="mt-4">
               {children}
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}
export default Model