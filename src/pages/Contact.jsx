
import Contactlayout from '../layout/Contactlayout'
import { useEffect, useState } from 'react';

const Contact = () => {
   const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 3000);
        return () => clearTimeout(timer);
      }, []);
  return (
     <div>
       <div className="relative">
      {loading ? (
        <div className="fixed inset-0 bg-violet-300 flex items-center justify-center z-50">
          <div className="spiral-loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      ) : (
        <Contactlayout/>
      )}
    </div>
    </div>
  )
}

export default Contact