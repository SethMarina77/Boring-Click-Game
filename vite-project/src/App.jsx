import { useState } from "react";
import "./App.css";
import questions from "./questions.json";

function App() {
 
  //setup useState to hold the message's original value and the function to update it
  const [message, setMessage] = useState("Click a button pal");
  
  const handleClick = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <>
      <section
        id="game-area"
        className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white"
      >
        <div id="questions" className="font-bold text-3xl -mt-50">
          {message}
        </div>
        <div className="mt-20 space-x-40">
          <button
            onClick={() => handleClick("Okay, let's get started then")}
            className="hover:cursor-pointer before:ease relative h-12 w-40 overflow-hidden border border-blue-500 text-blue-500 shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-blue-500 before:duration-300 hover:text-white hover:shadow-blue-500 hover:before:h-64 hover:before:-translate-y-32"
          >
            <span className="relative z-10">Yes?</span>
          </button>

          <button
            onClick={() => handleClick("Ok then we can wait I guess")}
            className="hover:cursor-pointer text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border border-red-500 bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full"
          >
            <span className="relative z-10">No?</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
