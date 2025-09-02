 export function txtslice (txt: string , max : number = 50) {
    
    if (txt.length >= max) return `${ txt.slice(0 , max)}...`
        else
    return txt
}


// onClick={()=>{
//     if (tempcolor.includes(input)) {
//       settempcolor(prev => prev.filter(item => item != input))
//       return
//     }
    
    
//     settempcolor((prev) =>  [...prev , input])}}