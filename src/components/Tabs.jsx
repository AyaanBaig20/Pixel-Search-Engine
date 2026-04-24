import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTab } from "../redux/features/searchSlice";

const Tabs = () => {
  let tabs = ["Photos", "Videos", "GIFs"];
  let dispatch = useDispatch();

  let ActiveTab = useSelector((state)=>state.search.Tab)

  return (
    <div className="flex gap-5 p-10">
      {tabs.map(function (elem, idx) {
        return (
          <button
          className={`${ActiveTab === elem ? "bg-blue-600" : "bg-gray-600"} active:scale-95 rounded px-5 py-2 cursor-pointer`}
            key={idx}
            onClick={()=>{dispatch(setTab(elem))}}
          >
            {elem}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
