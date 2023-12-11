"use client";
import { use, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="py-[100px]">
      <h1 className="text-center text-white text-[40px] mb-[70px]">
        I dag har Carla og Caro samlet grint <br></br>
        <br></br> {count}
        <br></br>gange
      </h1>
      <button
        className="bg-white p-[20px] rounded-[100px] flex align-center mx-auto hover:p-[30px] transition-all"
        onClick={() => setCount(count + 1)}
      >
        Ligegyldig grine knap
      </button>
    </div>
  );
};

export default Counter;
