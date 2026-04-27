import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {removeCollections} from "../redux/features/collectionsSlices"
const CollectionsGrid = () => {
  const collections = useSelector((state) => state.collections.collections);
  const dispatch = useDispatch();

  let removeitem=(item)=>{
    dispatch(removeCollections(item.id))
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-5">
      {collections.map((item) => (
        <div
          key={item.id}
          className="group relative bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
        >
          {/* Image */}
          <div className="h-60 overflow-hidden bg-neutral-100">
            <a href={item.src} target="_blank" rel="noreferrer">
              <img
                src={item.src}
                alt={item.title || "Image"}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>

          {/* Remove Button */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button
            onClick={()=>{removeitem(item)}}
              className="px-4 py-1.5 rounded-full text-xs font-bold shadow-sm bg-red-600 text-white hover:bg-red-700"
            >
              Remove
            </button>
          </div>

          {/* Title */}
          <div className="p-3">
            <p className="text-[13px] font-medium text-neutral-800 dark:text-neutral-200 line-clamp-2">
              {item.title || "Untitled"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollectionsGrid;