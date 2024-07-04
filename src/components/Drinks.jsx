import React from 'react'
import drink from "./drink.json"
const Drinks = ({addToDashboard}) => {
  return (
    <div className="font-[sans-serif]">
<div className="p-4 mx-auto lg:max-w-6xl max-w-xl md:max-w-full">
  <h3 className="text-2xl font-bold text-gray-800 mb-8 p-6">Menu</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {drink.map((product) => (
      <div
        key={product.id}
        className="bg-gray-100 rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative"
      >
        <div className="w-2/3 h-[200px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="h-full w-full object-contain"
          />
        </div>
        <div className="text-center mt-4">
          <h3 className="text-lg font-extrabold text-gray-800">
            {product.name}
          </h3>
          <h4 className="text-2xl text-gray-800 font-bold mt-4">
            Rs.{product.price}
          </h4>
          <button
            type="button"
            onClick={()=>addToDashboard(product)}
            className="w-full flex items-center justify-center gap-3 mt-6 px-4 py-2.5 bg-transparent hover:bg-gray-200 text-base text-[#333] border-2 font-semibold border-[#333] rounded-xl"
          >
            Buy
          </button>
        </div>
      </div>
    ))}
  </div>
</div>
</div>
  )
}

export default Drinks
