import React, { useEffect, useState } from 'react'
import Certificatelayout from '../layout/Certificatelayout';

const Certificate = () => {
  const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 3000);
        return () => clearTimeout(timer);
      }, []);
    return (
      <div>
         <div className="relative">
        {loading ? (
          <div className="fixed inset-0 bg-violet-900 flex items-center justify-center z-50">
            <div className="spiral-loader">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        ) : (
          <Certificatelayout/>
        )}
      </div>
      </div>
    )
}

export default Certificate