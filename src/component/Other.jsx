import React, { useEffect, useState } from "react";
import "../index.css"; // import custom CSS

const SpiralLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {loading ? (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
          <div className="spiral-loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      ) : (
        <div className="opacity-0 animate-fadeIn">
          <h1 className="text-4xl font-bold text-center mt-10">
            ✨ Spiral Loader Done!
          </h1>
          <p className="text-center mt-4 text-gray-600">
            Your content is ready 🚀
          </p>
        </div>
      )}
    </div>
  );
};

export default SpiralLoader;
