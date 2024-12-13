import React from "react";

export default function Home() {
  return (
    <div className="h-screen w-full bg-black relative">
      
      <div className="h-screen w-40 bg-slate-800 rounded-3xl absolute left-4">
        <div className="w-12 h-12 ml-12 mt-10">
          <img className="w-16" src="/wind.png" alt="Wind Icon" />
        </div>
        <div className="w-12 h-12 ml-12 mt-12">
          <img src="/weather.png" alt="Weather Icon" />
          <p className="text-l text-black">weather</p>
        </div>
        <div className="w-12 h-12 ml-12 mt-12">
          <img src="/option.png" alt="Option Icon" />
          <p className="text-[20px] text-black">cities</p>
        </div>
        <div className="w-12 h-12 ml-12 mt-12">
          <img src="/map.png" alt="Map Icon" />
          <p className="text-[20px] text-black">Map</p>
        </div>
        <div className="w-12 h-12 ml-12 mt-12">
          <img src="/settings.png" alt="Settings Icon" />
          <p className="text-l text-black">settings</p>
        </div>
      </div>

      
      <div className="w-3/5 h-screen bg-black rounded-3xl absolute left-48">
        
        <div className="w-full h-14 bg-slate-800 rounded-3xl mt-4 relative">
          <p className="text-l text-slate-200 absolute top-4 left-2">search for cities</p>
        </div>

        
        <div className="w-full h-80 bg-black mt-4 rounded-3xl relative">
          <p className="text-[40px] text-white absolute top-6 left-8">Madrid</p>
          <p className="text-md text-slate-200 absolute top-20 left-8">Chance of rain 0%</p>
          <p className="text-[80px] text-white absolute bottom-4 left-8">31°</p>
          <div className="w-72 h-72 absolute right-4 top-4">
            <img src="/sun.png" alt="Sun Icon" />
          </div>
        </div>

        
        <div className="w-full h-64 bg-slate-800 rounded-3xl relative mt-6">
          <p className="text-lg text-gray-300 absolute top-4 left-6">TODAY'S FORECAST</p>
          <div className="w-11/12 h-2/3 grid grid-cols-6 absolute left-4 top-14">
            <div className="flex flex-col items-center">
              <h1 className="text-gray-300 font-semibold">6:00 AM</h1>
              <img className="w-24" src="/cloud.png" alt="Cloud Icon" />
              <h1 className="text-white font-bold text-3xl">25°</h1>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-gray-300 font-semibold">9:00 AM</h1>
              <img className="w-24" src="/cloud.png" alt="Cloud Icon" />
              <h1 className="text-white font-bold text-3xl">28°</h1>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-gray-300 font-semibold">12:00 PM</h1>
              <img className="w-24" src="/cloudandsun.png" alt="Cloud and Sun Icon" />
              <h1 className="text-white font-bold text-3xl">33°</h1>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-gray-300 font-semibold">3:00 PM</h1>
              <img className="w-24" src="/cloudandsun.png" alt="Cloud and Sun Icon" />
              <h1 className="text-white font-bold text-3xl">34°</h1>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-gray-300 font-semibold">6:00 PM</h1>
              <img className="w-24" src="/cloudandsun.png" alt="Cloud and Sun Icon" />
              <h1 className="text-white font-bold text-3xl">32°</h1>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-gray-300 font-semibold">9:00 PM</h1>
              <img className="w-24" src="/cloud.png" alt="Cloud Icon" />
              <h1 className="text-white font-bold text-3xl">30°</h1>
            </div>
          </div>
        </div>

        
        <div className="w-full h-52 bg-slate-800 rounded-3xl mt-4 relative">
          <h1 className="text-slate-400 absolute left-8 font-semibold top-4">AIR CONDITIONS</h1>
          <div className="bg-blue-500 text-white rounded-full h-8 w-24 items-center flex justify-center absolute top-4 right-8">
            See More
          </div>
          <div className="w-full h-2/3 grid grid-cols-4 absolute left-4 top-14">
            <div className="relative flex flex-col items-center justify-center">
              <h1 className="text-slate-400 left-8 font-semibold top-4 text-md">Real Feel</h1>
              <h1 className="text-white font-bold text-3xl mb-8">6°</h1>
            </div>
            <div className="relative flex flex-col items-center justify-center">
              <h1 className="text-slate-400 left-8 font-semibold top-4 text-md">Wind</h1>
              <h1 className="text-white font-bold text-3xl mb-8">5.4 km/h</h1>
            </div>
            <div className="relative flex flex-col items-center justify-center">
              <h1 className="text-slate-400 left-8 font-semibold top-4 text-md">Chance of Rain</h1>
              <h1 className="text-white font-bold text-3xl mb-8">0%</h1>
            </div>
            <div className="relative flex flex-col items-center justify-center">
              <h1 className="text-slate-400 left-8 font-semibold top-4 text-md">UV Index</h1>
              <h1 className="text-white font-bold text-3xl mb-8">3</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/4 h-[93%] bg-slate-800 rounded-3xl absolute right-8 top-14 flex items-end">
        <h1 className="absolute left-8 top-4 text-slate-400 font-semibold">7-DAY FORECAST</h1>
        <div className="w-full h-[90%]">
          <div className="w-full h-[12.8%] flex items-center justify-evenly">
            <h1 className="text-slate-400 font-semibold">Today</h1>
            <div className="w-1/3 h-full flex items-center justify-evenly">
              <img src="/sun.png" className="w-12" alt="Sunny Icon" />
              <h1 className="font-bold text-white">Sunny</h1>
            </div>
            <h1 className="font-bold text-slate-400">
              <span className="text-white">36</span>/22
            </h1>
          </div>
          <div className="w-full h-[12.8%] flex items-center justify-evenly">
            <h1 className="text-slate-400 font-semibold">Tue</h1>
            <div className="w-1/3 h-full flex items-center justify-evenly">
              <img src="/sun.png" className="w-12" alt="Sunny Icon" />
              <h1 className="font-bold text-white">Sunny</h1>
            </div>
            <h1 className="font-bold text-slate-400">
              <span className="text-white">37</span>/21
            </h1>
          </div>
          <div className="w-full h-[12.8%] flex items-center justify-evenly">
            <h1 className="text-slate-400 font-semibold">Wed</h1>
            <div className="w-1/3 h-full flex items-center justify-evenly">
              <img src="/sun.png" className="w-12" alt="Sunny Icon" />
              <h1 className="font-bold text-white">Sunny</h1>
            </div>
            <h1 className="font-bold text-slate-400">
              <span className="text-white">37</span>/21
            </h1>
          </div>
          <div className="w-full h-[12.8%] flex items-center justify-evenly">
            <h1 className="text-slate-400 font-semibold">Thu</h1>
            <div className="w-1/3 h-full flex items-center justify-evenly">
              <img src="/cloud.png" className="w-12" alt="Cloudy Icon" />
              <h1 className="font-bold text-white">Cloudy</h1>
            </div>
            <h1 className="font-bold text-slate-400">
              <span className="text-white">37</span>/21
            </h1>
          </div>

          <div className="w-full h-[12.8%] flex items-center justify-evenly">
            <h1 className="text-slate-400 font-semibold">Fri</h1>
            <div className="w-1/3 h-full flex items-center justify-evenly">
              <img src="/cloud.png" className="w-12" alt="Cloudy Icon" />
              <h1 className="font-bold text-white">Cloudy</h1>
            </div>
            <h1 className="font-bold text-slate-400">
              <span className="text-white">37</span>/21
            </h1>
          </div>

          <div className="w-full h-[12.8%] flex items-center justify-evenly">
            <h1 className="text-slate-400 font-semibold">Sat</h1>
            <div className="w-1/3 h-full flex items-center justify-evenly">
              <img src="/sun.png" className="w-12" alt="Cloudy Icon" />
              <h1 className="font-bold text-white">Sunny</h1>
            </div>
            <h1 className="font-bold text-slate-400">
              <span className="text-white">37</span>/21
            </h1>
          </div>

          <div className="w-full h-[12.8%] flex items-center justify-evenly">
            <h1 className="text-slate-400 font-semibold">Sun</h1>
            <div className="w-1/3 h-full flex items-center justify-evenly">
              <img src="/cloud.png" className="w-12" alt="Cloudy Icon" />
              <h1 className="font-bold text-white">Cloudy</h1>
            </div>
            <h1 className="font-bold text-slate-400">
              <span className="text-white">37</span>/21
            </h1>
          </div>
          
        </div>  
    </div>
    </div>
  );
}