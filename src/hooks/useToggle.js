import { useState } from "react"


export const useToggle = (initialValue = false) => {
   const [ isOpen, setIsOpne ] = useState(initialValue);
   
   const toggle = () => {
        setIsOpne(!isOpen);
   }

   return [ isOpen, toggle ];
}