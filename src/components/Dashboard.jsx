import React from 'react';

const Dashboard = ({ orderedProducts }) => {
  return (
    <div className="font-[sans-serif] p-4 mx-auto lg:max-w-6xl max-w-xl md:max-w-full">
      <h1 className="text-2xl font-bold text-gray-800 mb-8 p-6">Dashboard</h1>
      {orderedProducts.length === 0 ? (
        <p className="text-center text-gray-600">No products ordered yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {orderedProducts.map((product) => (
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
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
