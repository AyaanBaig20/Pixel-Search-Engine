import { useEffect, useState } from "react";
import {addCollections} from "../redux/features/collectionsSlices"
import {useSelector,useDispatch} from "react-redux"

const ResultCard = ({ item }) => {
  const collection = useSelector((state)=>state.collections)
  const [saved, setSaved] = useState(false);
  const dispatch = useDispatch()

  const handleSave = (item) => {
    setSaved(!saved);
    dispatch(addCollections(item))
    
  };
  return (
    <div className="group bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
      
      {/* Image Container */}
      <div className="relative h-60 overflow-hidden bg-neutral-100">
        <a href={item.src} target="_blank" rel="noreferrer">
          <img
            src={item.src}
            alt={item.title || "Image"}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Hover Save Button */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            onClick={()=>{handleSave(item)}}
            className={`px-4 py-1.5 rounded-full text-xs font-bold shadow-sm transition-colors ${
              saved 
                ? "bg-red-600 text-white" 
                : "bg-white text-black hover:bg-neutral-100"
            }`}
          >
            {saved ? "SAVED" : "SAVE"}
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="p-3">
        <p className="text-[13px] font-medium text-neutral-800 dark:text-neutral-200 leading-snug line-clamp-2 min-h-[2.5rem]">
          {item.title || "Untitled"}
        </p>
      </div>
    </div>
  );
};

export default ResultCard;