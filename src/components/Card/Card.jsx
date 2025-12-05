 import React, { useState } from "react";

const Card = ({ img, title, description, price }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative rounded-2xl overflow-hidden cursor-pointer group w-full"
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* Imagen de fondo */}
      <img
        src={img}
        alt="Image pastries"
        className="w-full rounded-md object-cover h-72 md:h-80 lg:h-96 transition-transform duration-300 group-hover:scale-105"
      />

      {/* Panel blanco que se expande */}
      <div
        className={`
          absolute left-0 right-0 bottom-0 h-full
          bg-white/80 rounded-b-lg p-6 transition-transform duration-500 ease-out
          ${isOpen ? "translate-y-0" : "translate-y-[calc(100%-6rem)]"}
        `}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-lg md:text-xl text-amber-900 font-extrabold">
            {title}
          </h3>
          <p className="text-lg md:text-xl font-extrabold text-amber-800">{price}</p>
        </div>

        {/* Mostrar descripción solo si está abierto */}
        <div className={`transition-all duration-500 ease-out ${isOpen ? "opacity-100 mt-4" : "opacity-0 mt-0"}`}>
          <p className="text-amber-800 text-sm md:text-base leading-relaxed">{description}</p>
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-700 hover:to-yellow-600 focus:ring-4 focus:outline-none focus:ring-amber-300 font-extrabold rounded-lg text-base w-full sm:w-auto px-7 py-3 text-center mt-8 shadow-md transform hover:scale-105 transition-all duration-200"
          >
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
