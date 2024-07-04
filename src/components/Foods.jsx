import React from 'react';
import food from './food.json';

const Foods = ({ addToDashboard }) => {
  return (
    <div className="font-[sans-serif]">
      <div className="p-4 mx-auto lg:max-w-6xl max-w-xl md:max-w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-8 p-6">Foods Menu</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {food.map((product) => (
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
                  className="w-full flex items-center justify-center gap-3 mt-6 px-4 py-2.5 bg-transparent hover:bg-gray-200 text-base text-[#333] border-2 font-semibold border-[#333] rounded-xl"
                  onClick={() => addToDashboard(product)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 512 512"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.75L4.5 7 12 3.75 19.5 7 12 9.75zM2 17.5v4l10 5v-4l-10-5zm10 1.75L4.5 19 12 15.75 19.5 19 12 21.25zM22 17.5v4l-10 5v-4l10-5z" />
                  </svg>
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Foods;
