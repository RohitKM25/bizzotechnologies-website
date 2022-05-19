import React, { useRef } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // const mainOnScroll = (event: any) => {
  //   if (event.target.scrollTop > 80) {
  //     document.getElementById("appbar")?.classList.remove("-top-20");
  //     document.getElementById("appbar")?.classList.add("top-0");
  //   } else {
  //     document.getElementById("appbar")?.classList.add("-top-20");
  //     document.getElementById("appbar")?.classList.remove("top-0");
  //   }
  // };

  return (
    <div
      id="main-content"
      className="w-full h-[100vh] text-slate-200 scroll-smooth overflow-scroll snap-mandatory"
    >
      {/* <div
        id="appbar"
        className="absolute transition-all -top-20 right-0 left-0 flex h-20 items-center px-2 border-b border-slate-700 bg-slate-900 bg-opacity-90"
      >
        <div className="flex items-center justify-center space-x-2">
          <div className="rounded-lg bg-slate-800">
            <img
              src="./assets/bizzo-technologies-logo-small-test.png"
              alt="logo"
              className="h-16"
            />
          </div>
          <p className="text-3xl font-cursive">BIZZO TECHNOLOGIES</p>
        </div>
        <div className="flex-grow"></div>
        <div></div>
      </div> */}

      <div
        className="h-[calc(100vh-3rem)] bg-cover p-2 text-slate-200 font-cursive"
        style={{ backgroundImage: "url('./assets/appbar-earth-image.jpg')" }}
      >
        <div className="flex flex-col space-y-5 p-5 items-center text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center space-y-4 space-x-0 md:space-y-0 md:space-x-10">
            <img
              className="h-20 bg-slate-900 rounded"
              src="./assets/bizzo-technologies-logo-small-test.png"
              alt="bizzo technologies logo"
            />
            <p className="text-4xl md:text-6xl">bizzo technologies</p>
          </div>
          <hr className="border-amber-500 border-b-4 w-1/3" />
          <p className="text-xl md:text-3xl pb-5">
            software solutions for{" "}
            <span className="border-b-4 border-amber-500 border-dotted">
              workplace automation
            </span>
            .
          </p>
          {/* <button className="flex items-center space-x-2 text-2xl bg-blue-600 text-white p-2 place-self-start">
            <p>Learn More</p>
            <span className="material-symbols-rounded">arrow_right_alt</span>
          </button> */}
        </div>
        <div
          className="flex space-y-5 p-5 items-center justify-center mt-10 lg:mx-[30%] bg-cover rounded"
          style={{ backgroundImage: "url('./assets/under-construction.jpg')" }}
        >
          <p className="text-xl md:text-4xl px-2 rounded bg-black">
            under construction
          </p>
          {/* <button className="flex items-center space-x-2 text-2xl bg-blue-600 text-white p-2 place-self-start">
            <p>Learn More</p>
            <span className="material-symbols-rounded">arrow_right_alt</span>
          </button> */}
        </div>
      </div>
      <div
        id="footer"
        className="absolute transition-all bottom-0 right-0 left-0 px-5 flex h-12 items-center border-b border-slate-700 bg-slate-900 bg-opacity-90"
      >
        <div className="flex items-center justify-center space-x-2">
          <p className="text-2xl font-cursive">bizzo technologies</p>
        </div>
        <div className="flex-grow"></div>
        <div className="flex items-center justify-center space-x-2">
          <p className="text-xl font-cursive">&copy; 2022</p>
        </div>
      </div>
    </div>
  );
}

export default App;
