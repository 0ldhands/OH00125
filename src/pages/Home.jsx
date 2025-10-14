import React, { useEffect, useState } from 'react'
import Homelayout from '../layout/Homelayout'
import '../index.css'

const Home = () => {
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
        <Homelayout/>
      )}
    </div>
    </div>
  )
}

export default Home