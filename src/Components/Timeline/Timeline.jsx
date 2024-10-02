// Timeline.jsx
import React from 'react';

const Timeline = () => {
  return (
    <section className="w-full py-16 bg-white">
      <h2 className="text-center text-3xl font-semibold mb-8">Career Journey</h2>
      <div className="flex justify-center items-center space-x-6">
        {/* Left Empty Box */}
        <div className="w-1/4 bg-gray-200 p-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="rounded-full mx-auto"
          />
        </div>
        {/* Timeline */}
        <div className="w-1/2">
          <div className="flex justify-around items-center">
            {['22', '23', '24', '25'].map((year, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 flex justify-center items-center rounded-full ${
                    year === '23' ? 'bg-black text-white' : 'bg-white border'
                  }`}
                >
                  {year}
                </div>
                <span className="text-gray-500 mt-2">2121 AK</span>
              </div>
            ))}
          </div>
        </div>
        {/* Right Empty Box */}
        <div className="w-1/4 bg-red-200 p-4"></div>
      </div>
    </section>
  );
};

export default Timeline;
