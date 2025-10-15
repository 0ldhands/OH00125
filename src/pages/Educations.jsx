import React, { useContext, useEffect, useState } from 'react'
import Educationslayout from '../layout/Educationslayout';
import { Usercontext } from '../Context/Context';

const Educations = () => {
 const [loading, setLoading] = useState(true);
   
     useEffect(() => {
       const timer = setTimeout(() => setLoading(false), 3000);
       return () => clearTimeout(timer);
     }, []);

     const{theme}=useContext(Usercontext)

   return (
     <div>
        <div className="relative">
       {loading ? (
         <div className={`fixed inset-0 ${theme?"bg-violet-900":"bg-gray-900"} flex items-center justify-center z-50`}>
           <div className="spiral-loader">
             <span></span>
             <span></span>
             <span></span>
             <span></span>
           </div>
         </div>
       ) : (
         <Educationslayout/>
       )}
     </div>
     </div>
   )
}

export default Educations