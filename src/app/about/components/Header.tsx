import React from "react";
export const Header = () => {
  return (
    <div>
      <div className=" w-screen h-20 fixed bg-amber-50">
        <div className="flex ml-10 gap-3 pt-6 ">
          <img className="" src="Vec.png" alt="" />
          <img className="" src="Movie.png" alt="" />
        </div>
      </div>
      <div>
        <input
          className="p-2 border text-black rounded-b-xl opacity-40 w-120 ml-250 fixed mt-4"
          name="Search"
          placeholder="Search"
        />
      </div>
      <div className="w-9 h-9 flex border justify-center items-center rounded-md">
        <button>
          <img src="moon.png" alt="" />
        </button>
      </div>
    </div>
  );
};
