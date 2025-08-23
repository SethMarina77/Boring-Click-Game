import { useState } from "react";
import "./App.css";

function App() {
  //bored making boring game that tells the user how much their life sucks
  return (
    <>
      <section
        id="game-area"
        className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white"
      >
        <div id="questions" className="font-bold text-3xl -mt-50">
          Placeholder Question
        </div>
        <div className="mt-20 space-x-40">
          <button class="hover:cursor-pointer before:ease relative h-12 w-40 overflow-hidden border border-blue-500 text-blue-500 shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-blue-500 before:duration-300 hover:text-white hover:shadow-blue-500 hover:before:h-64 hover:before:-translate-y-32">
            <span class="relative z-10">Yes?</span>
          </button>

          <button className="hover:cursor-pointer text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border border-red-500 bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full">
            <span className="relative z-10">No?</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
